import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasherWpViewComponent } from './washer-wp-view.component';

describe('WasherWpViewComponent', () => {
  let component: WasherWpViewComponent;
  let fixture: ComponentFixture<WasherWpViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasherWpViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WasherWpViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
