import {
  createReducer,
  on,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import * as fromRoot from 'src/app/reducers';

import * as AuthActions from '../actions/auth.actions';
import { state } from '@angular/animations';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: any;
  loggedIn: boolean;
}

export const initialState: AuthState = {
  user: null,
  loggedIn: false
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
    loggedIn: true
  })),
  on(AuthActions.logout, state => ({ ...state, user: null, loggedIn: false }))
);

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthUser = createSelector(
  selectAuthState,
  state => state?.user
);
