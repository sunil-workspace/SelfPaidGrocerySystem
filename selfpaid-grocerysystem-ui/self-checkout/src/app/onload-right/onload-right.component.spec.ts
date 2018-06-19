import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnloadRightComponent } from './onload-right.component';

describe('OnloadRightComponent', () => {
  let component: OnloadRightComponent;
  let fixture: ComponentFixture<OnloadRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnloadRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnloadRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
