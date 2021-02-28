import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BlockService } from './block.service';
import { Block } from './shared/block-carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  blocks$: Observable<Block[]>;

  constructor(private blockService: BlockService) {
    this.blocks$ = this.blockService.getBlocks();
  }
}
