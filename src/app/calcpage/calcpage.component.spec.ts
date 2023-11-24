import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcpageComponent } from './calcpage.component';

describe('CalcpageComponent', () => {
  let component: CalcpageComponent;
  let fixture: ComponentFixture<CalcpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalcpageComponent]
    });
    fixture = TestBed.createComponent(CalcpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
