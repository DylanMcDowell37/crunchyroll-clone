import styled from "styled-components";


export const BrowseContainer = styled.div`
    position: fixed;
    z-index: 2;
    width: 100%;
    height: calc(60% - 60px);
    background-color: #0d0d0d;
    display: grid;
    align-items: center;
    margin-top: 60px;
    left: 0;
    transition: 0.1s ease-in-out;
    opacity: ${({ browse })=> (browse ? '100%': '0')};
    top: ${({ browse })=> (browse ? '0' : '-100%')};



`