import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayServiceService } from './shared/services/overlay-service.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { TablesModule } from './tables/tables.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TablesModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [
    OverlayServiceService
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [
    OverlayModule
  ]
})
export class AppModule { }
