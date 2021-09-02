import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [





   {
    pid: 0,
    risk: 5,
    lpSymbol: 'LOLI-MATIC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x8b84F83D4336e4De9533C15c25741A0dd25d530B', // LOLI - USDC
    },
    tokenSymbol: 'LOLI',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0xeC5AE5A69045eCf74c5C864d2876826BE38e7846',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },



  {
    pid: 1,
    risk: 5,
    lpSymbol: 'LOLI-USDC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x287e51793Cce1FC6B442d246467b7C538dE56000', // LOLI - USDC
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },



  
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'LOLI-FISH',
    lpAddresses: {
      97: '',
      56: '',
      137: '0xc67e89A3586D69deD92633F384F6690f41C6100A', // LOLI - USDC
    },
    tokenSymbol: 'FISH',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x3a3df212b7aa91aa0402b9035b098891d276572b',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },


  
  {
    pid: 3,
    risk: 5,
    lpSymbol: 'LOLI',
    isTokenOnly:true,
    lpAddresses: {
      97: '',
      56: '',
      137: '0xc67e89A3586D69deD92633F384F6690f41C6100A', // LOLI - USDC
    },
    tokenSymbol: 'LOLI',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0xeC5AE5A69045eCf74c5C864d2876826BE38e7846',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },



  {
    pid: 4,
    risk: 5,
    lpSymbol: 'BNB-BUSD',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x681CA270b3A488446353fE49EeC9d9ceD6179eEa', // LOLI - USDC
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x7e9928afe96fefb820b85b4ce6597b8f660fe4f4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },


  




  {
    pid: 5,
    risk: 5,
    lpSymbol: 'ETH-MATIC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0xadbF1854e5883eB8aa7BAf50705338739e558E5b', // LOLI - USDC
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },



  {
    pid: 6,
    risk: 5,
    lpSymbol: 'BTC-BUSD',
    lpAddresses: {
      97: '',
      56: '',
      137: '0xA7Acb8bEA5d79CCec1DB1a7CAe2629fF4c5A64f8', // LOLI - USDC
    },
    tokenSymbol: 'BTC',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },



  {
    pid: 7,
    risk: 5,
    lpSymbol: 'USDC-USDT',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x2cF7252e74036d1Da831d11089D326296e64a728', // LOLI - USDC
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },



  {
    pid: 8,
    risk: 5,
    lpSymbol: 'wBTC',
    isTokenOnly:true,
    lpAddresses: {
      97: '',
      56: '',
      137: '0xA7Acb8bEA5d79CCec1DB1a7CAe2629fF4c5A64f8', // LOLI - USDC
    },
    tokenSymbol: 'wBTC',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },


  {
    pid: 9,
    risk: 5,
    lpSymbol: 'ETH',
    isTokenOnly:true,
    lpAddresses: {
      97: '',
      56: '',
      137: '0xadbF1854e5883eB8aa7BAf50705338739e558E5b', // LOLI - USDC
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },



  {
    pid: 10,
    risk: 5,
    lpSymbol: 'FISH',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x0df9e46c0eaedf41b9d4bbe2cea2af6e8181b033', // FISH - USDC
    },
    tokenSymbol: 'FISH',
    isTokenOnly:true,
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x3a3df212b7aa91aa0402b9035b098891d276572b',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },


  {
    pid: 11,
    risk: 5,
    lpSymbol: 'BNB',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x681CA270b3A488446353fE49EeC9d9ceD6179eEa', // BNB - BUSD
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x7e9928afe96fefb820b85b4ce6597b8f660fe4f4',
    },
    isTokenOnly:true,
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },



  {
    pid: 12,
    risk: 5,
    lpSymbol: 'MATIC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x160532d2536175d65c03b97b0630a9802c274dad', // MATIC - USDC
    },
    isTokenOnly:true,
    tokenSymbol: 'MATIC',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },



  {
    pid: 13,
    risk: 5,
    lpSymbol: 'MATIC-USDC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x160532d2536175d65c03b97b0630a9802c274dad', // MATIC - USDC
    },
    tokenSymbol: 'MATIC',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },








]

export default farms
