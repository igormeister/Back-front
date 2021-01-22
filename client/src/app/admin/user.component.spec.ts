import { UserModule } from './user.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('User', () => {
  let component: UserModule;
  let fixture: ComponentFixture<UserModule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
