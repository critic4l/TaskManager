import { Injectable, ViewContainerRef, Component, Injector, ComponentRef } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { EntityCreateComponent } from '../components/entity-create/entity-create.component';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class OverlayServiceService {

  constructor(private overlay: Overlay) { }

  showEntityCreationOverlay(componentToCreate: ComponentType<any>,
                            injector: Injector,
                            container: any[],
                            viewContainerRef: ViewContainerRef) {
    const config = new OverlayConfig();

    config.positionStrategy = this.overlay.position()
        .global()
        .centerHorizontally().centerVertically();


    config.hasBackdrop = true;

    const overlayRef = this.overlay.create(config);

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });

    const componentRef: ComponentRef<EntityCreateComponent> = overlayRef.attach(new ComponentPortal(componentToCreate,
                                                                                                    viewContainerRef,
                                                                                                    injector));

    const entityCreateInstance: EntityCreateComponent = componentRef.instance;
    entityCreateInstance.createEntityEvent.subscribe(
      (entity) => {
        overlayRef.detach();
        container.push(entity);
      }
    );
  }
}
