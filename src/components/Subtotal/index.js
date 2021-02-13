import React from "react";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";
import { getBasketTotal } from "../../reducer";

import { useStateValue } from "../../StateProvider";
import { SubtotalContainer } from "./style/Subtotal";

function Subtotal() {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();

    return (
        <SubtotalContainer>

            <CurrencyFormat
                renderText={
                    (value) => {
                        return (
                            <React.Fragment>

                                <SubtotalContainer.Para>

                                    Subtotal ({basket.length} items):

                                    <SubtotalContainer.Strong>

                                        {value}

                                    </SubtotalContainer.Strong>

                                </SubtotalContainer.Para>

                                <SubtotalContainer.Gift>

                                    <SubtotalContainer.Input type={"checkbox"} /> This order contains a gift

                                </SubtotalContainer.Gift>

                            </React.Fragment>
                        );
                    }
                }
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <SubtotalContainer.Button
                onClick={
                    () => {
                        if (basket.length >= 1)
                            history.push("/payment");
                        else
                            window.alert("You have nothing to proceed with");
                    }
                }
            >
                Proceed to checkout

            </SubtotalContainer.Button>

        </SubtotalContainer>
    );
}

export default Subtotal;