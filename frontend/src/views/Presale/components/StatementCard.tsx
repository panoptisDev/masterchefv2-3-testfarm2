import React, { useState, useEffect } from 'react'
import { Heading, Card, CardBody, Text } from '@lukkasromero/cswap-uikit'
import styled from 'styled-components'
import Divider from 'views/Farms/components/Divider'

const StyledHeading = styled(Heading)`
    font-size: 36px;
    margin-bottom: 15px;
    margin-top: 15px;
`

const StyleText = styled(Text)`
    margin-bottom: 5px;
    font-size: 18px;
   
`

const StyledDivider = styled(Divider)`
    margin-top: 25px;
    margin-bottom: 25px;
`
const StyleCard = styled(Card)`
    margin-bottom: 36px;
`

const StatementCard = () => {
    
    return (
        <>
               <StyledHeading>Information</StyledHeading>
               <StyleText>Presale start: Aug 1, 08:00 UTC</StyleText>
               <StyleText>Presale end: Aug 2, 08:00 UTC</StyleText>
               <StyleText>Total LOLI supply: 20000 LOLI</StyleText>
               
               <StyledHeading>How To</StyledHeading>
               <StyleText>1) Click the unlock button </StyleText>
               <StyleText>2) Click the buy button and enter the MATIC you wish to pay</StyleText>
               <StyleText>3) You can claim tokens immediately after the payment you will pay</StyleText>

        </>
    )
     

}

export default StatementCard