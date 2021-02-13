import React from "react";
import CurrencyFormat from "react-currency-format";
import { moment } from "moment";

import { OrderContainer } from "./style/Order.js";

import { CheckoutProduct } from "../index.js";

function Order({ order }) {
    return (
        <OrderContainer>

            <OrderContainer.H2>Order</OrderContainer.H2>

            <OrderContainer.Para>

                {moment.unix(order.data.created).format("MMMM Do YYY, h:mma")}

            </OrderContainer.Para>

            <OrderContainer.Id>

                <OrderContainer.Small>{order?.id}</OrderContainer.Small>

            </OrderContainer.Id>

            {
                order.data.basket?.map(item => (

                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        hideButton={true}
                    />

                ))
            }

            <CurrencyFormat
                renderText={
                    (value) => (
                        <OrderContainer.Total>

                            Order Total: {value}

                        </OrderContainer.Total>
                    )
                }
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

        </OrderContainer>
    );
}

export default Order;