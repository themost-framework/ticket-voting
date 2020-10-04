import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { EventHomeComponent } from './event-home/event-home.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';

const routes: Routes = [{
  path: ':id',
  component: EventHomeComponent,
  children: [
    {
      path: 'candidates',
      component: CandidateListComponent
    },
    {
      path: 'candidates/apply',
      component: AddCandidateComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
