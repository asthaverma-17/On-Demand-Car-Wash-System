import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWpViewComponent } from './user-wp-view.component';

describe('UserWpViewComponent', () => {
  let component: UserWpViewComponent;
  let fixture: ComponentFixture<UserWpViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWpViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWpViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
