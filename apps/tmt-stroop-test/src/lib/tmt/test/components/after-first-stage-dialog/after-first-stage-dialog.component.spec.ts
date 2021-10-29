import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterFirstStageDialogComponent } from './after-first-stage-dialog.component';

describe('AfterFirstStageDialogComponent', () => {
  let component: AfterFirstStageDialogComponent;
  let fixture: ComponentFixture<AfterFirstStageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterFirstStageDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterFirstStageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
