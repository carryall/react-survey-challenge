import { AxiosResponse } from 'axios';

import requestManager from '../lib/requestManager';

class AuthAdapter {
  static login = (email: string, password: string): Promise<AxiosResponse> => {
    /* eslint-disable camelcase */
    return requestManager('POST', `${process.env.REACT_APP_API_BASE_URL}/api/v1/oauth/token`, {
      data: {
        grant_type: 'password',
        email: email,
        password: password,
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET
      }
    });
  };
}

export default AuthAdapter;
