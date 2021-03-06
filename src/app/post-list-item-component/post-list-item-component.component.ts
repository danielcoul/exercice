import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {
   

	@Input() title: string;
	@Input() content: string;
	@Input() loveIts: number;
	@Input() create_at: string;

  constructor() { }
ngOnInit() {
  }

  getLoveIts()  {
  this.loveIts++;
  }

  getNoLoveIts()  {
  this.loveIts--;
  }

}
