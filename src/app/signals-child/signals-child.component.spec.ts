import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsChildComponent } from './signals-child.component';

describe('SignalsChildComponent', () => {
  let component: SignalsChildComponent;
  let fixture: ComponentFixture<SignalsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignalsChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
