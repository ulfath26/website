import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndrapradeshComponent } from './andrapradesh.component';

describe('AndrapradeshComponent', () => {
  let component: AndrapradeshComponent;
  let fixture: ComponentFixture<AndrapradeshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndrapradeshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndrapradeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
