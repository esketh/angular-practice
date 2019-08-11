import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {

  userList: User[] = [];
  changeCounter: number = 0;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getAll().subscribe(
      users => this.userList = users
    )
  }

  onUpdate(user: any) {
    this.userService.update(user).subscribe(
      response => {
        this.changeCounter++;
      },
      err => console.error(err)
    )
  }

}
