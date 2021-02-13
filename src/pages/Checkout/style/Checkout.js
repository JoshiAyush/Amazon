import { Container } from "./style.js";
import { Left } from "./style.js";
import { Add } from "./style.js";
import { Inner } from "./style.js";
import { User } from "./style.js";
import { Title } from "./style.js";
import { Right } from "./style.js";

CheckoutContainer.Left = function CheckoutContainerLeft({ children, ...props }) {
    return (
        <Left {...props}>
            {children}
        </Left>
    );
}

CheckoutContainer.Add = function CheckoutContainerAdd({ ...props }) {
    return (
        <Add {...props} />
    );
}

CheckoutContainer.Inner = function CheckoutContainerInner({ children, ...props }) {
    return (
        <Inner {...props}>
            {children}
        </Inner>
    );
}

CheckoutContainer.User = function CheckoutContainerUser({ children, ...props }) {
    return (
        <User {...props}>
            {children}
        </User>
    );
}

CheckoutContainer.Title = function CheckoutContainerTitle({ children, ...props }) {
    return (
        <Title {...props}>
            {children}
        </Title>
    );
}

CheckoutContainer.Right = function CheckoutContainerRight({ children, ...props }) {
    return (
        <Right {...props}>
            {children}
        </Right>
    );
}

export function CheckoutContainer({ children, ...props }) {
    return (
        <Container {...props}>
            {children}
        </Container>
    );
}