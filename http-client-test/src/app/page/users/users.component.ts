import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userList: User[] = [];
  newUser: User = new User();
  filterPhrase: string = '';
  changeCounter: number = 0;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getAll().subscribe(
      users => this.userList = users
    )
  }

  sortData(sort: Sort){
      users => {
        if (!sort.active || sort.direction === '') {
        this.userList = users;
        return;
        }

   this.userList = users.sort((a, b) => {
    const isAsc = sort.direction === 'asc';
    switch (sort.active){
      case 'name.first': return compare(a.name.first, b.name.first, isAsc);
      case 'name.last': return compare(a.name.last, b.name.last, isAsc);
      case 'email': return compare(a.email, b.email, isAsc);
      case 'phone': return compare(a.phone, b.phone, isAsc);
      default: return 0;
    }
    }); 
   }
  }

  onDelete(user: User) {
    this.userService.remove(user.id).subscribe(
      response => {
        let index = this.userList.indexOf(user);
        this.userList.splice(index, 1);
        this.changeCounter++;
      },
      err => console.error(err)
    )
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}