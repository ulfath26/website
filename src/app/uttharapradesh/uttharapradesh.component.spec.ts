import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UttharapradeshComponent } from './uttharapradesh.component';

describe('UttharapradeshComponent', () => {
  let component: UttharapradeshComponent;
  let fixture: ComponentFixture<UttharapradeshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UttharapradeshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UttharapradeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
