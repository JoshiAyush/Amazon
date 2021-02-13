import SearchIcon from '@material-ui/icons/Search';             // importing material ui core for icons
import ShoppingCart from '@material-ui/icons/ShoppingCart';     // importing ShoppingCart icon from material ui icons
import {
    Link,
    useHistory
} from "react-router-dom";                                      // importing Link and useHistory from react-router-dom
import React, { useState } from "react";                        // importing React 

import { useStateValue } from "../../StateProvider.js";            // importing useStateValue from StateProvider
import { HeaderContainer } from "./style/Header.js";            // importing HeaderContainer 

const categories = {
    "All Departments": "154px",
    "Arts & Crafts": "125px",
    "Automotive": "118px",
    "Baby": "70px",
    "Beauty & Personal care": "200px",
    "Books": "78px",
    "Computers": "119px",
    "Digital Music": "133px",
    "Electronics": "118px",
    "Kindle Store": "128px",
    "Prime Video": "127px",
    "Women's Fashion": "168px",
    "Men's Fashion": "143px",
    "Girl's Fashion": "137px",
    "Boys's Fashion": "137px",
    "Deals": "81px",
    "Health & Household": "183px",
    "Home & Kitchen": "155px",
    "Industrial & Scientific": "188px",
    "Luggage": "103px",
    "Movies & TV": "130px",
    "Music, CDs & Vinyl": "176px",
    "Pet Supplies": "130px",
    "Software": "103px",
    "Sports & Outdoors": "172px",
    "Tools & Home Improvement": "238px",
    "Toys & Games": "143px",
    "Video Games": "137px"
};

function Header() {
    /**
     * @function Header() creates a react component Header for our webpage.
     */
    const history = useHistory();

    const [{ basket, user }] = useStateValue();
    const [size, updateSize] = useState("50px");

    const getUserName = (user) => {
        // bad use of split function, just for try
        return user.email.split("8")[0];
    }

    const handleChange = (event) => {
        updateSize(categories[event.target.value]);
    };

    const highlight = (event) => {
        event.target.style["box-shadow"] = "0px 0px 3px 3.5px rgba(255, 153, 0, 1)";

        const removeHighlight = () => {
            event.target.style["box-shadow"] = "0 0 0 0 0";
        };

        document.addEventListener("click", removeHighlight);

        document.removeEventListener("click", removeHighlight);
    };

    return (
        <HeaderContainer>

            <HeaderContainer.NavLogo>

                <HeaderContainer.NavLogoImage
                    onClick={() => history.push("/")}
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="PNG"
                />

                <HeaderContainer.NavOption>

                    <HeaderContainer.NavOptionLineOne>Deliver to</HeaderContainer.NavOptionLineOne>

                    <HeaderContainer.NavOptionLineTwo>

                        <HeaderContainer.Image
                            src="/Images/pin.png"
                            alt=""
                            marginTop="3"
                            filter="invert(100%)"
                            width="18"
                            height="18"
                        />
                        America

                    </HeaderContainer.NavOptionLineTwo>

                </HeaderContainer.NavOption>

            </HeaderContainer.NavLogo>

            <HeaderContainer.NavSearch onClick={(event) => highlight(event)}>

                <HeaderContainer.NavSearchSelect>

                    <HeaderContainer.SelectItem onChange={(event) => handleChange(event)} width={size}>
                        {
                            Object.keys(categories).map((option) => (
                                <HeaderContainer.SelectOption>{option}</HeaderContainer.SelectOption>
                            ))
                        }
                    </HeaderContainer.SelectItem>

                </HeaderContainer.NavSearchSelect>

                <HeaderContainer.NavSearchInput type="text" />

                <HeaderContainer.NavSearchIcon>

                    <SearchIcon />

                </HeaderContainer.NavSearchIcon>

            </HeaderContainer.NavSearch>

            <HeaderContainer.Nav>

                <HeaderContainer.NavOption>

                    <HeaderContainer.LanguageSelect>
                        English
                    </HeaderContainer.LanguageSelect>

                </HeaderContainer.NavOption>

                <Link style={{ color: '#FFF', width: '100%', textDecoration: "none" }} to={!user && '/login'}>

                    <HeaderContainer.NavOption>

                        <HeaderContainer.NavOptionLineOne>
                            Hello {user ? `${getUserName(user)}` : 'Guest'}
                        </HeaderContainer.NavOptionLineOne>

                        <HeaderContainer.NavOptionLineTwo>
                            Sign {user ? 'Out' : 'In'}
                        </HeaderContainer.NavOptionLineTwo>

                    </HeaderContainer.NavOption>

                </Link>

                <Link style={{ color: '#FFF', width: '100%', textDecoration: "none" }} to="/orders">

                    <HeaderContainer.NavOption>

                        <HeaderContainer.NavOptionLineOne>Returns</HeaderContainer.NavOptionLineOne>

                        <HeaderContainer.NavOptionLineTwo>& Orders</HeaderContainer.NavOptionLineTwo>

                    </HeaderContainer.NavOption>

                </Link>

                <HeaderContainer.NavOption>

                    <HeaderContainer.NavOptionLineOne>Your</HeaderContainer.NavOptionLineOne>

                    <HeaderContainer.NavOptionLineTwo>Prime</HeaderContainer.NavOptionLineTwo>

                </HeaderContainer.NavOption>

                <HeaderContainer.Basket>

                    <ShoppingCart onClick={() => history.push("/cart")} />

                    <HeaderContainer.NavOptionLineTwo>

                        <HeaderContainer.BasketCount>
                            {
                                /**
                                 * @questionmark is for optional chaining, if you for
                                 * any reason does not have a reaseonal value it won't
                                 * freak out then
                                 */
                                basket?.length
                            }
                        </HeaderContainer.BasketCount>

                    </HeaderContainer.NavOptionLineTwo>

                </HeaderContainer.Basket>

            </HeaderContainer.Nav>

        </HeaderContainer >
    );
}

export default Header;