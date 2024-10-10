import { Injectable } from '@angular/core';
import { User } from '../data-model/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  private source=new BehaviorSubject<User|undefined>(undefined);

  sharedState:Observable<User|undefined>=this.source.asObservable();

  get(): Observable<User> {
    const obs = this.httpClient.get<User>("/api/user")
    obs.subscribe({
      next: (result) => this.source.next(result),
      error: (err) => this.source.next(undefined),
    });
    return obs;
  }
}
