import React, { useContext } from 'react';
import { useForm, useFormState } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosResponse, AxiosError } from 'axios';
import * as yup from 'yup';

import AuthAdapter from '../../../adapters/auth';
import errorIcon from '../../../assets/images/icons/error.svg';
import * as AUTH_ACTION from '../../../constants/authActionTypes';
import { AuthContext } from '../../../contexts/auth';
import { toTitleCase } from '../../../helpers/strings';
import { APIError } from '../../../types/apiError';
import { AuthPayload } from '../../../types/authActionType';

type LoginData = {
  email: string;
  password: string;
  [key: string]: string;
};

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required()
  })
  .required();

const LoginForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors }
  } = useForm<LoginData>({
    resolver: yupResolver(schema),
    reValidateMode: 'onSubmit'
  });

  const { isSubmitting } = useFormState({
    control
  });

  const { dispatch } = useContext(AuthContext);

  const onSubmit = async (data: LoginData) => {
    await AuthAdapter.login(data.email, data.password)
      .then((res: AxiosResponse<AuthPayload>) => {
        dispatch({
          type: AUTH_ACTION.SET_TOKEN,
          payload: res.data
        });
      })
      .catch((err: AxiosError<APIError>) => {
        const error = err.response?.data.errors[0];

        setError('all', {
          type: 'manual',
          message: error?.detail
        });
      });
  };

  return (
    <form className="form auth-form form-login" onSubmit={handleSubmit(onSubmit)}>
      {Object.keys(errors).length > 0 && (
        <div className="notification form-error" data-test-id="form-error">
          <img src={errorIcon} className="notification__icon icon" alt="logo" />
          <ul className="notification__detail form-error__list">
            {Object.keys(errors).map((key: keyof LoginData) => (
              <li className="form-error__list-item" role="alert" key={key}>
                {toTitleCase(errors[key].message)}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          {...register('email', { required: true })}
          type="email"
          className="form-input"
          data-test-id="input-email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          {...register('password', { required: true })}
          type="password"
          className="form-input"
          data-test-id="input-password"
        />
      </div>
      <input
        type="submit"
        className="btn form-submit"
        value="Sign in"
        disabled={isSubmitting}
        data-test-id="btn-signin"
      />
    </form>
  );
};

export default LoginForm;
