import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiersignupComponent } from './verifiersignup.component';

describe('VerifiersignupComponent', () => {
  let component: VerifiersignupComponent;
  let fixture: ComponentFixture<VerifiersignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifiersignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifiersignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
