# CSWAP Contracts

MasterChef
[0xda237a2b663aba41747e471a1e001d2463867969](https://explorer-mainnet.maticvigil.com/address/0xda237a2b663aba41747e471a1e001d2463867969)

CSWAP Token
[0x3bccf003a00c0320151042b2e4a2b177c53654e7](https://explorer-mainnet.maticvigil.com/address/0x3bccf003a00c0320151042b2e4a2b177c53654e7)

Timelock
[0xDF4aCdF70347E64AFFbEA9cCc21B21e0c11041a5](https://explorer-mainnet.maticvigil.com/address/0xDF4aCdF70347E64AFFbEA9cCc21B21e0c11041a5)

# Local Development

The following assumes the use of `node@>=10` and Truffle Suite.

## Install Dependencies

`npm install`

## Add wallet

`add file named .secret to root dir containing mnumonic (DO NOT CHECK IN)`

## Compile Contracts

`truffle compile`

## Run Deployment

`truffle migrate --network development/testnet/bsc`