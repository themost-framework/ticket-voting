import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.scss']
})
export class AddCandidateComponent implements OnInit {

  @Input() model = {
    description: null,
    agreeTerms: false,
    agreeData: false,
    shareEmail: false,
    object: {
      givenName: null,
      familyName: null,
      email: null
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

  async submit() {

  }

}
