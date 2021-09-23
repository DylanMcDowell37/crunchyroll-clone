import React from 'react'
import { BigStar, BodyText, CrownIcon, Drop, PremiumDropContainer, SmallStar, TopText, UpArrow } from './styles'

export default function PremiumDrop({premium, togglePremium}) {
    return (
        <div>
            <PremiumDropContainer premium = {premium} togglePremium = {togglePremium}>
                <UpArrow/>
                <BigStar/>
                <SmallStar/>
                <Drop>
                    <TopText>
                        <CrownIcon/>
                        14-Day Free Trial
                    </TopText>
                    <BodyText>
                    Premium access includes unlimited anime, no ads, and new episodes as early as one hour after Japan. Try it now!
                    </BodyText>
                </Drop>

            </PremiumDropContainer>
        </div>
    )
}
