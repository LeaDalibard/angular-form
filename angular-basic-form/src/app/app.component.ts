import {Component} from '@angular/core';
import {Friend} from "./friend";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'project-name';
  languages = [{name: 'Html'}, {name: 'CSS'}, {name: 'JS'}, {name: 'C#'}, {name: 'Python'}];



  friendModel = new Friend(" ", " ", " ", " ", " ");

}




