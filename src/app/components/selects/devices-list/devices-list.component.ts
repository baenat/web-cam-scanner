import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.scss']
})
export class DevicesListComponent {

  @Input() availableDevices: MediaDeviceInfo[] = [];
  @Input() device!: MediaDeviceInfo;
  @Output() onChangeAction = new EventEmitter();

  currentDevice!: MediaDeviceInfo;

  constructor() {}

  onDeviceSelectChange(device: any) {
    this.onChangeAction.emit(device.value);
  }

}
