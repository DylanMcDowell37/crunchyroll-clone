import React from 'react'
import {Container, FooterContainer, InfoContainer, LinkContainer, Title, Links, BottomContainer, Tag, Language} from './styled'

export default function Footer() {
    return (
        <Container>
            <FooterContainer>
                <InfoContainer>
                    <LinkContainer>
                        <Title>Navigation</Title>
                        <Links>Browse Popular</Links>
                        <Links>Browse Manga</Links>
                        <Links>News</Links>
                        <Links>Store</Links>
                        <Links>Games</Links>
                    </LinkContainer>
                    <LinkContainer>
                        <Title>Connect With Me</Title>
                        <Links>LinkedIn</Links>
                        <Links>GitHub</Links>
                        <Links>Portfolio</Links>
                    </LinkContainer>
                    <LinkContainer>
                        <Title>Crunchyroll</Title>
                        <Links>Original Site</Links>
                    </LinkContainer>
                    
                </InfoContainer>
                <hr style = {{opacity: '20%', marginTop: '10px'}}/>
                <BottomContainer>
                    <Tag>&copy; Dylan McDowell</Tag>
                    <Language>ENGLISH(US)</Language>
                </BottomContainer>   
            </FooterContainer>
        </Container>
    )
}
