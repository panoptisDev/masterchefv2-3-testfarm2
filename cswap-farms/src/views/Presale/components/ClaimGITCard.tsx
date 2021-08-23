import React, { useState, useEffect, useCallback } from 'react'
import { Heading, Card, CardBody, Text, CardHeader, Button, useModal, Image, Flex } from '@lukkasromero/cswap-uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import styled, {keyframes} from 'styled-components'
import UnlockButton from 'components/UnlockButton'
import { useClaim, useIsClaimActive, useTokensUnclaimed } from 'hooks/usePresale'
import useTokenBalance from 'hooks/useTokenBalance'


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

const NonActive = styled.span`
    color: #ff720d;
`

const Active = styled.span`
    color: #5bd360;
`

const ClaimGITCard = () => {

   
    const [pendingTx, setPendingTx] = useState(false)
    const [toasts, setToasts] = useState([])
    const { account } = useWallet()
    const { onClaim } = useClaim()
    const isClaimActive = useIsClaimActive()
    const unclaimed = new BigNumber(useTokensUnclaimed()).div(1e18).toNumber()
    const GITBalance = new BigNumber(useTokenBalance("0x8dd746e0627680a4ee2a6152cce178cb2c0bc18e")).div(1e18).toNumber()

    const handleRemove = (id: string) => {
        setToasts((prevToasts) => prevToasts.filter((prevToast) => prevToast.id !== id));
    };

    const lunchToast = (status) => {
        const randomToast = {
            id: `id-${Date.now()}`,
            title: status === "fail"? "Fail":"Success",
            description: status === "fail"? "Claim Fail, Please try again or something went wrong":"Claim Success",
            type: status === "fail"? "danger":"success",
        };
    
        setToasts((prevToasts) => [randomToast, ...prevToasts]);
    }
    
    return (
           <FCard>
                {isClaimActive? <StyledCardAccent />:null}
                <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
                <Image src="/images/egg/2.png" width={50} height={50} />
                    <Flex flexDirection="column" alignItems="flex-end">
                        <Heading mb="4px">Claim Your LOLI</Heading>
                    </Flex>
                </Wrapper>
                <Flex justifyContent='space-between' mb="10px">
                    <Text>Claimable:</Text>
                    <Text bold>{isClaimActive? <Active>Yes</Active>:<NonActive>Not Yet</NonActive>}</Text>
                </Flex>
                <Flex justifyContent='space-between' mb="10px">
                    <Text>Your unclaimed LOLI:</Text>
                    <Text bold>{unclaimed.toLocaleString(undefined, { maximumFractionDigits: 2 })} LOLI</Text>
                </Flex>
                <Flex justifyContent='space-between' mb="10px">
                    <Text>LOLI in your wallet</Text>
                    <Text bold>{GITBalance.toLocaleString(undefined, { maximumFractionDigits: 2 })} LOLI</Text>
                </Flex>
                <Action>
                    {account ?
                        <>
                            <Button disabled={!isClaimActive || unclaimed === 0 || pendingTx} 
                            onClick={
                                async () => {
                                    setPendingTx(true)
                                    const res = await onClaim()
                                    lunchToast(res)
                                    setPendingTx(false)
                                }
                            }
                            fullWidth>
                                Claim
                            </Button>
                        </>
                        :
                        <UnlockButton fullWidth/>
                    }
                </Action>
           </FCard>
    )
     

}

export default ClaimGITCard