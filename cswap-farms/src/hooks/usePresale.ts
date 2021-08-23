import { useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { getPresaleAddress } from 'utils/addressHelpers'
import { getContract } from 'utils/web3'
import { buy, claim } from 'utils/callHelpers'
import presaleABI from 'config/abi/presale.json'
import useRefresh from './useRefresh'
import { usePresale } from './useContract'


export const useIsSaleActive = () => {
    const [isSaleActive, setIsSaleActive] = useState<boolean>(true)
    const { slowRefresh } = useRefresh()

    useEffect(() => {
        async function fetchIsSaleActive() {
            const presaleContract = getContract(presaleABI, getPresaleAddress())
            const isActive = await presaleContract.methods.isSaleActive().call()
            setIsSaleActive(isActive)
        }
        fetchIsSaleActive()
    }, [slowRefresh])

    return isSaleActive
}

export const useIsClaimActive = () => {
    const [isClaimActive, setIsClaimActive] = useState<boolean>(false)
    const { slowRefresh } = useRefresh()

    useEffect(() => {
        async function fetchIsClaimActive() {
            const presaleContract = getContract(presaleABI, getPresaleAddress())
            const isActive = await presaleContract.methods.isClaimActive().call()
            setIsClaimActive(isActive)
        }
        fetchIsClaimActive()
    }, [slowRefresh])

    return isClaimActive
}

export const useStartingTimeStamp = () => {
    const [startingTimeStamp, setStartingTimeStamp] = useState<BigNumber>()
    const { slowRefresh } = useRefresh()

    useEffect(() => {
        async function fetchStartingTimeStamp() {
            const presaleContract = getContract(presaleABI, getPresaleAddress())
            const timeStamp = await presaleContract.methods.presaleTimeEnds().call()
            setStartingTimeStamp(new BigNumber(timeStamp))
        }
        fetchStartingTimeStamp()
    }, [slowRefresh])

    return startingTimeStamp
}

export const useTotalTokensSold = () => {
    const [totalTokensSold, setTotalTokensSold] = useState<BigNumber>()
    const { slowRefresh } = useRefresh()

    useEffect(() => {
        async function fetchTotalTokensSold() {
            const presaleContract = getContract(presaleABI, getPresaleAddress())
            const total = await presaleContract.methods.totalTokenSold().call()
            setTotalTokensSold(new BigNumber(total))
        }
        fetchTotalTokensSold()
    }, [slowRefresh])

    return totalTokensSold
}


export const usePricePerToken  = () => {
    const [BUSDPerToken, setBUSDPerToken] = useState<BigNumber>()
    const { slowRefresh } = useRefresh()

    useEffect(() => {
        async function fetchBUSDPerToken() {
            const presaleContract = getContract(presaleABI, getPresaleAddress())
            const busdPerToken = await presaleContract.methods._price().call()
            setBUSDPerToken(new BigNumber(busdPerToken))
        }
        fetchBUSDPerToken()
    }, [slowRefresh])

    return BUSDPerToken
}

export const useGNTPerToken = () => {
    const [GNTPerToken, setGNTPerToken] = useState<BigNumber>()
    const { slowRefresh } = useRefresh()

    useEffect(() => {
        async function fetchBUSDPerToken() {
            const presaleContract = getContract(presaleABI, getPresaleAddress())
            const gntPerToken = await presaleContract.methods.GNTPerGIT().call()
            setGNTPerToken(new BigNumber(gntPerToken))
        }
        fetchBUSDPerToken()
    }, [slowRefresh])

    return GNTPerToken
}

export const useBUSDReceived = () => {
    const [BUSDReceived, setBUSDReceived] = useState<BigNumber>()
    const { slowRefresh } = useRefresh()

    useEffect(() => {
        async function fetchBUSDReceived() {
            const presaleContract = getContract(presaleABI, getPresaleAddress())
            const busdReceived = await presaleContract.methods.BUSDReceived().call()
            setBUSDReceived(new BigNumber(busdReceived))
        }
        fetchBUSDReceived()
    }, [slowRefresh])

    return BUSDReceived
}

export const useGNTReceived = () => {
    const [GNTReceived, setGNTReceived] = useState<BigNumber>()
    const { slowRefresh } = useRefresh()

    useEffect(() => {
        async function fetchBUSDReceived() {
            const presaleContract = getContract(presaleABI, getPresaleAddress())
            const gntReceived = await presaleContract.methods.GNTReceived().call()
            setGNTReceived(new BigNumber(gntReceived))
        }
        fetchBUSDReceived()
    }, [slowRefresh])

    return GNTReceived
}

export const useTokensOwned = () => {
    const [tokensOwned, setTokensOwned] = useState<BigNumber>()
    const { account }: { account: string } = useWallet()
    const { slowRefresh } = useRefresh()

    useEffect(() => {
        async function fetchTokensOwned() {
            const presaleContract = getContract(presaleABI, getPresaleAddress())
            const tokens = await presaleContract.methods.goldIngotOwned(account).call()
            setTokensOwned(new BigNumber(tokens))
        }
        fetchTokensOwned()
    }, [account, slowRefresh])

    return tokensOwned
}

export const useTokensUnclaimed = () => {
    const [tokensUnclaimed, setTokensUnclaimed] = useState<BigNumber>()
    const { account }: { account: string } = useWallet()
    const { slowRefresh } = useRefresh()

    useEffect(() => {
        async function fetchTokensUnclaimed() {
            const presaleContract = getContract(presaleABI, getPresaleAddress())
            let tokens
            try {
                tokens = await presaleContract.methods.goldIngotUnclaimed(account).call()
            } catch(e) {
                tokens = 0
            }
            setTokensUnclaimed(new BigNumber(tokens))
        }
        fetchTokensUnclaimed()
    }, [account, slowRefresh])
    
    return tokensUnclaimed
}

export const useBuy = () => {
    const { account } = useWallet()
    const presaleChefContract = usePresale()
  
    const handleBuy = useCallback(
      async (tokenAddress: string, amount: string) => {
        const txHash = await buy(presaleChefContract, tokenAddress, amount, account)
        console.info(txHash)
      },
      [account, presaleChefContract],
    )
  
    return { onBuy: handleBuy }
}

export const useClaim = () => {
    const { account } = useWallet()
    const presaleChefContract = usePresale() 

    const handleClaim = useCallback(
        async () => {
            try {
                const txHash = await claim(presaleChefContract, account)
                return txHash
            } catch(e) {
                return 'fail'
            }
          
        },
        [account, presaleChefContract],
      )
    
      return { onClaim: handleClaim }
}


