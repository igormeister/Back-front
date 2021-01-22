export interface TokensObj {
  tokens: Tokens;
  user: User;
}

export interface User {
  user_login: string;
  user_uuid: string;
}

export interface Tokens {
  access: AccessToken;
  refresh: RefreshToken;
}

export interface AccessToken {
  token: string;
  expDate: string;
}
export interface RefreshToken {
  token: string;
  expDate: string;
}
