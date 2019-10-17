import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiringComponent } from './airing.component';

describe('AiringComponent', () => {
  let component: AiringComponent;
  let fixture: ComponentFixture<AiringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
