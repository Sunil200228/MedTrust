import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifierloginComponent } from './verifierlogin.component';

describe('VerifierloginComponent', () => {
  let component: VerifierloginComponent;
  let fixture: ComponentFixture<VerifierloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifierloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifierloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
