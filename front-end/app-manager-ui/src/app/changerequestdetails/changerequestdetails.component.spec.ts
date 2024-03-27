import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeRequestdetailsComponent } from './changerequestdetails.component';

describe('ChangeRequestdetailsComponent', () => {
  let component: ChangeRequestdetailsComponent;
  let fixture: ComponentFixture<ChangeRequestdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeRequestdetailsComponent]
    });
    fixture = TestBed.createComponent(ChangeRequestdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
