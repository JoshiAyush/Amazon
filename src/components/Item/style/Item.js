import { Name } from "./style.js";
import { Image } from "./style.js";
import { Brand } from "./style.js";
import { Price } from "./style.js";
import { Small } from "./style.js";
import { Strong } from "./style.js";
import { Container } from "./style.js";

ItemContainer.Small = function ItemContainerSmall({ children, ...props }) {
    return (
        <Small {...props}>
            {children}
        </Small>
    );
}

ItemContainer.Strong = function ItemContainerStrong({ children, ...props }) {
    return (
        <Strong {...props}>
            {children}
        </Strong>
    );
}

ItemContainer.Brand = function ItemContainerBrand({ children, ...props }) {
    return (
        <Brand {...props}>
            {children}
        </Brand>
    );
}

ItemContainer.Price = function ItemContainerPrice({ children, ...props }) {
    return (
        <Price {...props}>
            {children}
        </Price>
    );
}

ItemContainer.Name = function ItemContainerName({ children, ...props }) {
    return (
        <Name {...props}>
            {children}
        </Name>
    );
}

ItemContainer.Image = function ItemContainerImage({ ...props }) {
    return (
        <Image {...props} />
    );
}

export function ItemContainer({ children, ...props }) {
    return (
        <Container {...props}>
            {children}
        </Container>
    );
}