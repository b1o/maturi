import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState, selectAuthUser } from '../reducers/auth.reducer';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {
  constructor(private store: Store<AuthState>) {
    this.store.select(selectAuthUser).subscribe(data => console.log(data));
  }

  ngOnInit(): void {}
}
