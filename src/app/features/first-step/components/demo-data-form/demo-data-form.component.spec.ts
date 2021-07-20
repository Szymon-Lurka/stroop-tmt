import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDataFormComponent } from './demo-data-form.component';

describe('DemoDataFormComponent', () => {
  let component: DemoDataFormComponent;
  let fixture: ComponentFixture<DemoDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoDataFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
