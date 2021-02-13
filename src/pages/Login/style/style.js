import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: white;
    color: black;
`;

export const Image = styled.img`
    margin-top: 20px;
    margin-bottom: 20px;
    object-fit: contain;
    width: 200px;
    margin-right: auto;
    margin-left: auto;
    cursor: pointer;
`;

export const Inner = styled.div`
    width: 400px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid lightgray;
    padding: 20px;

    @media screen and (max-width: 500px) {
        width: 80%;
        padding: 20px;
    }
`;

export const H1 = styled.h1`
    font-family: 'Courier New', Courier, monospace;
    font-weight: 600;
    margin-bottom: 20px;
`;

export const Form = styled.form`

`;

export const H5 = styled.h5`
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.2rem;
    margin-bottom: 5px;
    text-align: left;

    @media screen and (max-width: 500px) {
        font-size: 0.9rem;
    }
`;

export const Input = styled.input`
    height: 30px;
    margin-bottom: 10px;
    width: 98%;
    font-size: 1rem;
    background-color: white;
`;

export const Para = styled.p`
    font-size: 0.6rem;
`;

export const ButtonSignIn = styled.button`
    background-color: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 35px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e32 #846a29;
    font-size: 1.2rem;
    font-weight: 500;
    padding-top: 5px;
    padding-bottom: 5px;
    cursor: pointer;

    @media screen and (max-width: 500px) {
        font-size: 0.8rem;
    }
`;

export const ButtonSignUp = styled.button`
    border-radius: 2px;
    width: 100%;
    height: 35px;
    border: 1px solid;
    margin-top: 10px;
    border-color: darkgray;
    font-size: 1.2rem;
    font-weight: 400;
    padding-top: 5px;
    padding-bottom: 5px;
    cursor: pointer;

    @media screen and (max-width: 500px) {
        font-size: 0.8rem;
    }
`;