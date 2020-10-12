import { Component, OnInit, OnDestroy } from '@angular/core';
import { ErrorService } from 'src/app/shared/error.service';
import { AngularDataContext } from '@themost/angular';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from 'src/app/shared/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    if (this.paramSubscription) {
      this.paramSubscription.unsubscribe();
    }
  }

  constructor(private _errorService: ErrorService,
    private _context: AngularDataContext,
    private _activatedRoute: ActivatedRoute,
    private _loadingService: LoadingService) { }

  public model: any;
  private paramSubscription: Subscription;

  ngOnInit(): void {
    this.paramSubscription = this._activatedRoute.params.subscribe((params) => {
      this._context.model(`ElectionEvents/${params.id}/results`).getItems().then((results) => {
        results.votes = results.votes.sort((a, b) => {
          if (a.total > b.total) {
            return -1;
          }
          if (a.total < b.total) {
            return 1;
          }
          return 0;
        });
        this.model = results;
      }).catch((err) => {
        this._errorService.showError(err);
      });
    });
  }

}
