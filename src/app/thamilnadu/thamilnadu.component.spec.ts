import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThamilnaduComponent } from './thamilnadu.component';

describe('ThamilnaduComponent', () => {
  let component: ThamilnaduComponent;
  let fixture: ComponentFixture<ThamilnaduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThamilnaduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThamilnaduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
