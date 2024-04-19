import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgPermissionComponent } from './msg-permission.component';

describe('MsgPermissionComponent', () => {
  let component: MsgPermissionComponent;
  let fixture: ComponentFixture<MsgPermissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MsgPermissionComponent]
    });
    fixture = TestBed.createComponent(MsgPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
