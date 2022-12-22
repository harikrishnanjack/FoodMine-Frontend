import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdertrackPageComponent } from './ordertrack-page.component';

describe('OrdertrackPageComponent', () => {
  let component: OrdertrackPageComponent;
  let fixture: ComponentFixture<OrdertrackPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdertrackPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdertrackPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
