import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'response-scan',
  templateUrl: './response-scan.component.html',
  styleUrls: ['./response-scan.component.scss']
})
export class ResponseScanComponent {

  @Input() dataResponse = '';
  @Output() onChangeAction = new EventEmitter<any>();

  clearResult = () => {
    this.dataResponse = '';
    this.changeAction();
  }

  changeAction = () => {
    this.onChangeAction.emit('');
  }

}
