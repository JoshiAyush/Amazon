import styled from "styled-components/macro";

export const Container = styled.div`
    color: black;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        flex-direction: column-reverse;
    }
`;

export const Inner = styled.div`

`;

export const Left = styled.div`
    flex: 0.75;
`;

export const Right = styled.div`
    flex: 0.25;
    position: sticky;
    top: 140px;
    width: 40%;
    height: fit-content;
    background-color: white;
    margin-right: 8px;
    box-shadow: 0 0 5px 8px rgba(216, 216, 216, 0.568);
    padding: 20px;

    @media screen and (max-width: 1000px) {
        position: relative;
        top: 0;
        width: 100%;
        padding: 10px;
    }
`;

export const H3 = styled.h3`

`;

export const Para = styled.p`

`;

export const Form = styled.form`
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Button = styled.button`
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 35px;
    border: 1px solid;
    font-weight: bolder;
    margin-top: 10px;
    color: #111;
    border-color: #a88734 #9c7e31 #846a29;
    cursor: pointer;
    padding: 0 5px;
`;

export const Span = styled.span`

`;