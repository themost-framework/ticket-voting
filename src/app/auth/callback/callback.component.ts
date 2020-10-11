import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AngularDataContext } from '@themost/angular';

@Component({
  selector: 'app-callback',
  template: `<div></div>`
})
export class CallbackComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }

  constructor(private _activateRoute: ActivatedRoute,
    private _context: AngularDataContext,
    private _router: Router) { }

  private querySubscription: Subscription;

  ngOnInit(): void {
    this.querySubscription = this._activateRoute.queryParams.subscribe((queryParams) => {
      return this.callback(queryParams);
    });
  }

  async callback(params: any) {
    if (params.access_token) {
      sessionStorage.setItem('access_token', params.access_token);
      this._context.setBearerAuthorization(params.access_token);
    }
    if (params.state) {
      this._router.navigateByUrl(params.state);
    } else {
      this._router.navigateByUrl('/');
    }
  }

}
