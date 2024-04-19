import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'response-scan',
  templateUrl: './response-scan.component.html',
  styleUrls: ['./response-scan.component.scss']
})
export class ResponseScanComponent {

  @Input() dataResponse = '';
  @Output() onChangeAction = new EventEmitter<any>();

  constructor(private _snackbarService: SnackbarService) { }

  clearResult = () => {
    this.dataResponse = '';
    this.changeAction();
  }

  changeAction = () => {
    this.onChangeAction.emit('');
  }

  openSnackBar(msg: string, action?: string) {
    this._snackbarService.openSnackBar(msg, action, 2000);
  }

}
