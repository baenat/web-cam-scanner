import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebcamModule } from 'ngx-webcam';
import { CameraComponent } from './camera/camera.component';
import { HeaderComponent } from './header/header.component';
import { TesseractComponent } from './tesseract/tesseract.component';
import { ScannerComponent } from './scanner/scanner.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { DevicesListComponent } from './selects/devices-list/devices-list.component';

import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { ResponseScanComponent } from './response-scan/response-scan.component';
import { MsgPermissionComponent } from './msg-permission/msg-permission.component';

@NgModule({
  declarations: [
    CameraComponent,
    HeaderComponent,
    TesseractComponent,
    ScannerComponent,
    DevicesListComponent,
    ResponseScanComponent,
    MsgPermissionComponent,
  ],
  imports: [
    CommonModule,
    WebcamModule,
    ZXingScannerModule,
    FormsModule,

    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatOptionModule,
    MatIconModule,
    MatSnackBarModule,
    ClipboardModule
  ],
  exports: [
    CameraComponent,
    HeaderComponent,
    TesseractComponent,
    ScannerComponent,
    DevicesListComponent,
  ]
})
export class ComponentsModule { }
