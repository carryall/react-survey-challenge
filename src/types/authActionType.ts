export type AuthActionType = {
  type: string;
  payload: AuthPayload;
};

export type AuthPayload = {
  attributes: AuthAttributes;
};

type AuthAttributes = {
  /* eslint-disable camelcase */
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  /* eslint-enable camelcase */
};
