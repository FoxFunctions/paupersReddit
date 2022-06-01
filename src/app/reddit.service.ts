import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RedditI } from './reddit';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(private http: HttpClient) { }

  searchReddit() : Observable<any>{
    return this.http.get<RedditI>("https://www.reddit.com/r/aww/.json");
  }
}
