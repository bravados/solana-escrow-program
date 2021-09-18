import { EscrowInitializer } from "./EscrowInitializer";

export class EscrowTaker extends EscrowInitializer {
    constructor(
        public mainAddress: string,
        public programId: string,
        public escrowStateAddress: string,
        public tokenAccountX: string,
        public amountOfX: number,
        public tokenAccountY: string,
        public amountOfY: number,
      ) {
      super(
        mainAddress,
        programId,
        tokenAccountX,
        amountOfX,
        tokenAccountY,
        amountOfY
        );
    }
}