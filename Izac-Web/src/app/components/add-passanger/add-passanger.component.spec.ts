import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPassangerComponent } from './add-passanger.component';

describe('AddPassangerComponent', () => {
  let component: AddPassangerComponent;
  let fixture: ComponentFixture<AddPassangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPassangerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPassangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
