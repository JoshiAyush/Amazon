import React from "react";

import { useStateValue } from "../../StateProvider";
import { EmptyBasketContainer } from "./style/EmptyBasketButton.js";

function EmptyBasket() {
    const [{ basket }, dispatch] = useStateValue();

    if (basket.length >= 1)
        return (
            <EmptyBasketContainer>

                <EmptyBasketContainer.Button
                    onClick={
                        () => {
                            dispatch({
                                type: "EMPTY_BASKET"
                            })
                        }
                    }
                >
                    Empty Basket
                </EmptyBasketContainer.Button>

            </EmptyBasketContainer>
        );
    else
        return (
            <React.Fragment></React.Fragment>
        );
}

export default EmptyBasket;