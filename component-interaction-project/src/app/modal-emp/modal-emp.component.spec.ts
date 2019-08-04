import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEmpComponent } from './modal-emp.component';

describe('ModalEmpComponent', () => {
  let component: ModalEmpComponent;
  let fixture: ComponentFixture<ModalEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
