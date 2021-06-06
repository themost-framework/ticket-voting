import { Component, OnInit, OnDestroy } from '@angular/core';
import { ErrorService } from 'src/app/shared/error.service';
import { AngularDataContext } from '@themost/angular';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from 'src/app/shared/loading.service';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-multiple-result-list',
  templateUrl: './multiple-result-list.component.html',
  styleUrls: ['./multiple-result-list.component.scss']
})
export class MultipleResultListComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    if (this.paramSubscription) {
      this.paramSubscription.unsubscribe();
    }
    if (this.liveInterval) {
      clearInterval(this.liveInterval);
    }
  }

  constructor(private _errorService: ErrorService,
    private _context: AngularDataContext,
    private _activatedRoute: ActivatedRoute,
    private _loadingService: LoadingService,
    private _translateService: TranslateService) {
    this.currentLang = this._translateService.currentLang;
  }

  public currentLang: string;
  public model: any;
  public subEvents: any[] = [];
  private paramSubscription: Subscription;
  public updatedAt = new Date();
  public liveUpdate = true;
  public liveInterval;

  public refresh() {
    const id = this._activatedRoute.snapshot.params.id;
    this._context.model(`ElectionEvents/${id}/SubResults`).getItems().then((results) => {
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
      this.updatedAt = new Date();
    }).catch((err) => {
      console.log(err);
    });
  }

  ngOnInit(): void {
    this.paramSubscription = this._activatedRoute.params.subscribe((params) => {

      Promise.all([
        this._context.model(`ElectionEvents/${params.id}/SubResults`).getItems(),
        this._context.model(`ElectionEvents`).where('superEvent/identifier').equal(params.id).getItems()
      ]).then((results) => {
        const eventResults = results[0];
        eventResults.votes = eventResults.votes.sort((a, b) => {
          if (a.total > b.total) {
            return -1;
          }
          if (a.total < b.total) {
            return 1;
          }
          return 0;
        });
        this.subEvents = results[1];
        this.model = eventResults;
      }).catch((err) => {
        this._errorService.showError(err);
      });
    });
    if (this.liveUpdate) {
      this.liveInterval = setInterval(() => {
        this.refresh();
      }, 300000);
    }
  }

}
