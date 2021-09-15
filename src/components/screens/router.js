import React from 'react'
import Home from './home'
import styled from "styled-components"


export default function Router() {

    return (
        <Container>
            <Home/>
        </Container>
    )
}

export const Container = styled.div`
    ::-webkit-scrollbar{
      display: none;
    } 
`