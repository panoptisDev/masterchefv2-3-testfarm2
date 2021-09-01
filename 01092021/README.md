# TESTFARM Contracts

MasterChef
[0xda237a2b663aba41747e471a1e001d2463867969](https://explorer-mainnet.maticvigil.com/address/0xda237a2b663aba41747e471a1e001d2463867969)

CSWAP Token
[0x3bccf003a00c0320151042b2e4a2b177c53654e7](https://explorer-mainnet.maticvigil.com/address/0x3bccf003a00c0320151042b2e4a2b177c53654e7)

Timelock
[0xDF4aCdF70347E64AFFbEA9cCc21B21e0c11041a5](https://explorer-mainnet.maticvigil.com/address/0xDF4aCdF70347E64AFFbEA9cCc21B21e0c11041a5)

# Développement local

La suite présuppose que vous utilisez `node@>=10` and Truffle Suite.

## installez les dépendances

`npm install`

si vous avez des erreurs installer aussi 

`npm install truffle`

`npm install truffle-hdwallet-provider`

`npm install @openzeppelin/contracts`

ou si ça ne fonctionne pas utilisé yarn

`yarn`

## Ajoutez un portefeuille

`add file named .secret to root dir containing mnumonic (DO NOT CHECK IN)`


## Lancez l'environnement de développement de truffle

`truffle develop`

## Compilez les  contracts

`truffle compile`

## exécuter le déploiement sur la blockchain

`truffle migrate --network development/testnet/bsc`


pour tester en local tout en remetant l'environement à zero il faut utiliser la commande

`truffle migrate --reset`
