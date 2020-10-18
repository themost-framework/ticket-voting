import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { ErrorService } from 'src/app/shared/error.service';
import { AngularDataContext } from '@themost/angular';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from 'src/app/shared/loading.service';
import { NgTemplateOutlet, DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { ResponseError } from '@themost/client';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.scss']
})
export class AddCandidateComponent implements OnInit {

  @Input('showShareEmail') showShareEmail = false;
  @ViewChild('templateSubmitted') templateSubmitted: NgTemplateOutlet;
  @ViewChild('templateInvalidPeriod') templateInvalidPeriod: NgTemplateOutlet;
  @ViewChild('templateForm') templateForm: NgTemplateOutlet;
  @ViewChild('templateError') templateError: NgTemplateOutlet;

  public state: NgTemplateOutlet;
  public lastError: any;


  @Input() model = {
    description: null,
    shortDescription: null,
    agreeTerms: false,
    agreeData: false,
    shareEmail: false,
    actionStatus: null,
    electionEvent: null,
    object: {
      givenName: null,
      familyName: null,
      jobTitle: null,
      image: null,
      address: {
        email: null
      }
    }
  };

  constructor(private _errorService: ErrorService,
    private _context: AngularDataContext,
    private _activatedRoute: ActivatedRoute,
    private _loadingService: LoadingService,
    public _translateService: TranslateService) { }

  ngOnInit(): void {
    this._loadingService.showLoading();
    this._activatedRoute.params.subscribe((params) => {
      Promise.all([
        this._context.model('ElectionEvents').where('identifier').equal(params.id).getItem(),
        this._context.model('ActionStatusTypes').where('alternateName').equal('PotentialActionStatus').getItem(),
      ]).then((results) => {
        if (results[0] == null) {
          throw new ResponseError('Election cannot be found', 400);
        }
        // set election
        this.model.electionEvent = results[0];
        // set status
        this.model.actionStatus = results[1];
        // validate candidacy period
        const validPeriod = new Date() >= this.model.electionEvent.specification.candidacyFrom &&
          new Date() <= this.model.electionEvent.specification.candidacyThrough;
        const pipe = new DatePipe(this._translateService.currentLang);
        this.model.electionEvent.specification.candidacyFromString = pipe.transform(this.model.electionEvent.specification.candidacyFrom, 'short');
        this.model.electionEvent.specification.candidacyThroughString = pipe.transform(this.model.electionEvent.specification.candidacyThrough, 'short');
        if (validPeriod === false) {
          this.state = this.templateInvalidPeriod;
          this._loadingService.hideLoading();
          return;
        }
        // set state
        this.state = this.templateForm;
        this._loadingService.hideLoading();
      }).catch((err) => {
        this.lastError = err;
        this._loadingService.hideLoading();
        this.state = this.templateError;
      });
    });
  }

  async submit() {
    try {
      this._loadingService.showLoading();
      await this._context.model(`ElectionEvents/${this.model.electionEvent.identifier}/Candidates/Apply`).save(this.model);
      this.state = this.templateSubmitted;
      this._loadingService.hideLoading();
    } catch (err) {
      this._loadingService.hideLoading();
      this._errorService.showError(err);
    }
  }

  public onShortDescriptionChange(event?: any) {

  }

}
