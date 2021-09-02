import React, { useState, useEffect, useCallback } from 'react'
import { Heading, Card, CardBody, Text, CardHeader, Button, useModal, Image, Flex } from '@lukkasromero/cswap-uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import styled, {keyframes} from 'styled-components'
import UnlockButton from 'components/UnlockButton'
import TokenInput from 'components/TokenInput'
import { useBuy, useStartingTimeStamp } from 'hooks/usePresale'
import { usePresaleBUSDApprove } from 'hooks/useApprove'
import { usePresaleBUSDAllowance } from 'hooks/useAllowance'
import {useMaticBalance} from 'hooks/useTokenBalance'
import { getBUSDAddress } from 'utils/addressHelpers'
import { NoFeeTag } from 'components/Tags'
import BuyModal from './BuyModal'

const FCard = styled.div`
  align-self: baseline;
  background: ${(props) => props.theme.card.background};
  border-radius: 32px;
  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 24px 64px 24px 64px; 
  position: relative;
  text-align: center;
  @media screen and (max-width: 540px) {
        padding: 12px 24px 12px 24px; 
    }
`
const RainbowLight = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`
const StyledCardAccent = styled.div`
  background: linear-gradient(45deg,
  rgba(255, 0, 0, 1) 0%,
  rgba(255, 154, 0, 1) 10%,
  rgba(208, 222, 33, 1) 20%,
  rgba(79, 220, 74, 1) 30%,
  rgba(63, 218, 216, 1) 40%,
  rgba(47, 201, 226, 1) 50%,
  rgba(28, 127, 238, 1) 60%,
  rgba(95, 21, 242, 1) 70%,
  rgba(186, 12, 248, 1) 80%,
  rgba(251, 7, 217, 1) 90%,
  rgba(255, 0, 0, 1) 100%);
  background-size: 300% 300%;
  animation: ${RainbowLight} 2s linear infinite;
  border-radius: 16px;
  filter: blur(6px);
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  z-index: -1;
`
const Wrapper = styled(Flex)`
  svg {
    margin-right: 0.25rem;
  }
`

const StyledHeading = styled(Heading)`
    margin-bottom: 15px;
    font-size: 40px;
`

const StyledCardHeader = styled(CardHeader)`
    background: transparent;
    font-size: 20px;
`

const StyledCardBody = styled(CardBody)`

`

const Action = styled.div`
  padding-top: 16px;
`

const BuyGITByBUSDCard = () => {

    const { account } = useWallet()
    const allowance = usePresaleBUSDAllowance()
    const { onApprove } = usePresaleBUSDApprove()
    const busdBalance = useMaticBalance()
    const startingTimeStamp = new BigNumber(useStartingTimeStamp()).toNumber()
    const now = new Date().getTime() / 1000

    const [requestedApproval, setRequestedApproval] = useState(false)

    const handleApprove = useCallback(async () => {
        try {
            setRequestedApproval(true)
            await onApprove()
            setRequestedApproval(false)
        } catch (e) {
            console.error(e)
        }
    }, [onApprove])

    const { onBuy } = useBuy()
    const [ onPresentBuy ] = useModal(<BuyModal max={new BigNumber(busdBalance)}
     onConfirm={onBuy} 
    tokenName="MATIC" 
    tokenAddress={getBUSDAddress()} />)

    return (
           <FCard>
                <StyledCardAccent />
                <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
                    <Image src="/images/egg/2.png" width={50} height={50} />
                    <Flex flexDirection="column" alignItems="flex-end">
                        <Heading mb="4px">Buy LOLI</Heading>
                    </Flex>
                </Wrapper>
                <Flex justifyContent='space-between' mb="10px">
                    <Text>Presale Token:</Text>
                    <Text bold>LOLI</Text>
                </Flex>
                <Flex justifyContent='space-between' mb="10px">
                    <Text>Buy LOLI with:</Text>
                    <Text bold>MATIC</Text>
                </Flex>
                <Flex justifyContent='space-between' mb="10px">
                    <Text>Price:</Text>
                    <Text bold>1.2 LOLI = 1 MATIC</Text>
                </Flex>
                <Action>
                    {account ?
                        <>
                             <Button onClick={onPresentBuy} fullWidth>
                                    Buy LOLI
                                </Button>
                        </>
                        :
                        <UnlockButton fullWidth/>
                    }
                </Action>
           </FCard>
    )
     

}

export default BuyGITByBUSDCard