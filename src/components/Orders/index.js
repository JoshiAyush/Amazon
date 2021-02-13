import React from "react";

import { useStateValue } from "../../StateProvider.js";

import { Order } from "../index.js";

import { OrdersContainer } from "./style/Orders.js";

function Orders() {
    const [{ orders }, dispatch] = useStateValue();

    return (
        <OrdersContainer>

            <OrdersContainer.H1>Your Orders</OrdersContainer.H1>

            <OrdersContainer.Inner>

                {
                    orders?.map(order => (
                        <Order order={order} />
                    ))
                }

            </OrdersContainer.Inner>

        </OrdersContainer>
    );
}

export default Orders;