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

  submitted = false;

  constructor() {
    this.model = new EscrowInitializer('', '', '', 0, '', 0);
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
  }

  initEscrow() {
    const escrowState: EscrowState = {
      escrowAccountPubkey: null,
      isInitialized: null,
      initializerAccountPubkey: null,
      XTokenTempAccountPubkey: null,
      initializerYTokenAccount: null,
      expectedAmount: null
    } as EscrowState;

    const onInitEscrow = async () => {
      try {
        const {
          escrowAccountPubkey,
          isInitialized,
          initializerAccountPubkey,
          XTokenTempAccountPubkey,
          initializerYTokenAccount,
          expectedAmount
        } = await initEscrow(
          this.model.mainAddress,
          this.model.tokenAccountX,
          this.model.amountOfX,
          this.model.tokenAccountY,
          this.model.amountOfY,
          this.model.programId
        );
        escrowState.escrowAccountPubkey = escrowAccountPubkey;
        escrowState.isInitialized = isInitialized;
        escrowState.initializerAccountPubkey = initializerAccountPubkey;
        escrowState.XTokenTempAccountPubkey = XTokenTempAccountPubkey;
        escrowState.initializerYTokenAccount = initializerYTokenAccount;
        escrowState.expectedAmount = expectedAmount;
      } catch (err) {
        console.log(err);
      }
    }

  }

  ngOnInit(): void {
  }

  reset() {
    this.model = new EscrowInitializer('', '', '', 0, '', 0);
  }

}
