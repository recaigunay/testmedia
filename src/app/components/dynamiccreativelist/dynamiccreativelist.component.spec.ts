import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiccreativelistComponent } from './dynamiccreativelist.component';

describe('DynamiccreativelistComponent', () => {
  let component: DynamiccreativelistComponent;
  let fixture: ComponentFixture<DynamiccreativelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamiccreativelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamiccreativelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
