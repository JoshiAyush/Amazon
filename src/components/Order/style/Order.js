import { Id } from "./style.js";
import { H2 } from "./style.js";
import { Para } from "./style.js";
import { Total } from "./style.js";
import { Small } from "./style.js";
import { Container } from "./style.js";

OrderContainer.Id = function OrderContainerId({ children, ...props }) {
    return (
        <Id {...props}>
            {children}
        </Id>
    );
}

OrderContainer.H2 = function OrderContainerH2({ children, ...props }) {
    return (
        <H2 {...props}>
            {children}
        </H2>
    );
}

OrderContainer.Para = function OrderContainerPara({ children, ...props }) {
    return (
        <Para {...props}>
            {children}
        </Para>
    );
}

OrderContainer.Total = function OrderContainerTotal({ children, ...props }) {
    return (
        <Total {...props}>
            {children}
        </Total>
    );
}

OrderContainer.Small = function OrderContainerSmall({ children, ...props }) {
    return (
        <Small {...props}>
            {children}
        </Small>
    );
}

export function OrderContainer({ children, ...props }) {
    return (
        <Container {...props}>
            {children}
        </Container>
    )
}