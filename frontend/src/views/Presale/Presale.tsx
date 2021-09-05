import React from 'react'
import styled from 'styled-components'
import { Heading, BaseLayout } from '@lukkasromero/cswap-uikit'
import Page from 'components/layout/Page'
import FlexLayout from 'components/layout/Flex'
import CountdownCard from './components/CountdownCard'
import StatementCard from './components/StatementCard'
import DataCard from './components/DataCard'
import BuyGITByBUSDCard from './components/BuyGITByBUSDCard'
// import BuyGITByGNTCard from './components/BuyGITByGNTCard'
import ClaimGITCard from './components/ClaimGITCard'

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

const Hero = styled.div`
    -webkit-box-align: center;
    align-items: center;
    background-image: url('/images/egg/home-bg.png');
    background-position: center center, center center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    margin: auto auto 25px;
    padding: 32px 16px;
    text-align: center;
    @media screen and (min-width: 968px) {
      height: 185px;
      padding-top: 0px;
      padding-bottom: 0px;
    }
`

const StyleHeading = styled(Heading)`
    color: ${({ theme }) => theme.colors.text};
    font-size: 60px;
    margin-bottom: 5px;
`

const StyledPage = styled(Page)`
    max-width: 1600px;
`

const ActionCard = styled.div`
    flex-flow: column nowrap;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
`


const Presale: React.FC = () => {
    return (
        <>
        <Hero>
            <StyleHeading as="h1" size="xl" mb="24px" color="prinmary">
               LOLI Presale
            </StyleHeading>
        </Hero>
        <StyledPage>
            <Cards>
                <DataCard />
                <CountdownCard />
            </Cards>
                <StatementCard />
        </StyledPage>
        </>
    )
}

export default Presale