import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAl1ZYHGCBpTE0SON5_7K8Dwfk4enT-isc",
      authDomain: "ng-recipe-book-c86d6.firebaseapp.com"
    });
  }

  onNavigate(feature:string){
    this.loadedFeature = feature;
  }

}
