import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessdetailsComponent } from './processdetails.component';

describe('ProductdetailsComponent', () => {
  let component: ProcessdetailsComponent;
  let fixture: ComponentFixture<ProcessdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessdetailsComponent]
    });
    fixture = TestBed.createComponent(ProcessdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
