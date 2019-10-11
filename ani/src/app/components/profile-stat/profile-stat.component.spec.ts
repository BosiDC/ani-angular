import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileStatComponent } from './profile-stat.component';

describe('ProfileStatComponent', () => {
  let component: ProfileStatComponent;
  let fixture: ComponentFixture<ProfileStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
