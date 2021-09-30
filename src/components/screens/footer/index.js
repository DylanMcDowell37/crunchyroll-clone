import React from 'react'
import {Container, FooterContainer, InfoContainer, LinkContainer, Title, Links, BottomContainer, Tag, Language, Break} from './styled'

export default function Footer() {
    return (
        <Container>
            <FooterContainer>
                <InfoContainer>
                    <LinkContainer>
                        <Title>Navigation</Title>
                        <Links href = "/anime/">Browse Popular</Links>
                        <Links href = "/manga">Browse Manga</Links>
                        <Links>News</Links>
                        <Links>Store</Links>
                        <Links>Games</Links>
                    </LinkContainer>
                    <Break/>
                    <LinkContainer>
                        <Title>Connect With Me</Title>
                        <Links href = "https://www.linkedin.com/in/dylan-lee-mcdowell/">LinkedIn</Links>
                        <Links href = "https://github.com/DylanMcDowell37">GitHub</Links>
                        <Links href = "https://dylanmcdowell.herokuapp.com/">Portfolio</Links>
                    </LinkContainer>
                    <Break/>
                    <LinkContainer>
                        <Title>Crunchyroll</Title>
                        <Links href = "https://beta.crunchyroll.com/">Original Site</Links>
                    </LinkContainer>
                    
                </InfoContainer>
                <hr style = {{opacity: '10%', marginTop: '10px'}}/>
                <BottomContainer>
                    <Tag>&copy; Dylan McDowell</Tag>
                    <Language>ENGLISH(US)</Language>
                </BottomContainer>   
            </FooterContainer>
        </Container>
    )
}
