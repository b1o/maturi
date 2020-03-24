import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, switchMap, exhaustMap } from 'rxjs/operators';

import * as AuthActions from '../actions/auth.actions';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthEffects {
  constructor(private action$: Actions, private authService: AuthService) {}

  @Effect()
  login$ = this.action$.pipe(
    ofType(AuthActions.login),
    map(action => action.credentials),
    exhaustMap(credentials =>
      this.authService.login(credentials).pipe(
        map(user => AuthActions.loginSuccess({ user })),
        catchError(error => of(AuthActions.loginFail({ error })))
      )
    )
  );
}
