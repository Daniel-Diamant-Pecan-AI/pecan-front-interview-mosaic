import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MosaicComponent} from './mosaic/mosaic.component';
import {BoxComponent} from './box/box.component';


@NgModule({
  declarations: [BoxComponent, MosaicComponent],
  exports: [
    BoxComponent,
    MosaicComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MosaicModule {
}
