import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Friend} from './friend';


@Injectable({
  providedIn: 'root'
})

export class AddFriendService {

  private url = 'http://localhost:9100/';

  constructor(private http: HttpClient) {
  }

  public addFriend(friend: Friend): any {
    return this.http.post(this.url, friend);
  }
}
