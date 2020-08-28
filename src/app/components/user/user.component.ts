import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  // properties
  user: User;

  // Methods
  constructor() {}

  ngOnInit(): void {
    this.user = {
      firstName: 'john',
      lastName: 'Doe',
      email: 'jo@test.com',
    };
  }
}
