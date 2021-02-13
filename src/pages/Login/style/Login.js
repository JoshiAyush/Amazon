import { H1 } from "./style.js";
import { H5 } from "./style.js";
import { Para } from "./style.js";
import { Form } from "./style.js";
import { Input } from "./style.js";
import { Image } from "./style.js";
import { Inner } from "./style.js";
import { Container } from "./style.js";
import { ButtonSignIn } from "./style.js";
import { ButtonSignUp } from "./style.js";

LoginContainer.ButtonSignIn = function LoginContainerButtonSignIn({ children, ...props }) {
    return (
        <ButtonSignIn {...props}>
            {children}
        </ButtonSignIn>
    );
}

LoginContainer.ButtonSignUp = function LoginContainerButtonSignUp({ children, ...props }) {
    return (
        <ButtonSignUp {...props}>
            {children}
        </ButtonSignUp>
    );
}

LoginContainer.Para = function LoginContainerPara({ children, ...props }) {
    return (
        <Para {...props}>
            {children}
        </Para>
    );
}

LoginContainer.Input = function LoginContainerInput({ ...props }) {
    return (
        <Input {...props} />
    );
}

LoginContainer.H5 = function LoginContainerH5({ children, ...props }) {
    return (
        <H5 {...props}>
            {children}
        </H5>
    );
}

LoginContainer.Form = function LoginContainerForm({ children, ...props }) {
    return (
        <Form {...props}>
            {children}
        </Form>
    );
}

LoginContainer.H1 = function LoginContainerH1({ children, ...props }) {
    return (
        <H1 {...props}>
            {children}
        </H1>
    );
}

LoginContainer.Inner = function LoginContainerInner({ children, ...props }) {
    return (
        <Inner {...props}>
            {children}
        </Inner>
    );
}

LoginContainer.Image = function LoginContainerImage({ ...props }) {
    return (
        <Image {...props} />
    );
}

export function LoginContainer({ children, ...props }) {
    return (
        <Container {...props}>
            {children}
        </Container>
    );
}