import React,{useCallback, useEffect,useState} from 'react'
import styled from 'styled-components'
import { Button, Card, CardBody, Heading, Skeleton, Text } from '@lukkasromero/cswap-uikit'
import {useReferralContract} from 'hooks/useContract'
import { useWallet } from '@binance-chain/bsc-use-wallet'

import CardValue from './CardValue'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content:space-between;
`

const ReferralCard = () => {

  const { account } = useWallet()

  const [yourReferree,setYourReferree] = useState("-")
  const [yourEarnings,setYourEarnings] = useState(0)
  const [yourTotalReferrals,setYourTotalReferrals] = useState(0)
  const [myRefLink,setMyRefLink] = useState("hii")


  const referralContract = useReferralContract();


 



  const loadData = useCallback(async() => {
    if(referralContract && account){
      let _myReferral = await referralContract.methods.getReferrer(account).call();
      const _myEarnings = await referralContract.methods.totalReferralCommissions(account).call();
      const _myTotalReferrals = await referralContract.methods.referralsCount(account).call();
      if(_myReferral === "0x0000000000000000000000000000000000000000"){
        _myReferral = "-"
      }
      setYourReferree(_myReferral)
      setYourEarnings(_myEarnings/1e18)
      setYourTotalReferrals(_myTotalReferrals)

      setMyRefLink(`https://cswap.app?ref=${account}`)
    }
  

  }, [referralContract,account]) 



  useEffect(() => {
    loadData();
  }, [loadData]);
 
  const  copyRefLink=(text:any) =>{

    if(!account){
      alert("Please Connect Your Wallet First")
      return null
    }
    const input = document.createElement('textarea');
    input.innerHTML = text;
    document.body.appendChild(input);
    input.select();
    const result = document.execCommand('copy');
    document.body.removeChild(input);
    alert("Referral Link copied")
    return result;
}
  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading size="lg" mb="24px">
          Referral Details
        </Heading>
        <>
          {/* <Heading size="xl">{`$${tvl}`}</Heading> */}
          {/* <Heading size="xl"> */}
          <Text color="textSubtle">Total Referral Earnings</Text>

          <CardValue value={yourEarnings} prefix="LOLI " decimals={2} />

          <Text color="textSubtle">Total Referrals</Text>

          <CardValue value={yourTotalReferrals} prefix="" decimals={0} />

          {/* </Heading> */}

          <Text color="textSubtle">Your Referee</Text>

<Text bold fontSize="20px">
  {yourReferree}
</Text>
<Button onClick={()=>{
  copyRefLink(myRefLink)
}}>Copy Your Referral Link</Button>
        </>
      </CardBody>
      {/* <CardBody>
       
      </CardBody> */}
    </StyledTotalValueLockedCard>
  )
}

export default ReferralCard
