
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarouselModule } from '../carousel';
import { BlockCarouselComponent } from './block-carousel.component';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
  ],
  declarations: [
    BlockCarouselComponent,
  ],
  exports: [
    BlockCarouselComponent,
  ],
})
export class BlockCarouselModule {}