import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiccreativeformComponent } from './dynamiccreativeform.component';

describe('DynamiccreativeformComponent', () => {
  let component: DynamiccreativeformComponent;
  let fixture: ComponentFixture<DynamiccreativeformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamiccreativeformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamiccreativeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
