import { Para } from "./style.js";
import { Info } from "./style.js";
import { Title } from "./style.js";
import { Price } from "./style.js";
import { Small } from "./style.js";
import { Image } from "./style.js";
import { Strong } from "./style.js";
import { Rating } from "./style.js";
import { Button } from "./style.js";
import { Container } from "./style.js";

CheckoutProductContainer.Button = function CheckoutProductContainerButton({ children, ...props }) {
    return (
        <Button {...props}>
            {children}
        </Button>
    );
}

CheckoutProductContainer.Rating = function CheckoutProductContainerRating({ children, ...props }) {
    return (
        <Rating {...props}>
            {children}
        </Rating>
    );
}

CheckoutProductContainer.Strong = function CheckoutProductContainerStrong({ children, ...props }) {
    return (
        <Strong {...props}>
            {children}
        </Strong>
    );
}

CheckoutProductContainer.Small = function CheckoutProductContainerSmall({ children, ...props }) {
    return (
        <Small {...props}>
            {children}
        </Small>
    );
}

CheckoutProductContainer.Para = function CheckoutProductContainerPara({ children, ...props }) {
    return (
        <Para {...props}>
            {children}
        </Para>
    );
}

CheckoutProductContainer.Price = function CheckoutProductContainerPrice({ children, ...props }) {
    return (
        <Price {...props}>
            {children}
        </Price>
    );
}

CheckoutProductContainer.Title = function CheckoutProductContainerTitle({ children, ...props }) {
    return (
        <Title {...props}>
            {children}
        </Title>
    );
}

CheckoutProductContainer.Info = function CheckoutProductContainerInfo({ children, ...props }) {
    return (
        <Info {...props}>
            {children}
        </Info>
    );
}

CheckoutProductContainer.Image = function CheckoutProductContainerImage({ ...props }) {
    return (
        <Image {...props} />
    );
}

export function CheckoutProductContainer({ children, ...props }) {
    return (
        <Container {...props}>
            {children}
        </Container>
    );
}