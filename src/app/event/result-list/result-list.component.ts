import { Component, OnInit, OnDestroy } from '@angular/core';
import { ErrorService } from 'src/app/shared/error.service';
import { AngularDataContext } from '@themost/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from 'src/app/shared/loading.service';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

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
    if (this.liveInterval) {
      clearInterval(this.liveInterval);
    }
  }

  constructor(private _errorService: ErrorService,
    private _context: AngularDataContext,
    private _activatedRoute: ActivatedRoute,
    private _loadingService: LoadingService,
    private _router: Router,
    private _translateService: TranslateService) {
    this.currentLang = this._translateService.currentLang;
  }

  public currentLang: string;
  public model: any;
  private paramSubscription: Subscription;
  public updatedAt = new Date();
  public liveUpdate = true;
  public liveInterval;

  public refresh() {
    const id = this._activatedRoute.snapshot.params.id;
    this._context.model(`ElectionEvents/${id}/results`).getItems().then((results) => {
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
        this._context.model(`ElectionEvents/${params.id}/results`).getItems(),
        this._context.model(`ElectionEvents`).where('superEvent/identifier').equal(params.id).getItems()
      ]).then((results) => {
        const subEvents = results[1];
        if (subEvents && subEvents.length) {
          return this._router.navigate([
            '/events',
            params.id,
            'results',
            'multiple'
          ]);
        }
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
