import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularDataContext } from '@themost/angular';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-event-home',
  templateUrl: './event-home.component.html',
  styleUrls: ['./event-home.component.scss']
})
export class EventHomeComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    if (this.paramSuscription) {
      this.paramSuscription.unsubscribe();
    }
  }
  model: any;
  paramSuscription: Subscription;

  constructor(private _context: AngularDataContext, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.paramSuscription = this._activatedRoute.params.subscribe((params) => {

      if (params.id === 'current') {
        return this._context.model('ElectionEvents/Current')
          .asQueryable()
          .getItem().then((result) => {
            this.model = result;
          });
      }

      this._context.model('ElectionEvents')
        .where('identifier').equal(params.id)
        .getItem().then((result) => {
          this.model = result;
        });
    });

  }

}
