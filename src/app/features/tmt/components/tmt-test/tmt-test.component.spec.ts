import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmtTestComponent } from './tmt-test.component';

describe('TmtTestComponent', () => {
  let component: TmtTestComponent;
  let fixture: ComponentFixture<TmtTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmtTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmtTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
