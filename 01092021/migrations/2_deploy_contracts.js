var Token = artifacts.require("TheToken");
var MasterChef = artifacts.require("MasterChefV2");
var Timelock = artifacts.require("Timelock");

const web3ToWei = (amount) => web3.utils.toWei((amount).toString(), "ether");

module.exports = function (deployer, network, accounts) {
    const DEV = accounts[0]; 
    const VESTING = accounts[1];
    deployer.then(async () => {
        try {
            // DEPLOY token and timelock
            await deployer.deploy(Timelock, DEV, 86400); //24 hours
            await deployer.deploy(Token);
            
            // const TimelockInstance = await Timelock.deployed(); console.log(`TimelockInstance: ${TimelockInstance.address}`);
            const TokenInstance = await Token.deployed(); console.log(`TokenInstance: ${TokenInstance.address}`)
        
            // DEPLOY MASTERCHEF
            let block = await web3.eth.getBlock("latest");
            console.log('Minting will start at block: ' + block.number);
            await deployer.deploy(MasterChef, TokenInstance.address, DEV, DEV, '1', block.number); 

            const MasterChefInstance = await MasterChef.deployed(); console.log(`MasterChefInsance: ${MasterChefInstance.address}`)
        
            // SET TIMELOCK MULTISIG ADMIN
            //await TimelockInstance.setPendingAdmin(GnosisWalletInstance.address, { from: DEV });

            // INITIAL Tokens
            console.log(`Balance DEV before: ${await TokenInstance.balanceOf(DEV)}`)
            await TokenInstance.mint(DEV, web3ToWei(1000000), { from: DEV }) // - TESTING
            console.log(`Balance DEV after: ${await TokenInstance.balanceOf(DEV)}`)

            // TRANSFER OWNERSHIP TO MASTERCHEF
            await TokenInstance.transferOwnership(MasterChefInstance.address, { from: DEV });

            // TODO: add deployment of doubler
            // TODO: figure out how doubler and masterchef can both own token

            /*let UniswapV2FactoryInstance;
            let SASHIMI_ETH, MOCKERC20_ETH, TOGETHER
            if (network == 'kovan') {

                // CREATE UNISWAP FACTORY CONTRACT
                const UniswapV2FactoryAddress = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f';
                UniswapV2FactoryInstance = await UniswapV2Factory.at(UniswapV2FactoryAddress);
            
                // CREATE 3 POOLS - First Pool > Sashimi-Weth
                SASHIMI_ETH = await UniswapV2Pair.at((await UniswapV2FactoryInstance.createPair(SashimiTokenInstance.address, WETH9Instance.address)).logs[0].args.pair);
                await SashimiTokenInstance.transfer(SASHIMI_ETH.address, '10000000000000000000', { from: DEV }); // 10 SUSHI
                await WETH9Instance.transfer(SASHIMI_ETH.address, '1000000000000000', { from: DEV }); // 0.001 WETH
                await SASHIMI_ETH.mint(DEV);
                console.log(`SUSHI_WETH Address: ${SASHIMI_ETH.address}`);

                // Second Pool > MockERC20-Weth
                MOCKERC20_ETH = await UniswapV2Pair.at((await UniswapV2FactoryInstance.createPair(MockERC20Instance.address, WETH9Instance.address)).logs[0].args.pair);
                await MockERC20Instance.transfer(MOCKERC20_ETH.address, '10000000000000000000', { from: DEV }); // 10 MOCKERC20
                await WETH9Instance.transfer(MOCKERC20_ETH.address, '1000000000000000', { from: DEV }); // 0.001 WETH
                await MOCKERC20_ETH.mint(DEV);
                console.log(`MOCKERC20_WETH Address: ${MOCKERC20_ETH.address}`)
            
                // Third Pool > Sashimi-MockERC20
                TOGETHER = await UniswapV2Pair.at((await UniswapV2FactoryInstance.createPair(SashimiTokenInstance.address, MockERC20Instance.address)).logs[0].args.pair);
                await MockERC20Instance.transfer(TOGETHER.address, '10000000000000000000', { from: DEV }); // 10 MOCKERC20
                await SashimiTokenInstance.transfer(TOGETHER.address, '10000000000000000000', { from: DEV }); // 10 SUSHI
                await TOGETHER.mint(DEV);
                console.log(`MOCKERC20_SUSHI Address: ${TOGETHER.address}`)

                await MasterChefInstance.add('2000', SASHIMI_ETH.address, true);
                await MasterChefInstance.add('3000', MOCKERC20_ETH.address, true);
                await MasterChefInstance.add('5000', TOGETHER.address, true);
            }*/
        
            console.log(`Successfully deployed the project to ${network}. `)

        } catch (e) {
            console.log(e);
        }

    })
}
