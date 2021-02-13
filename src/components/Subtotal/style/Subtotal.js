import { Para } from "./style.js";
import { Gift } from "./style.js";
import { Input } from "./style.js";
import { Button } from "./style.js";
import { Strong } from "./style.js";
import { Container } from "./style.js";

SubtotalContainer.Para = function SubtotalContainerPara({ children, ...props }) {
    return (
        <Para {...props}>
            {children}
        </Para>
    );
}
SubtotalContainer.Strong = function SubtotalContainerStrong({ children, ...props }) {
    return (
        <Strong {...props}>
            {children}
        </Strong>
    );
}

SubtotalContainer.Gift = function SubtotalContainerGift({ children, ...props }) {
    return (
        <Gift {...props}>
            {children}
        </Gift>
    );
}

SubtotalContainer.Input = function SubtotalContainerInput({ ...props }) {
    return (
        <Input {...props} />
    );
}

SubtotalContainer.Button = function SubtotalContainerButton({ children, ...props }) {
    return (
        <Button {...props}>
            {children}
        </Button>
    );
}

export function SubtotalContainer({ children, ...props }) {
    return (
        <Container {...props}>
            {children}
        </Container>
    );
}