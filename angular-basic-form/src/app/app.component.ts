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
  public allFriends: any;

  constructor(addFriendService: AddFriendService) {
    this.addFriendService = addFriendService;
  }

  public onSubmit(): any {
    const observable = this.addFriendService.addFriend(this.friendModel);
    observable.subscribe((data: string) => this.displayFriend('http://localhost:9100/allFriends'), (error: string) => console.error('it did not work'));
    console.log(this.allFriends);
  }


  public async displayFriend(url: string): Promise<any> {
    const response = await fetch(url, {
      method: 'GET', headers: {'Content-Type': 'application/json'}
    });
    return this.allFriends = await response.json();
  }

  public ngOnInit(): any {
    this.displayFriend('http://localhost:9100/allFriends');
  }

}




