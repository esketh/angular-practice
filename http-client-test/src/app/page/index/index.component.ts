import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  title: string = 'User stat';

  userList: User[] = [];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getAll().subscribe(
      users => this.userList = users
    )
  }

  countActive() {
    this.userService.getAll().subscribe(
    count => this.userList.reduce((a, c) => c.isActive ? ++a : a, 0)
    )
  }

  countNotActive() {
    this.userService.getAll().subscribe(
      count => this.userList.reduce((a, c) => c.isActive ? 0 : ++a, 0)
      ) 
  }

}
