import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
`;

export const List = styled.li`
    flex: 0 1 20rem;
    margin: 1rem;
    margin-bottom: 0;
    height: fit-content;
    box-shadow: 0 0 8px 0.09rem #e0e0e0;
    transition-property: box-shadow;
    transition-timing-function: ease-in;
    transition-duration: 0.1s;

    &:hover {
        box-shadow: 0 0 8px 0.10rem #cacaca;
    }
`;

export const Products = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

export const Left = styled.div`
    flex: 0.2;
    box-shadow: 0 0 8px 0.10rem #cacaca;
    transition-property: box-shadow;
    transition-timing-function: ease-in;
    transition-duration: 0.1s;
    
    &:hover {
        box-shadow: 2px 0 8px 2px rgba(153, 153, 153, 0.568); 
    }
`;

export const Right = styled.div`
    flex: 0.8;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;