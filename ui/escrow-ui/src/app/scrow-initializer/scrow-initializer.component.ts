import { Component, OnInit } from '@angular/core';
import { EscrowInitializer } from '../EscrowInitializer';
import { EscrowState } from '../EscrowState';
import { initEscrow } from '../util/initEscrow';

@Component({
  selector: 'app-scrow-initializer',
  templateUrl: './scrow-initializer.component.html',
  styleUrls: ['./scrow-initializer.component.scss']
})
export class ScrowInitializerComponent implements OnInit {

  model: EscrowInitializer;

  constructor() {
    this.model = new EscrowInitializer('', '', '', 0, '', 0);
  }

  async onSubmit() {
    console.log(this.model);

    let escrowState: EscrowState = {
      escrowAccountPubkey: null,
      isInitialized: null,
      initializerAccountPubkey: null,
      XTokenTempAccountPubkey: null,
      initializerYTokenAccount: null,
      expectedAmount: null
    } as EscrowState;

    escrowState = await initEscrow(
      this.model.mainAddress,
      this.model.tokenAccountX,
      this.model.amountOfX,
      this.model.tokenAccountY,
      this.model.amountOfY,
      this.model.programId
    );

    console.log(escrowState);
  }

  ngOnInit(): void {
  }

  reset() {
    this.model = new EscrowInitializer('', '', '', 0, '', 0);
  }

}
