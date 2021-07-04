import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StroopTestComponent } from './stroop-test.component';

describe('StroopTestComponent', () => {
  let component: StroopTestComponent;
  let fixture: ComponentFixture<StroopTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StroopTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StroopTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
