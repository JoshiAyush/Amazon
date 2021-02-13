import styled from "styled-components/macro";

export const Container = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    background-color: black;
    position: sticky;
    top: 0;
    z-index: 100;
`;

export const Nav = styled.div`
    display: flex;
    justify-content: space-around;
    width: 80%;

    @media screen and (max-width: 1150px) {
        width: 400px;
        margin-left: 10px;
    }

    @media screen and (max-width: 550px) {
        width: 100px;
    }
`;

export const NavLogo = styled.div`
    display: flex;
    align-items: center;

    @media screen and (min-width: 1150px) {
        width: 50%;
        padding-inline-end: 30px;
    }

    @media screen and (max-width: 1150px) {
        width: 20vw;
        min-width: 180px;
        margin-right: 10px;
    }

    @media screen and (max-width: 400px) {
        min-width: 100px;
    }
`;

export const NavLogoImage = styled.img`
    object-fit: contain;
    margin: 0 20px;
    margin-top: 18px;
    cursor: pointer;

    @media screen and (min-width: 1150px) {
        width: 45%;
    }

    @media screen and (max-width: 1150px) {
        width: 20vw;
        min-width: 80px;
    }
`;

export const Image = styled.img`
    width: ${({ width }) => width ? width : "100"};
    height: ${({ height }) => height ? height : "100"};
    margin-top: ${({ marginTop }) => marginTop ? marginTop : "0"};
    filter: ${({ filter }) => filter ? filter : ""};
`;

export const NavOption = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media screen and (min-width: 1150px) {
        &:nth-child(2) {
            min-width: 100px;
        }
    }

    @media screen and (max-width: 1150px) {
        &:nth-child(2) {
            min-width: 80px;
        }
    }

    @media screen and (max-width: 770px) {
        &:nth-child(4) {
            display: none;
        }
    }

    @media screen and (max-width: 550px) {
        &:nth-child(1) {
            display: none;
        }
    }

    @media screen and (max-width: 400px) {
        &:nth-child(2) {
            display: none;
        }
    }
`;

export const NavOptionLineOne = styled.span`
    font-size: 15px;

    @media screen and (max-width: 1150px) {
        font-size: 80%;
    }
`;

export const NavOptionLineTwo = styled.span`
    font-size: 20px;
    font-weight: 800;

    @media screen and (max-width: 1150px) {
        font-size: 100%;
    }
`;

export const NavSearch = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 13px;
    position: relative;
    z-index: 100;

    @media screen and (min-width: 1150px) {
        width: 100%;
    }

    @media screen and (max-width: 1150px) {
        width: 60vw;
        margin-left: 20px;
    }

    @media screen and (max-width: 550px) {    
        width: 100%;
    }
    
    @media screen and (max-width: 400px) { 
        margin-left: 0;
    }
`;

export const NavSearchSelect = styled.div`

`;

export const NavSearchInput = styled.input`
    height: 30px;
    border: none;
    padding: 10px;
    outline: none;
    width: 350%;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.05rem;

    @media screen and (max-width: 1150px) {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }
`;

export const NavSearchIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    min-width: 50px;
    height: 40px !important;
    background-color: rgb(255, 145, 0);
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    cursor: pointer;

    &:active {
        position: relative;
        z-index: 10;
        
        &:active {
            box-shadow: 0px 0px 3px 3.5px rgba(255, 153, 0, 1);
        }
    }
`;

export const Basket = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const BasketCount = styled.span`
    margin-left: 10px;
    margin-right: 10px;
`;

export const SelectItem = styled.select`
    border-top-left-radius: 8px;
    border-top-left-radius: 8px;
    
    &:active {
        position: relative;
        z-index: 10;
        box-shadow: 0px 0px 3px 3.5px rgba(255, 153, 0, 1);
    }

    @media screen and (min-width: 1150px) {
        font-size: 1rem;
        height: 50px !important;
        padding: 6px;
        width: ${({ width }) => width ? width : "60px"};
        outline: none;
        border: none;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    @media screen and (max-width: 1150px) {
        display: none;
    }
`;

export const SelectOption = styled.option`

`;

export const LanguageSelect = styled.span`

`;