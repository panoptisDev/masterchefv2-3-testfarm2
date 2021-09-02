import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@lukkasromero/cswap-uikit'

import useI18n from 'hooks/useI18n'
// eslint-disable-next-line import/no-unresolved
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import ProfitStats from './components/ProfitStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import ReferralCard from "./components/ReferralCard"
import AuditCard from "./components/AuditCard"

const Hero = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 32px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        {/* <img src="/images/Title Bar.png" alt="cake logo" width={950} height={225} /> */}
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <AuditCard />
          <TwitterCard />
          <CakeStats />
          <TotalValueLockedCard />
        

        </Cards>

       <Cards>
       <ReferralCard /> 
       
       </Cards>

      </div>
    </Page>
  )
}

export default Home
