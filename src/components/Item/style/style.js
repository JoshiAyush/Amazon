import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    color: black;
`;

export const Image = styled.img`
    margin-top: 2rem; 
    max-width: 22rem;
    max-height: 16rem;
`;

export const Name = styled.div`
    line-height: 2.2rem;
    font-size: 20px;
    text-align: center;
    padding: 0 8px;
    margin-top: 1rem;
`;

export const Brand = styled.div`
    font-size: small;
    color: #808080;
    margin-top: 0.6rem;
`;

export const Price = styled.div`
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.1rem;
    margin: 0.8rem 0;
`;

export const Small = styled.small`

`;

export const Strong = styled.strong`

`;