import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginCredentials } from '../models/loginCredentials.model';
import { User } from '../models/user.model';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private testUser: User = {
    id: 1,
    firstName: 'jon',
    lastName: 'snow',
    email: 'stark@ghost.com',
    role: 'Teacher'
  };

  constructor(private http: HttpClient) {}

  login(credentials: LoginCredentials) {
    return of(this.testUser).pipe(delay(500));
  }
}
