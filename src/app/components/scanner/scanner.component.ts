import { Component } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
import { BehaviorSubject } from 'rxjs';
import { formatsAvailable, formatNames } from './barcode-formats';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent {

  allowedFormats: Array<BarcodeFormat> = formatsAvailable;
  availableDevices: MediaDeviceInfo[] = [];
  currentDevice!: MediaDeviceInfo;

  hasDevices: boolean | undefined;
  hasPermission: boolean | undefined;

  qrResultString: string = '';

  torchEnabled = false;
  torchAvailable$ = new BehaviorSubject<boolean>(false);
  tryHarder = false;

  constructor(private _snackbarService: SnackbarService) { }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
    this.hasDevices = Boolean(devices && devices.length);
  }

  onDeviceSelectChange(selected: any) {
    const device = (this.availableDevices.find(x => x.deviceId === selected) as MediaDeviceInfo);
    this.currentDevice = device;
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
    this._snackbarService.openSnackBar('Success', 'Ok', 2000);
  }

  clearResult(): void {
    this.qrResultString = '';
  }

  onHasPermission(has: boolean) {
    this.hasPermission = has;
  }

  onTorchCompatible(isCompatible: boolean): void {
    this.torchAvailable$.next(isCompatible || false);
  }

  toggleTorch(): void {
    this.torchEnabled = !this.torchEnabled;
  }

  toggleTryHarder(): void {
    this.tryHarder = !this.tryHarder;
  }

  changeAction = (value: any) => {
    this.qrResultString = value;
  }
}
