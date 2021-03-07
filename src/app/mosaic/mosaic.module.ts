import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MosaicComponent} from './mosaic/mosaic.component';
import {TileComponent} from './tile/tile.component';


@NgModule({
    declarations: [TileComponent, MosaicComponent],
    exports: [
        TileComponent,
        MosaicComponent
    ],
    imports: [
        CommonModule
    ]
})
export class MosaicModule {
}
