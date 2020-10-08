import { Component, OnInit, Input } from '@angular/core';
import { ErrorService } from 'src/app/shared/error.service';
import { AngularDataContext } from '@themost/angular';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from 'src/app/shared/loading.service';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.scss']
})
export class AddCandidateComponent implements OnInit {

  @Input('showShareEmail') showShareEmail = false;

  public showSubmitted = false;

  @Input() model = {
    description: null,
    agreeTerms: false,
    agreeData: false,
    shareEmail: false,
    actionStatus: null,
    electionEvent: null,
    object: {
      givenName: null,
      familyName: null,
      jobTitle: null,
      address: {
        email: null
      }
    }
  };

  constructor(private _errorService: ErrorService,
    private _context: AngularDataContext,
    private _activatedRoute: ActivatedRoute,
    private _loadingService: LoadingService) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      Promise.all([
        this._context.model('ElectionEvents').where('identifier').equal(params.id).getItem(),
        this._context.model('ActionStatusTypes').where('alternateName').equal('PotentialActionStatus').getItem(),
      ]).then((results) => {
        // set election
        this.model.electionEvent = results[0];
        // set status
        this.model.actionStatus = results[1];
      });
    });
  }

  async submit() {
    try {
      this._loadingService.showLoading();
      await this._context.model(`ElectionEvents/${this.model.electionEvent.identifier}/Candidates/Apply`).save(this.model);
      this.showSubmitted = true;
      this._loadingService.hideLoading();
    } catch (err) {
      this._loadingService.hideLoading();
      this._errorService.showError(err);
    }
  }

}
