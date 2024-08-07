import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CachingService {
  private cache = new Map<string, any>();

  constructor(private http: HttpClient) {}

  get(url: string): Observable<any> {
    const cachedResponse = this.cache.get(url);
    if (cachedResponse) {
      return of(cachedResponse);
    } else {
      return this.http.get(url).pipe(
        tap(response => {
          this.cache.set(url, response);
        })
      );
    }
  }
}
