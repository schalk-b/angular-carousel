import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarouselSlideComponent } from './carousel-slide/carousel-slide.component';
import { CarouselComponent } from './carousel.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CarouselComponent,
    CarouselSlideComponent,
  ],
  exports: [
    CarouselComponent,
    CarouselSlideComponent,
  ],
})
export class CarouselModule {}