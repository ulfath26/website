import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadyapradeshComponent } from './madyapradesh.component';

describe('MadyapradeshComponent', () => {
  let component: MadyapradeshComponent;
  let fixture: ComponentFixture<MadyapradeshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MadyapradeshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MadyapradeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
