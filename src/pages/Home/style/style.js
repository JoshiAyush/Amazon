import styled from "styled-components/macro";
import { Article } from "../../../components/Product/style/style";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const InnerBar = styled.div`
    padding: 10px;
    top: calc(80px - 0px);
    z-index: 1;
    height: 25px;
    width: 100%;
    background-color: #181d1d;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;

    @media screen and (max-width:1150px) {
        display: none;
    }
`;

export const InnerBarResponse = styled.div`
    font-weight: bold;
    margin-right: 10px;
`;

export const InnerBarMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 40%;
`;

export const InnerBarMainOption = styled.div`

`;

export const HomeImage = styled.img`
    height: 600px;
    width: 100%;
    z-index: 10;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

export const HomeRowContainer = styled.div`
    position: relative;
    top: -300px;
    bottom: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const HomeRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px 0;
    
    &:nth-child(1) {
        position: relative;
        height: 580px;
        ${Article} {
            font-size: 1.3rem;
        }
    }
    
    &:nth-child(2) {
        position: relative;
        height: 580px;
        ${Article} {
            font-size: 1rem;
        }
    }

    &:nth-child(3) {
        position: relative;
        height: 630px;
        ${Article} {
            font-size: 1.35rem;
        }
    }

    @media screen and (max-width: 1000px) {
        flex-wrap: wrap;
    }
`;