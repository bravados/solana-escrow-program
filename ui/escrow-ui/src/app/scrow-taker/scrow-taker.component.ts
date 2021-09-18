import { Component, OnInit } from '@angular/core';
import { EscrowTaker } from '../EscrowTaker';
import { takeTrade } from '../util/takeTrade';
import { EscrowState } from '../EscrowState';

@Component({
  selector: 'app-scrow-taker',
  templateUrl: './scrow-taker.component.html',
  styleUrls: ['./scrow-taker.component.scss']
})
export class ScrowTakerComponent implements OnInit {

  model: EscrowTaker;

  constructor() {
    this.model = new EscrowTaker('', '', '', '', 0, '', 0);
  }

  async onSubmit() {
    console.log(this.model);

    await takeTrade(
      this.model.mainAddress,
      this.model.escrowStateAddress,
      this.model.tokenAccountX,
      this.model.tokenAccountY,
      this.model.amountOfX,
      this.model.programId
    );

    console.log("Trade finished");
  }

  ngOnInit(): void {
  }

  reset() {
    this.model = new EscrowTaker('', '', '', '', 0, '', 0);
  }

}
