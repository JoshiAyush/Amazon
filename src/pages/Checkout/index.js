import React from "react";

import { useStateValue } from "../../StateProvider.js";

import { CheckoutContainer } from "./style/Checkout.js";

import { Subtotal } from "../../components/index.js";
import { EmptyBasketButton } from "../../components/index.js";
import { CheckoutProduct } from "../../components/index.js";

function CheckOut() {
    /**
     * @function Checkout() creates our checkout component where the items that are added to 
     * the basket live.
     */

    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <CheckoutContainer>

            <CheckoutContainer.Left>

                <CheckoutContainer.Add />

                <CheckoutContainer.Inner>

                    <CheckoutContainer.User>{user?.email}</CheckoutContainer.User>

                    <CheckoutContainer.Title>Your Shopping Basket</CheckoutContainer.Title>

                    {
                        basket.map(item => (

                            <CheckoutProduct
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                            />

                        ))
                    }

                </CheckoutContainer.Inner>

            </CheckoutContainer.Left>

            <CheckoutContainer.Right>

                <Subtotal />

                <EmptyBasketButton />

            </CheckoutContainer.Right>

        </CheckoutContainer>
    );
}

export default CheckOut;
