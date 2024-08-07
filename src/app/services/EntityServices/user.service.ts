
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Iuser } from '../../models/iuser';
import { CachingService } from '../caching.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://reqres.in/api';

  constructor(private cachingService: CachingService) {}

  getUsers(pageNumber:number): Observable<any[]> {
    return this.cachingService.get(`${this.apiUrl}/users?page=${pageNumber}`).pipe(
      map(response => response.data)
    );
  }

  getUser(userId: string): Observable<any> {
    return this.cachingService.get(`${this.apiUrl}/users/${userId}`).pipe(
      map(response => response.data)
    );
  }

  searchUserById(userId: string): Observable<any> {
    return this.cachingService.get(`${this.apiUrl}/users?page=1`).pipe(
      map(response => response.data.find( (user:Iuser )=> user.id.toString() === userId))
    );
  }
}
