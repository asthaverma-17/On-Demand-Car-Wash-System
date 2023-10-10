import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasherhomepageComponent } from './washerhomepage.component';

describe('WasherhomepageComponent', () => {
  let component: WasherhomepageComponent;
  let fixture: ComponentFixture<WasherhomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasherhomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WasherhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
