import {Component} from '@angular/core';
import {Friend} from "./friend";
import {HttpClient} from "@angular/common/http";
import {AddFriendService} from "./add-friend.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'project-name';
  languages = [{name: 'Html'}, {name: 'CSS'}, {name: 'JS'}, {name: 'C#'}, {name: 'Python'}];
  friendModel = new Friend('', '', '', '', '');

  private addFriendService: AddFriendService;

  constructor(addFriendService: AddFriendService) {
    this.addFriendService = addFriendService;
  }

  public onSubmit(): any{
    this.addFriendService.addFriend(this.friendModel);
  }

}




