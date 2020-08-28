import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
  };

  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

  // ViewChild give access to all children in the form that identified by the name: 'userForm'
  @ViewChild('userForm') form: any;
  data: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    // dummy timeout to show subscribe to and async of rxjs
    this.userService.getData().subscribe((data) => {
      console.log(data);
    });

    // subscribe to users data stored locally in userService:
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      this.loaded = true;
    });
  }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();

  //   this.users.unshift(this.user);

  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: ''
  //   }
  // }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.userService.addUser(value);

      this.form.reset();
    }
  }
}
