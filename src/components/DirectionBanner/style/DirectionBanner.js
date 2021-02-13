import { Link } from "./style.js";
import { Container } from "./style.js";

DirectionBannerContainer.Link = function DirectionBannerContainerLink({ children, ...props }) {
    return (
        <Link {...props}>
            {children}
        </Link>
    );
}

export function DirectionBannerContainer({ children, ...props }) {
    return (
        <Container {...props}>
            {children}
        </Container>
    );
}