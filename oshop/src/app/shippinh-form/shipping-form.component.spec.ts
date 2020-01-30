import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippinhFormComponent } from './shipping-form.component';

describe('ShippinhFormComponent', () => {
  let component: ShippinhFormComponent;
  let fixture: ComponentFixture<ShippinhFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippinhFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippinhFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
