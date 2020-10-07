import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TranslateService } from '@ngx-translate/core';
import { ErrorModalComponent } from './error-modal/error-modal.component';
@Injectable()
export class ErrorService {

  private modalRef: BsModalRef;

  constructor(private modalService: BsModalService, private _translateService: TranslateService) { }

  showError(err: any) {
    this.modalRef = this.modalService.show(ErrorModalComponent, {
      initialState: {
        error: err
      },
      keyboard: true
    });
  }

}
