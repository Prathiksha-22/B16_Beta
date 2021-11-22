import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  productList = [
    {
      "icon": "https://ii1.pepperfry.com/media/catalog/product/h/o/568x625/holy-painted-buddha-face-original-handmade-oil-painting-on-canvas-framed-by-rahul-kohli-holy-painted-phgymm.jpg",
      "title": "Multi-Colored Buddha",
      "price": "205",
    },
    {
      "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY-oO677RXJ4E-lQ3fwaVO1JKvCLOImfuJng&usqp=CAU",
      "title": "Aesthetic Buddha Painting",
      "price": "634",
    },
    {
      "icon": "https://i.pinimg.com/474x/46/56/f2/4656f290f689a89cc0e98203a52984b0--buddha-painting-buddha-art.jpg",
      "title": "Peaceful Buddha Painting ",
      "price": "563",
    },
    {
      "icon": "https://rukminim1.flixcart.com/image/416/416/jp1i93k0/poster/u/n/d/large-god-buddha-abstract-painting-collection-for-office-decor-original-imafbcwftb9vzuhk.jpeg?q=70",
      "title": "Colorful Buddha painting",
      "price": "599",
    },
    {
      "icon": "data:image/jpeg;base64,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",
      "title": "Golden Buddha Painting",
      "price": "220",
    },
    {
      "icon": "https://m.media-amazon.com/images/I/71q2Mc+YZ5L._SL1416_.jpg",
      "title": "Oceanic Buddha Hand Painting",
      "price": "1999",
    },
    {
      "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrzPoa_DK3uHzEnFMKMoJjtNc1yyBoL9u8SpjmUVGxd08v2pia_p5J0imLveJCAh7k4a4&usqp=CAU",
      "title": "Hand painted Buddha Painting",
      "price": "499",
    },
    {
      "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLghOCcKNxN_sUFALHpjQl8rWqda07QyAWvza5L-f1-TNn35UucCR2F_5bpDwk1O_f8Os&usqp=CAU",
      "title": "Calm Buddha Acrylic Painting",
      "price": "876",
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
