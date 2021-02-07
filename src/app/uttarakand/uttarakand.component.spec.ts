import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UttarakandComponent } from './uttarakand.component';

describe('UttarakandComponent', () => {
  let component: UttarakandComponent;
  let fixture: ComponentFixture<UttarakandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UttarakandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UttarakandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
