import { Nav } from "./style.js";
import { Image } from "./style.js";
import { Basket } from "./style.js";
import { NavLogo } from "./style.js";
import { NavSearch } from "./style.js";
import { NavOption } from "./style.js";
import { Container } from "./style.js";
import { SelectItem } from "./style.js";
import { BasketCount } from "./style.js";
import { SelectOption } from "./style.js";
import { NavLogoImage } from "./style.js";
import { NavSearchIcon } from "./style.js";
import { NavSearchInput } from "./style.js";
import { LanguageSelect } from "./style.js";
import { NavSearchSelect } from "./style.js";
import { NavOptionLineOne } from "./style.js";
import { NavOptionLineTwo } from "./style.js";

HeaderContainer.Nav = function HeaderContainerNav({ children, ...props }) {
    return (
        <Nav {...props}>
            {children}
        </Nav>
    );
}

HeaderContainer.NavLogo = function HeaderContainerNavLogo({ children, ...props }) {
    return (
        <NavLogo {...props}>
            {children}
        </NavLogo>
    );
}

HeaderContainer.NavLogoImage = function HeaderContainerNavLogoImage({ ...props }) {
    return (
        <NavLogoImage {...props} />
    );
}

HeaderContainer.NavOption = function HeaderContainerNavOption({ children, ...props }) {
    return (
        <NavOption className={props?.className ? props?.className : ""} {...props}>
            {children}
        </NavOption>
    );
}

HeaderContainer.Image = function HeaderContainerImage({ ...props }) {
    return (
        <Image {...props} />
    );
}

HeaderContainer.NavOptionLineOne = function HeaderContainerNavOptionLineOne({ children, ...props }) {
    return (
        <NavOptionLineOne {...props}>
            {children}
        </NavOptionLineOne>
    );
}

HeaderContainer.NavOptionLineTwo = function HeaderContainerNavOptionLineTwo({ children, ...props }) {
    return (
        <NavOptionLineTwo {...props}>
            {children}
        </NavOptionLineTwo>
    );
}

HeaderContainer.NavSearch = function HeaderContainerNavSearch({ children, ...props }) {
    return (
        <NavSearch {...props}>
            {children}
        </NavSearch>
    );
}

HeaderContainer.NavSearchSelect = function HeaderContainerNavSearchSelect({ children, ...props }) {
    return (
        <NavSearchSelect {...props}>
            {children}
        </NavSearchSelect>
    );
}

HeaderContainer.NavSearchInput = function HeaderContainerNavSearchInput({ ...props }) {
    return (
        <NavSearchInput {...props} />
    );
}

HeaderContainer.NavSearchIcon = function HeaderContainerNavSearchIcon({ children, ...props }) {
    return (
        <NavSearchIcon {...props}>
            {children}
        </NavSearchIcon>
    )
}

HeaderContainer.Basket = function HeaderContainerBasket({ children, ...props }) {
    return (
        <Basket {...props}>
            {children}
        </Basket>
    );
}

HeaderContainer.BasketCount = function HeaderContainerBasketCount({ children, ...props }) {
    return (
        <BasketCount {...props}>
            {children}
        </BasketCount>
    );
}

HeaderContainer.SelectItem = function HeaderContainerSelectItem({ children, ...props }) {
    return (
        <SelectItem {...props}>
            {children}
        </SelectItem>
    );
}

HeaderContainer.SelectOption = function HeaderContainerSelectOption({ children, ...props }) {
    return (
        <SelectOption {...props}>
            {children}
        </SelectOption>
    );
}

HeaderContainer.LanguageSelect = function HeaderContainerLanguageSelect({ children, ...props }) {
    return (
        <LanguageSelect {...props}>
            {children}
        </LanguageSelect>
    )
}

export function HeaderContainer({ children, ...props }) {
    return (
        <Container {...props}>
            {children}
        </Container>
    );
}