import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(msg: string, action?: string, duration?: number) {
    let time = (duration) ? { duration: duration } : undefined;
    this._snackBar.open(msg, action, time);
  }
}
