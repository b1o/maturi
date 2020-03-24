import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState, selectAuthUser } from 'src/app/auth/reducers/auth.reducer';
import { logout } from 'src/app/auth/actions/auth.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() loggedIn = false;

  public defaultLinks = [
    { label: 'Начало', link: '/' },
    { label: 'Предмети', link: '/' },
    { label: 'Приложение', link: '/' },
    { label: 'Вход', link: '/auth' }
  ];

  public loggedInLinks = [
    { label: 'Начало', link: '/' },
    { label: 'Предмети', link: '/' },
    { label: 'Приложение', link: '/' },
    { label: 'Изход', action: this.logout.bind(this) }
  ];

  constructor(private store: Store<AuthState>) {
    this.store.select(selectAuthUser).subscribe(data => {
      this.loggedIn = !!data;
    });
  }

  public get links() {
    return this.loggedIn ? this.loggedInLinks : this.defaultLinks;
  }

  private logout() {
    this.store.dispatch(logout());
  }

  ngOnInit(): void {}
}
