import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWashPackComponent } from './all-wash-pack.component';

describe('AllWashPackComponent', () => {
  let component: AllWashPackComponent;
  let fixture: ComponentFixture<AllWashPackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllWashPackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllWashPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
