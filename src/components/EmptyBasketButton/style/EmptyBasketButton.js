import { Button } from "./style.js";
import { Container } from "./style.js";

EmptyBasketContainer.Button = function EmptyBasketContainerButton({ children, ...props }) {
    return (
        <Button {...props}>
            {children}
        </Button>
    );
}

export function EmptyBasketContainer({ children, ...props }) {
    return (
        <Container {...props}>
            {children}
        </Container>
    )
}