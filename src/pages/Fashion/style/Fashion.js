import { List } from "./style.js";
import { Left } from "./style.js";
import { Right } from "./style.js";
import { Products } from "./style.js";
import { Container } from "./style.js";

FashionContainer.Left = function FashionContainerLeft({ children, ...props }) {
    return (
        <Left {...props}>
            {children}
        </Left>
    );
}

FashionContainer.Right = function FashionContainerRight({ children, ...props }) {
    return (
        <Right {...props}>
            {children}
        </Right>
    );
}

FashionContainer.List = function FashionContainerList({ children, ...props }) {
    return (
        <List {...props}>
            {children}
        </List>
    );
}

FashionContainer.Products = function FashionContainerProducts({ children, ...props }) {
    return (
        <Products {...props}>
            {children}
        </Products>
    );
}

export function FashionContainer({ children, ...props }) {
    return (
        <Container {...props}>
            {children}
        </Container>
    );
}
