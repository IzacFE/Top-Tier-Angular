import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPassangerComponent } from './view-passanger.component';

describe('ViewPassangerComponent', () => {
  let component: ViewPassangerComponent;
  let fixture: ComponentFixture<ViewPassangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPassangerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPassangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
