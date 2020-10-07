import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector } from '@angular/core';
import { SpinnerComponent } from './spinner/spinner.component';
/**
 *
 * Displays Loading Spinner
 * @export
 * @class LoadingService
 */
@Injectable()
export class LoadingService {
  private componentRef: ComponentRef<any>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) {
  }

  private appendComponentToBody(component: any) {

    // do nothing if component ref already exists
    if (this.componentRef) {
      return;
    }

    // create a component reference from the component
    this.componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);

    // attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(this.componentRef.hostView);

    // get DOM element from component
    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    // append DOM element to the body
    document.body.appendChild(domElem);
  }

  /**
   *
   * Toggles show/hide state of spinner
   */
  toggle() {
    if (this.componentRef) {
      this.hideLoading();
    } else {
      this.showLoading();
    }
  }

  /**
   *
   * Shows spinner
   */
  showLoading() {
    if (this.componentRef == null) {
      this.appendComponentToBody(SpinnerComponent);
    }
  }

  /**
   *
   * Hides spinner
   */
  hideLoading() {
    if (this.componentRef) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
}
