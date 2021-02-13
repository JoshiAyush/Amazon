import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import CurrencyFormat from 'react-currency-format';

import { PaymentContainer } from "./style/Payment.js";

import { useStateValue } from "../../StateProvider.js";
import { getBasketTotal } from "../../reducer.js";

import { CheckoutProduct } from "../../components/index.js";


function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const history = useHistory();

    const [button, setButton] = useState(null);

    const setCursorProgress = () => {
        button.style["cursor"] = "progress";
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCursorProgress();

        dispatch({
            type: "EMPTY_BASKET"
        })

        history.replace("/orders");
    }

    if (basket.length === 0)
        return (
            <PaymentContainer>

                <PaymentContainer.Left>

                    <PaymentContainer.Inner>

                        <PaymentContainer.Inner>

                            <PaymentContainer.H3>Review items and delivery</PaymentContainer.H3>

                        </PaymentContainer.Inner>

                        <PaymentContainer.Inner>

                            {
                                basket.map((item) => (

                                    <CheckoutProduct
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                    />

                                ))
                            }

                        </PaymentContainer.Inner>

                    </PaymentContainer.Inner>

                </PaymentContainer.Left>

                <PaymentContainer.Right>

                    <PaymentContainer.Inner>

                        <PaymentContainer.Inner>

                            <PaymentContainer.H3>Delivery Address</PaymentContainer.H3>

                        </PaymentContainer.Inner>

                        <PaymentContainer.Inner>

                            <PaymentContainer.Para>{user?.email}</PaymentContainer.Para>

                            <PaymentContainer.Para>123 React Lane</PaymentContainer.Para>

                            <PaymentContainer.Para>Los Angles, CA</PaymentContainer.Para>

                        </PaymentContainer.Inner>

                    </PaymentContainer.Inner>

                    <PaymentContainer.Inner>

                        <PaymentContainer.Inner>

                            <PaymentContainer.H3>Payment Method</PaymentContainer.H3>

                        </PaymentContainer.Inner>

                        <PaymentContainer.Inner>

                            <PaymentContainer.Form>

                                <PaymentContainer.Inner>

                                    <CurrencyFormat
                                        renderText={
                                            (value) => (
                                                <React.Fragment>

                                                    <PaymentContainer.H3>Order Total {value}</PaymentContainer.H3>

                                                </React.Fragment>
                                            )
                                        }
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />

                                    <PaymentContainer.Button
                                        ref={
                                            (e) => {
                                                setButton(e);
                                            }
                                        }
                                        onClick={handleSubmit}
                                    >

                                        <PaymentContainer.Span>{"Buy Now"}</PaymentContainer.Span>

                                    </PaymentContainer.Button>

                                </PaymentContainer.Inner>

                            </PaymentContainer.Form>

                        </PaymentContainer.Inner>

                    </PaymentContainer.Inner>

                </PaymentContainer.Right>

            </PaymentContainer>
        );
    else
        return (
            <React.Fragment></React.Fragment>
        );
}

export default Payment;
