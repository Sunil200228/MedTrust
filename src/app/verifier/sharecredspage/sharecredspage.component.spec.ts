import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharecredspageComponent } from './sharecredspage.component';

describe('SharecredspageComponent', () => {
  let component: SharecredspageComponent;
  let fixture: ComponentFixture<SharecredspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharecredspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharecredspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
