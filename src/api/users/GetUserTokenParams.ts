// Get the diverse user token for the current user with the Bearer token.
export interface GetUserTokenRequestParams {
  refreshToken?: boolean;
}

export interface GetUserTokenResponseParams {
  token: string;
}
