import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseScanComponent } from './response-scan.component';

describe('ResponseScanComponent', () => {
  let component: ResponseScanComponent;
  let fixture: ComponentFixture<ResponseScanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponseScanComponent]
    });
    fixture = TestBed.createComponent(ResponseScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
