import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldersignupComponent } from './holdersignup.component';

describe('HoldersignupComponent', () => {
  let component: HoldersignupComponent;
  let fixture: ComponentFixture<HoldersignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoldersignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldersignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
