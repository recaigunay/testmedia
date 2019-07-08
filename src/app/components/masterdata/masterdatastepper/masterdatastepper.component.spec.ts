import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterdatastepperComponent } from './masterdatastepper.component';

describe('MasterdatastepperComponent', () => {
  let component: MasterdatastepperComponent;
  let fixture: ComponentFixture<MasterdatastepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterdatastepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterdatastepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
