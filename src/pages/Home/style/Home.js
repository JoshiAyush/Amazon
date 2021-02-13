import { Container } from "./style.js";
import { Inner } from "./style.js";
import { InnerBar } from "./style.js";
import { InnerBarMain } from "./style.js";
import { InnerBarMainOption } from "./style.js";
import { InnerBarResponse } from "./style.js";
import { HomeImage } from "./style.js";
import { HomeRowContainer } from "./style.js";
import { HomeRow } from "./style.js";

HomeContainer.Inner = function HomeContainerInner({ children, ...props }) {
    return (
        <Inner {...props}>
            {children}
        </Inner>
    );
}

HomeContainer.InnerBar = function HomeContainerInnerBar({ children, ...props }) {
    return (
        <InnerBar {...props}>
            {children}
        </InnerBar>
    );
}

HomeContainer.InnerBarMain = function HomeContainerInnerBarMain({ children, ...props }) {
    return (
        <InnerBarMain {...props}>
            {children}
        </InnerBarMain>
    );
}

HomeContainer.InnerBarMainOption = function HomeContainerInnerBarMainOption({ children, ...props }) {
    return (
        <InnerBarMainOption {...props}>
            {children}
        </InnerBarMainOption>
    );
}

HomeContainer.InnerBarResponse = function HomeContainerInnerBarResponse({ children, ...props }) {
    return (
        <InnerBarResponse {...props}>
            {children}
        </InnerBarResponse>
    );
}

HomeContainer.HomeImage = function HomeContainerHomeImage({ ...props }) {
    return (
        <HomeImage {...props} />
    );
}

HomeContainer.HomeRowContainer = function HomeContainerHomeRowContainer({ children, ...props }) {
    return (
        <HomeRowContainer {...props}>
            {children}
        </HomeRowContainer>
    );
}

HomeContainer.HomeRow = function HomeContainerHome({ children, ...props }) {
    return (
        <HomeRow {...props}>
            {children}
        </HomeRow>
    );
}

export function HomeContainer({ children, ...props }) {
    return (
        <Container {...props}>
            {children}
        </Container>
    );
}