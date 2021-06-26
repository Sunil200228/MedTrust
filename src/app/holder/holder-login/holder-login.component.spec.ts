import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolderLoginComponent } from './holder-login.component';

describe('HolderLoginComponent', () => {
  let component: HolderLoginComponent;
  let fixture: ComponentFixture<HolderLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolderLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolderLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
