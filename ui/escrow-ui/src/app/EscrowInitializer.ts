export class EscrowInitializer {
    constructor(
        public mainAddress: string,
        public programId: string,
        public tokenAccountX: string,
        public amountOfX: number,
        public tokenAccountY: string,
        public amountOfY: number
      ) {
       }
}