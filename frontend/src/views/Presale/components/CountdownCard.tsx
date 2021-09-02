import React, { useState, useEffect } from 'react'
import { Heading, Card, CardBody, Text } from '@lukkasromero/cswap-uikit'
import Countdown from 'react-countdown';
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { useStartingTimeStamp } from 'hooks/usePresale'

const StyledCard = styled(Card)`
    padding-left: 48px;
    padding-right: 48px;
    @media screen and (max-width: 540px) {
        padding-left: 12px;
        padding-right: 12px;
    }
`

const StyleNumber = styled(Heading)`
  font-size: 48px;
  margin-bottom: 36px;
  color: #fbe94d;
`

const StyleHeading = styled(Heading)`
  font-size: 30px;
  margin-bottom: 36px;
`

const StyleText = styled(Text)`
    
`

const CountdownCard = () => {
    const endTimeStamp = new BigNumber(useStartingTimeStamp()).toNumber()
    const now = new Date().getTime() / 1000
    const endTime = 60 * 60 * 24 * 6

    const endCountDownRenderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return <StyleText>PRESALE END</StyleText>
        } 
        // Render a countdown
        return <>
            <StyleHeading size="lg" as="h1">END OF PRESALE</StyleHeading>
            <StyleNumber as="h1" size="lg">{days} : {hours} : {minutes} : {seconds}</StyleNumber>
            <StyleText>Days:Hours:Minutes:Seconds</StyleText>
            </>
        
    };

    const startCountDownRenderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return null;
        } 
        // Render a countdown
        return <>
            <StyleHeading size="lg" as="h1">PRESALE ENDS IN</StyleHeading>
            <StyleNumber as="h1" size="lg">{days} : {hours} : {minutes} : {seconds}</StyleNumber>
            <StyleText>Days : Hours : Minutes : Seconds</StyleText>
            </>
    };

    return (
        <StyledCard>
            <CardBody>
                <Countdown date={new Date(endTimeStamp* 1000)} renderer={endCountDownRenderer} />

            </CardBody>
        </StyledCard>  
    )
}

export default CountdownCard

