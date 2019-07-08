import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorystepperComponent } from './inventorystepper.component';

describe('InventorystepperComponent', () => {
  let component: InventorystepperComponent;
  let fixture: ComponentFixture<InventorystepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventorystepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorystepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
