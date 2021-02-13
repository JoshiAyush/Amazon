import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    padding: 40px;
    margin: 20px;
    background-color: white;
    box-shadow: 0 0 8px 8px rgba(211, 211, 211, 0.493);

    @media screen and (max-width: 520px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 20px 0;
    }
`;

export const Image = styled.img`
    object-fit: contain;
    width: 280px;
    height: 280px;

    @media screen and (max-width: 900px) {
        width: 180px;
        height: 180px;
    }
`;

export const Info = styled.div`
    padding-left: 20px;
    font-size: 1.1rem;
    font-weight: bolder;

    @media screen and (max-width: 900px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 520px) {
        font-size: 0.9rem;
    }
`;

export const Title = styled.p`

`;

export const Price = styled.p`
    font-size: 1.2rem;
    font-weight: bolder;
    letter-spacing: 0.1rem;
`;

export const Rating = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Small = styled.small`

`;

export const Strong = styled.strong`

`;

export const Para = styled.p`

`;

export const Button = styled.button`
    font-size: 1rem;
    font-weight: 400;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    background-color: rgb(255, 145, 0);
    background: linear-gradient(to bottom, rgb(255, 197, 121), rgb(255, 164, 45));
    border: 2px solid black;
    padding: 6px;

    @media screen and (max-width: 900px) {
        font-size: 0.9rem;
    }

    @media screen and (max-width: 520px) {
        font-size: 0.8rem;
    }
`;