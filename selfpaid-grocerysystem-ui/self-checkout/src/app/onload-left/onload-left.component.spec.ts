import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnloadLeftComponent } from './onload-left.component';

describe('OnloadLeftComponent', () => {
  let component: OnloadLeftComponent;
  let fixture: ComponentFixture<OnloadLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnloadLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnloadLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
