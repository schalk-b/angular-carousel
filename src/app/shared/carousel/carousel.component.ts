import { EventEmitter } from '@angular/core';
import { Component, ContentChildren, Output, QueryList } from '@angular/core';
import { CarouselSlideComponent } from './carousel-slide/carousel-slide.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {

  @Output() currentIndexChanged = new EventEmitter<number>();

  @ContentChildren(CarouselSlideComponent) slides!: QueryList<CarouselSlideComponent>;
  
  currentIndex = 0;
  backDisabled = true;
  nextDisabled = false;
  slidesStyle = {
    transform: `translateX(0%)`
  };

  next() {
    this.currentIndex++;
    this.update();
  }

  back() {
    this.currentIndex--;
    this.update();
  }

  update() {
    this.backDisabled = this.currentIndex === 0;
    this.nextDisabled = this.currentIndex === this.slides.length - 1;

    this.slidesStyle.transform = `translateX(-${this.currentIndex * 100}%)`;

    this.currentIndexChanged.next(this.currentIndex);
  }
}
