import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list-for-view',
  templateUrl: './user-list-for-view.component.html',
  styleUrls: ['./user-list-for-view.component.css']
})
export class UserListForViewComponent implements OnInit {

  constructor() { }
  todayDate = new Date();

  ngOnInit() {
  }

}
