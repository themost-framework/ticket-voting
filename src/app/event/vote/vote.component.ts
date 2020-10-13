import { Component, OnInit, OnDestroy, ViewChildren, TemplateRef, ViewChild } from '@angular/core';
import { ErrorService } from 'src/app/shared/error.service';
import { AngularDataContext } from '@themost/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from 'src/app/shared/loading.service';
import { Subscription } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit, OnDestroy {
  modalRef: any;
  ngOnDestroy(): void {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }

  constructor(private _errorService: ErrorService,
    private _context: AngularDataContext,
    private _activatedRoute: ActivatedRoute,
    private _loadingService: LoadingService,
    private _router: Router,
    private modalService: BsModalService) { }

  public model: any;
  public completed = false;
  public formInvalid = true;
  private querySubscription: Subscription;
  @ViewChild('confirmTemplate') confirmTemplate: NgTemplateOutlet;

  ngOnInit(): void {
    // get token (if any)
    const access_token = sessionStorage.getItem('access_token');
    if (access_token) {
      this._context.setBearerAuthorization(access_token);
    }
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
        this.onSelectionChange();
      }).catch((err) => {
        this._loadingService.hideLoading();
        this._errorService.showError(err);
        this._router.navigateByUrl('/');
      });
    }, (err) => {
      this._loadingService.hideLoading();
      this._errorService.showError(err);
      this._router.navigateByUrl('/');
    });

  }

  async submit() {
    this.modalRef = this.modalService.show(this.confirmTemplate);
  }

  private async doSubmit() {
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

  public onSelectionChange(_event?: any) {
    const selected = this.model.candidates.filter((candidate: any) => {
      return candidate.selected;
    }).length;
    this.formInvalid = !(selected >= this.model.specification.minimumSelection &&
      selected <= this.model.specification.maximumSelection);
  }

  confirm() {
    this.modalRef.hide();
    this.doSubmit();
  }

  decline() {
    this.modalRef.hide();
  }

}
