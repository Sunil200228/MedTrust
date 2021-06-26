import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiertableComponent } from './verifiertable.component';

describe('VerifiertableComponent', () => {
  let component: VerifiertableComponent;
  let fixture: ComponentFixture<VerifiertableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifiertableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifiertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
