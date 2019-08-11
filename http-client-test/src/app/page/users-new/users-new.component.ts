import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users-new',
  templateUrl: './users-new.component.html',
  styleUrls: ['./users-new.component.css']
})
export class UsersNewComponent implements OnInit {

  userList: User[] = [];
  newUser: User = new User();
  changeCounter: number = 0;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getAll().subscribe(
      users => this.userList = users
    )
  }

  onCreate(){
    this.userService.create(this.newUser).subscribe(
      user => {
        this.userList.push(user);
        this.newUser = new User();
        this.changeCounter++;
      },
      err => console.error(err)
    );
  }

}
