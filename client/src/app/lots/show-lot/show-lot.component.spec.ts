import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLotComponent } from './show-lot.component';

describe('ShowLotComponent', () => {
  let component: ShowLotComponent;
  let fixture: ComponentFixture<ShowLotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowLotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
