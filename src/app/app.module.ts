import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MosaicModule} from './mosaic/mosaic.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        MosaicModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
