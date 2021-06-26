import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolderTablePageComponent } from './holder-table-page.component';

describe('HolderTablePageComponent', () => {
  let component: HolderTablePageComponent;
  let fixture: ComponentFixture<HolderTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolderTablePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolderTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
