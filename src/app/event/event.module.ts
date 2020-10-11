import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventRoutingModule } from './event-routing.module';
import { CandidateComponent } from './candidate/candidate.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { EventHomeComponent } from './event-home/event-home.component';
import { MostModule } from '@themost/angular';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms'
import { SharedModule } from '../shared/shared.module';
import { ConfirmCandidateComponent } from './confirm-candidate/confirm-candidate.component';
import { VoteComponent } from './vote/vote.component';

@NgModule({
  declarations: [CandidateComponent, AddCandidateComponent, CandidateListComponent, EventHomeComponent, ConfirmCandidateComponent, VoteComponent],
  imports: [
    CommonModule,
    FormsModule,
    MostModule,
    TranslateModule.forChild({
      isolate: false
    }),
    EventRoutingModule,
    SharedModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class EventModule { }
