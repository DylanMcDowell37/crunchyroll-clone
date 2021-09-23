import styled from "styled-components";


export const ProfileScreenContainer = styled.div`
    position: fixed;
    z-index: 2;
    width: 400px;
    height: calc(100% - 60px);
    background-color: #0d0d0d;
    display: grid;
    align-items: center;
    margin-top: 60px;
    right: 0;
    transition: 0.1s ease-in-out;
    opacity: ${({ profileScreen })=> (profileScreen ? '100%': '0')};
    top: ${({ profileScreen })=> (profileScreen ? '0' : '-100%')};
    @media screen and (max-width: 575px){
        width: 100%;
    }


`