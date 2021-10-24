import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-packs',
  templateUrl: './payment-packs.component.html',
  styleUrls: ['./payment-packs.component.scss']
})
export class PaymentPacksComponent implements OnInit {

  rightList: any = [{}, {}, {}, {},{}, {}, {}, {},{}, {}, {}, {},{}, {}, {}, {},{}, {}, {}, {},{}, {}, {}, {},{}, {}, {}, {},{}, {}, {}, {},{}, {}, {}, {}];

  constructor() { }

  ngOnInit(): void {
  }

}
