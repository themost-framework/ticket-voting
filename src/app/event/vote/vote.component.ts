import { Component, OnInit, OnDestroy } from '@angular/core';
import { ErrorService } from 'src/app/shared/error.service';
import { AngularDataContext } from '@themost/angular';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from 'src/app/shared/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }

  constructor(private _errorService: ErrorService,
    private _context: AngularDataContext,
    private _activatedRoute: ActivatedRoute,
    private _loadingService: LoadingService) { }

  public model: any;
  public completed = false;
  private querySubscription: Subscription;

  ngOnInit(): void {
    this._loadingService.showLoading();
    this.querySubscription = this._activatedRoute.queryParams.subscribe((queryParams) => {
      const access_token = queryParams.access_token;
      // exchange and validate token

      // get candidates
      Promise.all([
        this._context.model('ElectionEvents/Current').asQueryable().getItem(),
        this._context.model('ElectionEvents/Current/Candidates').getItems()
      ]).then((results) => {
        this._loadingService.hideLoading();
        this.model = Object.assign(results[0], {
          candidates: results[1]
        });
      }).catch((err) => {
        this._loadingService.hideLoading();
        this._errorService.showError(err);
      });
    }, (err) => {
      this._loadingService.hideLoading();
      this._errorService.showError(err);
    });

  }

  async submit() {
    try {
      this._loadingService.showLoading();
      // get selected candidates
      const data = this.model.candidates.filter((candidate: any) => {
        return candidate.selected;
      });
      await this._context.model(`ElectionEvents/Current/Vote`).save(data);
      this.completed = true;
      this._loadingService.hideLoading();
    } catch (err) {
      this._loadingService.hideLoading();
      this._errorService.showError(err);
    }
  }

}
