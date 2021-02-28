import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselModule } from './shared/carousel/carousel.module';
import { BlockCarouselModule } from './shared/block-carousel';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    BlockCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
