import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularDataContext } from '@themost/angular';
import { ActivatedRoute } from '@angular/router';
import { ErrorService } from 'src/app/shared/error.service';
import { LoadingService } from 'src/app/shared/loading.service';

@Component({
  selector: 'app-confirm-candidate',
  templateUrl: './confirm-candidate.component.html',
  styleUrls: ['./confirm-candidate.component.scss']
})
export class ConfirmCandidateComponent implements OnInit, OnDestroy {
  private querySubscription: any;
  ngOnDestroy(): void {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }

  constructor(private _context: AngularDataContext,
    private _activatedRoute: ActivatedRoute,
    private _errorService: ErrorService,
    private _loadingService: LoadingService) { }

  private code: string;
  public confirmed = false;

  ngOnInit(): void {

    this.querySubscription = this._activatedRoute.queryParams.subscribe((queryParams) => {
      this.code = queryParams.code;
    });
  }

  async confirm() {
    try {
      this._loadingService.showLoading();
      await this._context.model(`ElectionEvents/Candidates/Confirm`).save({
        code: this.code
      });
      this._loadingService.hideLoading();
      this.confirmed = true;
    } catch (err) {
      this._loadingService.hideLoading();
      this._errorService.showError(err);
    }
  }

}
