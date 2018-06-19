import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoTableComponent } from './logo-table.component';

describe('LogoTableComponent', () => {
  let component: LogoTableComponent;
  let fixture: ComponentFixture<LogoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
