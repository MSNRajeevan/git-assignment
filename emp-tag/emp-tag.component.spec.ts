import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpTagComponent } from './emp-tag.component';

describe('EmpTagComponent', () => {
  let component: EmpTagComponent;
  let fixture: ComponentFixture<EmpTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
