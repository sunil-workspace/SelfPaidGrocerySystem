import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupFinishpayComponent } from './lookup-finishpay.component';

describe('LookupFinishpayComponent', () => {
  let component: LookupFinishpayComponent;
  let fixture: ComponentFixture<LookupFinishpayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupFinishpayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupFinishpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
