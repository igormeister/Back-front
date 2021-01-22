import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBasketComponent } from './get-basket.component';

describe('GetBasketComponent', () => {
  let component: GetBasketComponent;
  let fixture: ComponentFixture<GetBasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetBasketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
