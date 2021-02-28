import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Block } from './shared/block-carousel';

@Injectable({
  providedIn: 'root'
})
export class BlockService {

  constructor() { }

  /*getBlocks(): Observable<Block[]> {
    return of(blockMockData);
  }*/

  /* Uncomment to generate blocks randomly */
  getBlocks(): Observable<Block[]> {
    const amount = 16;
    const blocks: Block[] = [];
    for(let i = 1; i <= amount; i++) {
      blocks.push({
        title: `Block ${i}`,
        images: [
          `https://via.placeholder.com/250x250/003049/FFFFFF/?text=${this.randomText()}`,
          `https://via.placeholder.com/250x250/D62828/FFFFFF/?text=${this.randomText()}`,
          `https://via.placeholder.com/250x250/F77F00/FFFFFF/?text=${this.randomText()}`,
          `https://via.placeholder.com/250x250/FCBF49/FFFFFF/?text=${this.randomText()}`,
          `https://via.placeholder.com/250x250/EAE2B7/FFFFFF/?text=${this.randomText()}`,
        ]
      });
    }

    return of(blocks);
  }
  
  private randomText() {
    return Math.floor(Math.random() * 1000);
  }
}

const blockMockData = [
  {
     "title": "Block 1",
     "images": [
        "https://via.placeholder.com/250x250/003049/FFFFFF/?text=819",
        "https://via.placeholder.com/250x250/D62828/FFFFFF/?text=323",
        "https://via.placeholder.com/250x250/F77F00/FFFFFF/?text=605",
        "https://via.placeholder.com/250x250/FCBF49/FFFFFF/?text=513",
        "https://via.placeholder.com/250x250/EAE2B7/FFFFFF/?text=758"
     ]
  },
  {
     "title": "Block 2",
     "images": [
        "https://via.placeholder.com/250x250/003049/FFFFFF/?text=677",
        "https://via.placeholder.com/250x250/D62828/FFFFFF/?text=862",
        "https://via.placeholder.com/250x250/F77F00/FFFFFF/?text=674",
        "https://via.placeholder.com/250x250/FCBF49/FFFFFF/?text=407",
        "https://via.placeholder.com/250x250/EAE2B7/FFFFFF/?text=28"
     ]
  },
  {
     "title": "Block 3",
     "images": [
        "https://via.placeholder.com/250x250/003049/FFFFFF/?text=758",
        "https://via.placeholder.com/250x250/D62828/FFFFFF/?text=427",
        "https://via.placeholder.com/250x250/F77F00/FFFFFF/?text=398",
        "https://via.placeholder.com/250x250/FCBF49/FFFFFF/?text=177",
        "https://via.placeholder.com/250x250/EAE2B7/FFFFFF/?text=242"
     ]
  },
  {
     "title": "Block 4",
     "images": [
        "https://via.placeholder.com/250x250/003049/FFFFFF/?text=866",
        "https://via.placeholder.com/250x250/D62828/FFFFFF/?text=560",
        "https://via.placeholder.com/250x250/F77F00/FFFFFF/?text=439",
        "https://via.placeholder.com/250x250/FCBF49/FFFFFF/?text=661",
        "https://via.placeholder.com/250x250/EAE2B7/FFFFFF/?text=828"
     ]
  },
  {
     "title": "Block 5",
     "images": [
        "https://via.placeholder.com/250x250/003049/FFFFFF/?text=187",
        "https://via.placeholder.com/250x250/D62828/FFFFFF/?text=187",
        "https://via.placeholder.com/250x250/F77F00/FFFFFF/?text=635",
        "https://via.placeholder.com/250x250/FCBF49/FFFFFF/?text=239",
        "https://via.placeholder.com/250x250/EAE2B7/FFFFFF/?text=573"
     ]
  },
  {
     "title": "Block 6",
     "images": [
        "https://via.placeholder.com/250x250/003049/FFFFFF/?text=263",
        "https://via.placeholder.com/250x250/D62828/FFFFFF/?text=662",
        "https://via.placeholder.com/250x250/F77F00/FFFFFF/?text=532",
        "https://via.placeholder.com/250x250/FCBF49/FFFFFF/?text=666",
        "https://via.placeholder.com/250x250/EAE2B7/FFFFFF/?text=545"
     ]
  },
  {
     "title": "Block 7",
     "images": [
        "https://via.placeholder.com/250x250/003049/FFFFFF/?text=4",
        "https://via.placeholder.com/250x250/D62828/FFFFFF/?text=995",
        "https://via.placeholder.com/250x250/F77F00/FFFFFF/?text=583",
        "https://via.placeholder.com/250x250/FCBF49/FFFFFF/?text=45",
        "https://via.placeholder.com/250x250/EAE2B7/FFFFFF/?text=379"
     ]
  },
  {
     "title": "Block 8",
     "images": [
        "https://via.placeholder.com/250x250/003049/FFFFFF/?text=222",
        "https://via.placeholder.com/250x250/D62828/FFFFFF/?text=386",
        "https://via.placeholder.com/250x250/F77F00/FFFFFF/?text=921",
        "https://via.placeholder.com/250x250/FCBF49/FFFFFF/?text=942",
        "https://via.placeholder.com/250x250/EAE2B7/FFFFFF/?text=409"
     ]
  },
  {
     "title": "Block 9",
     "images": [
        "https://via.placeholder.com/250x250/003049/FFFFFF/?text=46",
        "https://via.placeholder.com/250x250/D62828/FFFFFF/?text=128",
        "https://via.placeholder.com/250x250/F77F00/FFFFFF/?text=122",
        "https://via.placeholder.com/250x250/FCBF49/FFFFFF/?text=233",
        "https://via.placeholder.com/250x250/EAE2B7/FFFFFF/?text=105"
     ]
  },
  {
     "title": "Block 10",
     "images": [
        "https://via.placeholder.com/250x250/003049/FFFFFF/?text=487",
        "https://via.placeholder.com/250x250/D62828/FFFFFF/?text=733",
        "https://via.placeholder.com/250x250/F77F00/FFFFFF/?text=773",
        "https://via.placeholder.com/250x250/FCBF49/FFFFFF/?text=862",
        "https://via.placeholder.com/250x250/EAE2B7/FFFFFF/?text=924"
     ]
  },
  {
     "title": "Block 11",
     "images": [
        "https://via.placeholder.com/250x250/003049/FFFFFF/?text=620",
        "https://via.placeholder.com/250x250/D62828/FFFFFF/?text=641",
        "https://via.placeholder.com/250x250/F77F00/FFFFFF/?text=734",
        "https://via.placeholder.com/250x250/FCBF49/FFFFFF/?text=159",
        "https://via.placeholder.com/250x250/EAE2B7/FFFFFF/?text=261"
     ]
  },
  {
     "title": "Block 12",
     "images": [
        "https://via.placeholder.com/250x250/003049/FFFFFF/?text=855",
        "https://via.placeholder.com/250x250/D62828/FFFFFF/?text=93",
        "https://via.placeholder.com/250x250/F77F00/FFFFFF/?text=65",
        "https://via.placeholder.com/250x250/FCBF49/FFFFFF/?text=960",
        "https://via.placeholder.com/250x250/EAE2B7/FFFFFF/?text=667"
     ]
  },
  {
     "title": "Block 13",
     "images": [
        "https://via.placeholder.com/250x250/003049/FFFFFF/?text=169",
        "https://via.placeholder.com/250x250/D62828/FFFFFF/?text=474",
        "https://via.placeholder.com/250x250/F77F00/FFFFFF/?text=730",
        "https://via.placeholder.com/250x250/FCBF49/FFFFFF/?text=508",
        "https://via.placeholder.com/250x250/EAE2B7/FFFFFF/?text=648"
     ]
  },
  {
     "title": "Block 14",
     "images": [
        "https://via.placeholder.com/250x250/003049/FFFFFF/?text=736",
        "https://via.placeholder.com/250x250/D62828/FFFFFF/?text=920",
        "https://via.placeholder.com/250x250/F77F00/FFFFFF/?text=861",
        "https://via.placeholder.com/250x250/FCBF49/FFFFFF/?text=523",
        "https://via.placeholder.com/250x250/EAE2B7/FFFFFF/?text=744"
     ]
  },
  {
     "title": "Block 15",
     "images": [
        "https://via.placeholder.com/250x250/003049/FFFFFF/?text=770",
        "https://via.placeholder.com/250x250/D62828/FFFFFF/?text=320",
        "https://via.placeholder.com/250x250/F77F00/FFFFFF/?text=837",
        "https://via.placeholder.com/250x250/FCBF49/FFFFFF/?text=508",
        "https://via.placeholder.com/250x250/EAE2B7/FFFFFF/?text=502"
     ]
  },
  {
     "title": "Block 16",
     "images": [
        "https://via.placeholder.com/250x250/003049/FFFFFF/?text=903",
        "https://via.placeholder.com/250x250/D62828/FFFFFF/?text=801",
        "https://via.placeholder.com/250x250/F77F00/FFFFFF/?text=660",
        "https://via.placeholder.com/250x250/FCBF49/FFFFFF/?text=975",
        "https://via.placeholder.com/250x250/EAE2B7/FFFFFF/?text=329"
     ]
  }
];