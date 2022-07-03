import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileImageIconComponent } from './profile-image-icon.component';

describe('ProfileImageIconComponent', () => {
  let component: ProfileImageIconComponent;
  let fixture: ComponentFixture<ProfileImageIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileImageIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileImageIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
