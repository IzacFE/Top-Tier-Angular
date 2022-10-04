import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPassangerComponent } from './edit-passanger.component';

describe('EditPassangerComponent', () => {
  let component: EditPassangerComponent;
  let fixture: ComponentFixture<EditPassangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPassangerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPassangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
