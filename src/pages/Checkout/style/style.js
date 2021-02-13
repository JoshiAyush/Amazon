import styled from "styled-components/macro";

export const Container = styled.div`
    color: black;
    display: flex;
    padding: 20px;
    background-color: white;
    height: max-content;
    justify-content: space-between;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Left = styled.div`
    flex: 0.7;
`;

export const Add = styled.img`
    width: 100%;
    margin-bottom: 10px;
`;

export const Inner = styled.div`

`;

export const User = styled.h1`

`;

export const Title = styled.h1`
    margin-right: 10px;
    padding: 10px;
    border-bottom: 1px solid lightgray;

    @media screen and (max-width: 520px){
        font-size: 1.6rem;
    }
`;

export const Right = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 1000px){
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;
