import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallWashersComponent } from './getall-washers.component';

describe('GetallWashersComponent', () => {
  let component: GetallWashersComponent;
  let fixture: ComponentFixture<GetallWashersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallWashersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallWashersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
