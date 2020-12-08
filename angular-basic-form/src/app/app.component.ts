import {Component} from '@angular/core';
import {Friend} from './friend';
import {AddFriendService} from './add-friend.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'project-name';
  languages = ['Html', 'CSS', 'JS', 'C#', 'Python'];
  friendModel = new Friend('', '', '', '', '');

  private addFriendService: AddFriendService;

  constructor(addFriendService: AddFriendService) {
    this.addFriendService = addFriendService;
  }

  public onSubmit(): void{
    const observable = this.addFriendService.addFriend(this.friendModel);
    observable.subscribe(data => console.log('it works'), error => console.error('it did not work'));
  }

}




