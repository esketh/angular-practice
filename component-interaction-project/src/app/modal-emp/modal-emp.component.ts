import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-modal-emp',
  templateUrl: './modal-emp.component.html',
  styleUrls: ['./modal-emp.component.css']
})
export class ModalEmpComponent implements OnInit {
  

  /**
   * Az adatok, amelyek megjelennek a modális ablakban.
   */
  @Input() modalEmpData: any = {};
  
  

  /**
   * Ha a showCounter property változik, akkor fut le a setter.
   * Amennyiben a számláló nem 0, akkor megjeleníti az ablakot.
   */
  @Input() set showEmpCounter(counter) {
    console.log(counter);
    if (counter > 0) {
      this.show();
    }
  }

  isShow: boolean = false;

  constructor() {
    
   }

  ngOnInit() {
  }

  show(): void {
    this.isShow = true;
  }
  
  hide(): void {
    this.isShow = false;
  }

  getDisplay(): string {
    return this.isShow ? 'block' : 'none';
  }

}
