import { H1 } from "./style.js";
import { Inner } from "./style.js";
import { Container } from "./style.js";

OrdersContainer.Inner = function OrdersContainerInner({ children, ...props }) {
    return (
        <Inner {...props}>
            {children}
        </Inner>
    );
}

OrdersContainer.H1 = function OrdersContainerH1({ children, ...props }) {
    return (
        <H1 {...props}>
            {children}
        </H1>
    );
}

export function OrdersContainer({ children, ...props }) {
    return (
        <Container {...props}>
            {children}
        </Container>
    )
}