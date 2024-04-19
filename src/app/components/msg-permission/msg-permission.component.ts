import { Component, Input } from '@angular/core';

@Component({
  selector: 'msg-permission',
  templateUrl: './msg-permission.component.html',
  styleUrls: ['./msg-permission.component.scss']
})
export class MsgPermissionComponent {

  @Input() hasDevices: boolean | undefined;
  @Input() hasPermission: boolean | undefined;

  constructor() {
    this.hasPermission = undefined;
    this.hasDevices = undefined;
  }
}
