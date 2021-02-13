import { Para } from "./style.js";
import { Info } from "./style.js";
import { Price } from "./style.js";
import { Small } from "./style.js";
import { Image } from "./style.js";
import { Rating } from "./style.js";
import { Strong } from "./style.js";
import { Button } from "./style.js";
import { Article } from "./style.js";
import { ImageContainer } from "./style.js";
import { ButtonContainer } from "./style.js";


ProductArticle.Info = function ProductArticleInfo({ children, ...props }) {
    return (
        <Info {...props}>
            {children}
        </Info>
    );
}

ProductArticle.ImageContainer = function ProductArticleImageContainer({ children, ...props }) {
    return (
        <ImageContainer {...props}>
            {children}
        </ImageContainer>
    );
}

ProductArticle.ButtonContainer = function ProductArticleButtonContainer({ children, ...props }) {
    return (
        <ButtonContainer {...props}>
            {children}
        </ButtonContainer>
    );
}

ProductArticle.Para = function ProductArticlePara({ children, ...props }) {
    return (
        <Para {...props}>
            {children}
        </Para>
    );
}

ProductArticle.Price = function ProductArticlePrice({ children, ...props }) {
    return (
        <Price {...props}>
            {children}
        </Price>
    );
}

ProductArticle.Rating = function ProductArticleRating({ children, ...props }) {
    return (
        <Rating {...props}>
            {children}
        </Rating>
    );
}

ProductArticle.Strong = function ProductArticleStrong({ children, ...props }) {
    return (
        <Strong {...props}>
            {children}
        </Strong>
    );
}

ProductArticle.Small = function ProductArticleSmall({ children, ...props }) {
    return (
        <Small {...props}>
            {children}
        </Small>
    );
}

ProductArticle.Image = function ProductArticleImage({ ...props }) {
    return (
        <Image {...props} />
    );
}

ProductArticle.Button = function ProductArticleButton({ children, ...props }) {
    return (
        <Button {...props}>
            {children}
        </Button>
    );
}

export function ProductArticle({ children, ...props }) {
    return (
        <Article {...props}>
            {children}
        </Article>
    );
}