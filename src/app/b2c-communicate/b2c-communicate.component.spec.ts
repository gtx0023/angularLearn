import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2cCommunicateComponent } from './b2c-communicate.component';

describe('B2cCommunicateComponent', () => {
  let component: B2cCommunicateComponent;
  let fixture: ComponentFixture<B2cCommunicateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B2cCommunicateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B2cCommunicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
