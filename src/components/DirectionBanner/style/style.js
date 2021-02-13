import styled from "styled-components/macro";

export const Link = styled.a`

`;

export const Container = styled.div`
    color: black;
    background-color: white;
    position: relative;
    top: -320px;
    z-index: 1;
    width: 95%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 400;

    & ${Link} {
        text-decoration: none;
        color: rgb(54, 100, 238);
    }

    & ${Link}:hover {
        color: salmon;
        text-decoration: underline;
    }
`;
