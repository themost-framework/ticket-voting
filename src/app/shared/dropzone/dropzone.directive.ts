import { Component, OnInit, Directive, ElementRef } from '@angular/core';
import * as Dropzone from 'dropzone';
@Directive({
  selector: '[appDropzone]'
})
export class DropzoneDirective implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    const dropzone = new Dropzone(this.element.nativeElement, {
      url: 'about:blank',
      uploadMultiple: false,
      autoProcessQueue: false
    });
    dropzone.on("addedfile", function (file) {
      /* Maybe display some more file information on your page */
    });

  }

}
