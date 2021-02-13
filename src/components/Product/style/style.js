import styled from "styled-components/macro";

export const Article = styled.article`
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    position: relative;
    color: black;
    background-color: white;
    box-shadow: 0 0 8px 6px rgba(0, 0, 0, 0.06);

    &:hover {
        box-shadow: 0 0 8px 6px rgba(0, 0, 0, 0.16);
    }
`;

export const Info = styled.div`
    height: 150px;
    padding: 20px 10px;
    margin: 20px 0;
    margin-bottom: 40px;
`;

export const ImageContainer = styled.div`
    width: 300px;
    height: 300px;
    overflow: hidden;
`;

export const ButtonContainer = styled.div`

`;

export const Para = styled.p`

`;

export const Image = styled.img`
    width: 260px;
    height: 230px;
`;

export const Price = styled.p`
    font-size: x-large;
    letter-spacing: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Rating = styled.div`
    display: flex;
    justify-content: center;
`;

export const Strong = styled.strong`

`;

export const Small = styled.small`

`;

export const Button = styled.button`
    width: 150px;
    height: 40px;
    letter-spacing: 1;
    border: 2px solid #846a29;
    border-color: #a88734 #9c7e31 #846a29;
    background: #f0c14b;
    background-image: linear-gradient(to bottom, rgb(255, 150, 45), rgb(255, 179, 103));
    border-radius: 5px;
    font-size: small;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    padding: 5px 10px;
    margin: 20px 0;
    outline: none;
    cursor: pointer;

    &:active {
        box-shadow: 0px 0px 3px 2px rgba(255, 153, 0, 1);
    }
`;