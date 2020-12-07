import {Component} from '@angular/core';
import {Friend} from "./friend";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'project-name';
  languages = [{name: 'Html'}, {name: 'CSS'}, {name: 'JS'}, {name: 'C#'}, {name: 'Python'}];

  friendModel = new Friend(null, null, null, null, null);

}




