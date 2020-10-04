import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventRoutingModule } from './event-routing.module';
import { CandidateComponent } from './candidate/candidate.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { EventHomeComponent } from './event-home/event-home.component';
import { MostModule } from '@themost/angular';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [CandidateComponent, AddCandidateComponent, CandidateListComponent, EventHomeComponent],
  imports: [
    CommonModule,
    MostModule,
    TranslateModule.forChild({
      isolate: false
    }),
    EventRoutingModule
  ]
})
export class EventModule { }
