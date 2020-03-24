import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';
import { LoginCredentials } from '../models/loginCredentials.model';

export const login = createAction(
  '[Auth] Login',
  props<{ credentials: LoginCredentials }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: User }>()
);
export const loginFail = createAction(
  '[Auth] Login Fail',
  props<{ error?: any }>()
);
export const register = createAction('[Auth] Register');
export const registerSuccess = createAction('[Auth] Register Success');
export const registerFail = createAction('[Auth] Register Fail');
export const logout = createAction('[Auth] Logout');
