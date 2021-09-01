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

## Erreur encore présente après la compilation

`,Warning: This declaration shadows an existing declaration.
   --> project:/contracts/MasterChefV2_flat.sol:813:17:
    |
813 |     constructor(string memory name, string memory symbol) {
    |                 ^^^^^^^^^^^^^^^^^^
Note: The shadowed declaration is here:
   --> project:/contracts/MasterChefV2_flat.sol:829:5:`
   
   Si vous comparez ce fichier MasterchefV2, vous verrez que j'ai déja corriger des erreurs sur les contructor visiblement leur manière de les définir evolue dans le temps avec les nouvelles versions de solidity il faut modifier la façon de renseigner mais là je ne vois pas bien comment, je vois juste qu'il dissimulent d'autres variables.
   
   je n'ai pas eu le temps de me pencher sur les deux erreurs suivantes
   
   `TypeError: Return argument type address is not implicitly convertible to expected type (type of first return variable) address payable.
   --> project:/contracts/MasterChefV2_flat.sol:604:16:
    |
604 |         return msg.sender;
    |                ^^^^^^^^^^

,TypeError: Member "sub" not found or not visible after argument-dependent lookup in uint256.
    --> project:/contracts/MasterChefV2_flat.sol:1256:37:
     |
1256 |                 uint256 srcRepNew = srcRepOld.sub(amount);
     |                                     ^^^^^^^^^^^^^
`
