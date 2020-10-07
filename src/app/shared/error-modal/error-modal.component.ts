import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss']
})
export class ErrorModalComponent implements OnInit {

  @Input('error') error;

  constructor(private bsModalRef: BsModalRef) { }

  close() {
    this.bsModalRef.hide();
  }

  ngOnInit(): void {

  }

}
