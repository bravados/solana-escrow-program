# Escrow program for Solana blockchain
All credits are merited to _paulx_ and his Escrow program guide.
1. Paulx's guide: https://paulx.dev/blog/2021/01/14/programming-on-solana-an-introduction/#trying-out-the-program-understanding-alice-s-transaction
2. Paulx's rust program: https://github.com/paul-schaaf/solana-escrow
3. Paulx's client program: https://github.com/paul-schaaf/escrow-ui

The purpose of my project was getting familiar with the Solana ecosystem. I wanted to fully understand the code and the processes, so I just started from scratch and incrementally added pieces of Paulx's code to play locally.

Main differences are:
* Both the Rust program and the typescript client are unified in a single self-contained project (just to have the Escrow concept in the *same repo*)
* I chose _Angular_ for the UI for the client part

### Environment Setup
1. Install Rust from https://rustup.rs/
2. Install Solana v1.6.2 or later from https://docs.solana.com/cli/install-solana-cli-tools#use-solanas-install-tool

### Pre-requisites
Make sure you have your localnet cluster running and, ideally, have created test wallets, mint tokens and token-accounts for both the initializer and the taker.

## Escrow program short
1. To correctly go through the Escrow process you must know that the program itself is composed by 2 parts that are complementary: the client (ui/scrow-ui/) and the program deployed in your localnet cluster (src/).
2. You must first compile and deploy the Rust program in your localnet cluster.
3. Now, you must know that the process start by the client. It will make use of several programs deployed in the cluster (i.e. the one that was previously deployed amongst them). The idea is to set up all the infrustructre (temporary account, transfer, ownership) and leave it ready waiting for some taker to complete the trade. You will do that with the form in the UI. Check the console logs to know the outputs (the temporary escrow account mainly).
4. Once that's done, the taker is ready to complete the trade. It will call the deployed program to indicate that there is one taker interested in the trade and the transfers can take place.

### Build the program compiled for BPF
```
$ cargo build-bpf
```

### Deploy it
```
$ solana program deploy <your_path_to_project>/target/deploy/bpf_program_template.so
````

### Set up the UI
In ui/scrow-ui:
```
npm run install
```

### Try it out!
````
npm run start
````
Go to localhost:4200