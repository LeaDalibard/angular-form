import {Component} from '@angular/core';
import {Friend} from "./friend";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'project-name';
  languages = [{name: 'Html'}, {name: 'CSS'}, {name: 'JS'}, {name: 'C#'}, {name: 'Python'}];

  phonePattern="^(?:0|\(?\+33\)?\s?|0033\s?)[1-79](?:[\.\-\s]?\d\d){4}$"+"^(?:0|\(?\+32\)?\s?|0032\s?)[1-79](?:[\.\-\s]?\d\d){4}$";


  friendModel = new Friend(" ", " ", " ", " ", " ");

}




