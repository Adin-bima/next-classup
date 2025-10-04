import { EnumRole } from '../enums';

export default interface IAuthToken {
  accessToken: string;
  refreshToken: string;
  idToken: string;
}

export type IRoleInSchool = {
  role: EnumRole;
  schoolId: string;
  schoolName: string;
};

export interface IIDtokenPayload {
  aud: string;
  auth: string;
  auth_time: number;
  exp: number;
  iat: number;
  iss: string;
  jti: string;
  nbf: number;
  sub: string;
  token_name: string;
  token_type: string;

  identifier: string;
  name: string;
  roles: IRoleInSchool[];
}

export interface IAccessTokenPayload {
  aud: string;
  auth: string;
  auth_time: number;
  exp: number;
  iat: number;
  iss: string;
  jti: string;
  nbf: number;
  sub: string;
  token_name: string;
  token_type: string;

  identifier: string;
  name: string;
  roles: IRoleInSchool[];
}

export interface IRefreshTokenPayload {
  aud: string;
  auth: string;
  auth_time: number;
  exp: number;
  iat: number;
  iss: string;
  jti: string;
  nbf: number;
  sub: string;
  token_name: string;
  token_type: string;

  identifier: string;
  name: string;
  roles: IRoleInSchool[];
}
