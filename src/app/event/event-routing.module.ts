import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { EventHomeComponent } from './event-home/event-home.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { ConfirmCandidateComponent } from './confirm-candidate/confirm-candidate.component';
import { VoteComponent } from './vote/vote.component';
import { ResultListComponent } from './result-list/result-list.component';
import { OverviewComponent } from './overview/overview.component';
import { MultipleVoteComponent } from './multiple-vote/multiple-vote.component';
import { MultipleResultListComponent } from './multiple-result-list/multiple-result-list.component';

const routes: Routes = [{
  path: ':id',
  component: EventHomeComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'overview'
    },
    {
      path: 'candidates',
      component: CandidateListComponent
    },
    {
      path: 'candidates/apply',
      component: AddCandidateComponent
    },
    {
      path: 'vote/multiple',
      component: MultipleVoteComponent
    },
    {
      path: 'vote',
      component: VoteComponent
    },
    {
      path: 'results/multiple',
      component: MultipleResultListComponent
    },
    {
      path: 'results',
      component: ResultListComponent
    },
    {
      path: 'overview',
      component: OverviewComponent
    }
  ]
},
{
  path: 'candidates/confirm',
  component: ConfirmCandidateComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
