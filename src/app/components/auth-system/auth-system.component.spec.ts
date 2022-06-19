import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSystemComponent } from './auth-system.component';

describe('AuthSystemComponent', () => {
  let component: AuthSystemComponent;
  let fixture: ComponentFixture<AuthSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
