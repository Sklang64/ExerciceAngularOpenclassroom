import { Component } from '@angular/core';
import * as  firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    //lien avec Firebase
    var config = {
      apiKey: "AIzaSyDI7ibUZmLAfQc7jZIh7A8yIlbshHYM9Vo",
      authDomain: "bibliotheque-b79e9.firebaseapp.com",
      databaseURL: "https://bibliotheque-b79e9.firebaseio.com",
      projectId: "bibliotheque-b79e9",
      storageBucket: "bibliotheque-b79e9.appspot.com",
      messagingSenderId: "843996971212"
    };
    firebase.initializeApp(config);
  
  }
}
