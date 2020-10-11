import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallbackComponent } from './callback/callback.component';
import { RouterModule } from '@angular/router';
import { MostModule } from '@themost/angular';



@NgModule({
  declarations: [CallbackComponent],
  imports: [
    CommonModule,
    MostModule,
    RouterModule
  ]
})
export class AuthModule { }
