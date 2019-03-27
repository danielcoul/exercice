import { Component } from '@angular/core';
import {NgModule} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  

		posts = [
		 {
		 	title :'Mon premier Post',
		 	content :'Tout fonctionne bien sans erreur j adore apprendre angular',
		 	loveIts:0,
		 	create_at: new Date()
		 },
		 {
		 	title :'Mon deuxième Post',
		 	content :'Tout fonctionne bien sans erreur j adore apprendre angular',
		 	loveIts:0,
		 	create_at: new Date()
		 },
         {
		 	title :'Mon troisième Post',
		 	content :'Tout fonctionne bien sans erreur j adore apprendre angular',
		 	loveIts:0,
		 	create_at: new Date()
		 }

		];




}
