import React from "react";
import { useStateValue } from "../../StateProvider.js";

import { CheckoutProductContainer } from "./style/CheckoutProduct.js";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item form the basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        });
    }

    return (
        <CheckoutProductContainer>

            <CheckoutProductContainer.Image src={image} alt={""} />

            <CheckoutProductContainer.Info>

                <CheckoutProductContainer.Title>

                    {title}

                </CheckoutProductContainer.Title>

                <CheckoutProductContainer.Price>

                    <CheckoutProductContainer.Small>$</CheckoutProductContainer.Small>

                    <CheckoutProductContainer.Strong>

                        {price}

                    </CheckoutProductContainer.Strong>

                </CheckoutProductContainer.Price>

                <CheckoutProductContainer.Rating>

                    {
                        /**
                         * @function map() maps the ⭐ rating times
                         */
                        Array(rating).fill().map((_, i) => {
                            return (<CheckoutProductContainer.Para>⭐</CheckoutProductContainer.Para>);
                        })
                    }

                </CheckoutProductContainer.Rating>

                {
                    !hideButton && (

                        <CheckoutProductContainer.Button onClick={removeFromBasket}>

                            Remove from Basket

                        </CheckoutProductContainer.Button>

                    )
                }

            </CheckoutProductContainer.Info>

        </CheckoutProductContainer>
    );
}

export default CheckoutProduct;