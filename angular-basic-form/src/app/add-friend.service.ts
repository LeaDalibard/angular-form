import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Friend} from './friend';


@Injectable({
  providedIn: 'root'
})

export class AddFriendService {

  private url: string;

  constructor(private http: HttpClient) {
  }

  public addFriend(friend: Friend): any {
    this.url = 'http://localhost:9100/addFriend';
    return this.http.post(this.url, friend);
  }
}
