import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndStageDialogComponent } from './end-stage-dialog.component';

describe('EndStageDialogComponent', () => {
  let component: EndStageDialogComponent;
  let fixture: ComponentFixture<EndStageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndStageDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndStageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
