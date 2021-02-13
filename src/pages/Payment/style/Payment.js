import { H3 } from "./style.js";
import { Span } from "./style.js";
import { Left } from "./style.js";
import { Para } from "./style.js";
import { Form } from "./style.js";
import { Right } from "./style.js";
import { Inner } from "./style.js";
import { Button } from "./style.js";
import { Container } from "./style.js";

PaymentContainer.Span = function PaymentContainerSpan({ children, ...props }) {
    return (
        <Span {...props}>
            {children}
        </Span>
    );
}

PaymentContainer.Button = function PaymentContainerButton({ children, ...props }) {
    return (
        <Button {...props}>
            {children}
        </Button>
    );
}

PaymentContainer.Form = function PaymentContainerForm({ children, ...props }) {
    return (
        <Form {...props}>
            {children}
        </Form>
    );
}

PaymentContainer.Para = function PaymentContainerPara({ children, ...props }) {
    return (
        <Para {...props}>
            {children}
        </Para>
    );
}

PaymentContainer.H3 = function PaymentContainerH3({ children, ...props }) {
    return (
        <H3 {...props}>
            {children}
        </H3>
    );
}

PaymentContainer.Inner = function PaymentContainerInner({ children, ...props }) {
    return (
        <Inner {...props}>
            {children}
        </Inner>
    );
}

PaymentContainer.Right = function PaymentContainerRight({ children, ...props }) {
    return (
        <Right {...props}>
            {children}
        </Right>
    );
}

PaymentContainer.Left = function PaymentContainerLeft({ children, ...props }) {
    return (
        <Left {...props}>
            {children}
        </Left>
    );
}

export function PaymentContainer({ children, ...props }) {
    return (
        <Container {...props}>
            {children}
        </Container>
    );
}