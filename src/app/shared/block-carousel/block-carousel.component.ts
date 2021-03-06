import { Component, Input, SimpleChanges } from '@angular/core';

export interface Block {
  title: string;
  images: string[];
}

interface Slide {
  show: boolean;
  blocks: {
    title: string;
    imageUrl: string;
  }[]
}

@Component({
  selector: 'app-block-carousel',
  templateUrl: './block-carousel.component.html',
  styleUrls: ['./block-carousel.component.scss']
})
export class BlockCarouselComponent {

  @Input() blocks: Block[] = [];
  @Input() blocksPerSlide = 4;
  @Input() rows = 1;

  slides: Slide[] = [];
  index = 0;
  blocksStyle = {
    'grid-template-columns': 'repeat(4, 1fr)',
    'grid-template-rows': 'repeat(1, 1fr)',
  }

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.blocksPerSlide || changes.rows) {
      this.blocksStyle = {
        'grid-template-columns': `repeat(${Math.ceil(this.blocksPerSlide / this.rows)}, 1fr)`,
        'grid-template-rows': `repeat(${this.rows}, 1fr)`
      }
    }

    if (changes.blocks || changes.blocksPerSlide) {
      this.updateSlides();
    }
  }

  currentIndexChanged(index: number) {
    this.index = index;

    // We mark show for the next slide as true, so that Angular will render the DOM for the slide
    // therefore triggering the http calls to load the images
    if (this.index < this.slides.length - 1) {
      this.slides[this.index + 1].show = true;
    }
  }

  private updateSlides() {
    this.slides = [];
    for(let i = 0; i < this.blocks.length; i += this.blocksPerSlide) {
      const slide = this.blocksToSlide(this.blocks.slice(i, i + this.blocksPerSlide));
      this.slides.push(slide);
    }

    this.slides[this.index].show = true;
    this.slides[this.index + 1].show = true;
  }

  private blocksToSlide(blocks: Block[]) {
    return {
      show: false,
      blocks: blocks.map((block: any) => ({
        title: block.title,
        imageUrl: block.images[Math.floor(Math.random() * block.images.length)]
      }))
    }
  }
}
