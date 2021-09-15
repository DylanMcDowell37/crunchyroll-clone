import styled from "styled-components";
import {RiArrowUpSFill} from "react-icons/ri"
import {GiFlatStar, GiLaurelCrown} from "react-icons/gi"


export const PremiumDropContainer = styled.div`
    position: fixed;
    z-index: 2;
    width: 400px;
    height: 200px;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 52px;
    right: 50px;
    transition: 0.2s ease-in-out;
    opacity: ${({ premium })=> (premium ? '100%': '0')};
    top: ${({ premium })=> (premium ? '0' : '-100%')};



`
export const Drop =  styled.div`
    width: 350px;
    height: 150px;
    background-color: teal;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;


`
export const UpArrow = styled(RiArrowUpSFill)`
    font-size: 30px;
    position: absolute;
    color: teal;
    

`
export const SmallStar = styled(GiFlatStar)`
    color: orange;
    position: absolute;
    padding-top: 31px;
    padding-right: 265px;
    font-size: 9px;
`
export const BigStar = styled(GiFlatStar)`
    color: white;
    position: absolute;
    padding-top: 25px;
    padding-right: 300px;
    font-size: 12px;
    font-weight: bold;
`
export const CrownIcon = styled(GiLaurelCrown)` 
    color: #ffb100;
    font-size: 20px;
`
export const TopText = styled.div`
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;


`
export const BodyText = styled.div`
    color: white;
    text-align: center;
    padding: 10px;
`