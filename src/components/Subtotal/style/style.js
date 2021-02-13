import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 100px;
    padding: 20px;
    background-color: #f3f3f3;
    border: 1px solid #dddddd;
    border-radius: 3px;
    position: sticky;
    top: calc(100px - 0px);

    @media screen and (max-width: 400px){
        width: 90%;
    }
`;

export const Button = styled.button`
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
`;

export const Para = styled.p`

`;

export const Strong = styled.strong`

`;

export const Gift = styled.small`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const Input = styled.input`
    margin-left: 5px;
`;