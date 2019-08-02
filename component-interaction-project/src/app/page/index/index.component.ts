import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  title: string = 'Dashboard';

  modalCounter: number = 0;

  constructor() { }

  ngOnInit() {
  }

  showModal(): void {
    this.modalCounter++;
  }

}
