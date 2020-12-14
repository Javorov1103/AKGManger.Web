import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceorderEditComponent } from './serviceorder-edit.component';

describe('ServiceorderEditComponent', () => {
  let component: ServiceorderEditComponent;
  let fixture: ComponentFixture<ServiceorderEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceorderEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceorderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
