import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpShowchildComponent } from './emp-showchild.component';

describe('EmpShowchildComponent', () => {
  let component: EmpShowchildComponent;
  let fixture: ComponentFixture<EmpShowchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpShowchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpShowchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
