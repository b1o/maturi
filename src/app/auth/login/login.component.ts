import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { LoginCredentials } from '../models/loginCredentials.model';
import { Store } from '@ngrx/store';
import { AuthState } from '../reducers/auth.reducer';

import * as AuthActions from '../actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AuthState>) {
    this.loginForm = this.fb.group({
      username: '',
      password: '',
      rememberMe: false
    });

    console.log(this.loginForm);
  }

  submit() {
    this.store.dispatch(
      AuthActions.login({ credentials: this.loginForm.value })
    );
  }

  ngOnInit(): void {}
}
