import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpEntrychildComponent } from './emp-entrychild.component';

describe('EmpEntrychildComponent', () => {
  let component: EmpEntrychildComponent;
  let fixture: ComponentFixture<EmpEntrychildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpEntrychildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpEntrychildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
