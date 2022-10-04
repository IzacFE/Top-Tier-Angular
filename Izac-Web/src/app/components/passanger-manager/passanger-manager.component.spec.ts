import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassangerManagerComponent } from './passanger-manager.component';

describe('PassangerManagerComponent', () => {
  let component: PassangerManagerComponent;
  let fixture: ComponentFixture<PassangerManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassangerManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassangerManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
