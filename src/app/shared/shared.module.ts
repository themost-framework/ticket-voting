import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ErrorModalComponent } from './error-modal/error-modal.component';
import { TranslateModule } from '@ngx-translate/core';
import { ErrorService } from './error.service';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoadingService } from './loading.service';

@NgModule({
  declarations: [ErrorModalComponent, SpinnerComponent],
  entryComponents: [
    ErrorModalComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    HttpClientModule,
    TranslateModule.forChild({
      isolate: false
    })
  ],
  providers: [
    ErrorService,
    LoadingService
  ]
})
export class SharedModule {

}
