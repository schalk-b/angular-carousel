## Demo
[Demo](https://schalk-b.github.io/angular-carousel/)

## Requirements
Please build a carousel, without using existing plugins.
Requirements:
- build a carousel.
- by default display 4 blocks.
- navigation is made with next and previous buttons.
- Next button should be disabled, if user is at the very end of the carousel.
- Previous button should be disabled, if user is at the very beginning of carousel.
- Clicking on next/previous buttons shows next/prev 4 carousel blocks accordingly.
- The source of carousel block is endpoint on server that return following JSON:
[{
title: "First Block",
images: [url1, url2, url3]
},
{
title: "Second Block",
images: [url7, url8]
}
,...]

## Components
### BlockCarouselComponent
This provides the functionality to display multiple blocks in a carousel as per the requirements.

#### Performance
This is intented to support a reasonable amount of blocks (around 10,000 should work fine). It achieves this performance by only eager loading the images for the current slide and the next slide. The rest are lazy loaded as they are needed.

Further improvements can be made to support an infinte amount of blocks by:
- Server-side paging
  - Doing an initial call to the server to get the block count
  - Grabbing a "page" of blocks at a time
- Frontend
  - At the moment the DOM for all slides get loaded (even though the slide are loaded with no images). Instead, we should reuse the DOM element, so we only every have the current slide and the `next slide` (this slide will get used for both back and forward navigation)


It has the below inputs:
- **blocks: Block[]**
  - interface for Block is inside `/shared/block-carousel/block-carousel.component.ts`
- **blocksPerSlide: number**
  - defaults to 4
- **rows: number**
  - defaults to 1

```
<app-block-carousel [blocks]="blocks"></app-block-carousel>
```

### CarouselComponent and CarouselSlideComponent
The provides reusable carousel functionality.
```
<app-carousel>
  <app-carousel-slide>
    <img style="width: 100%; height: auto; display: block;" src="https://picsum.photos/id/1/1000/600">
  </app-carousel-slide>
  <app-carousel-slide>
    <img style="width: 100%; height: auto; display: block;" src="https://picsum.photos/id/2/1000/600">
  </app-carousel-slide>
</app-carousel>
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
