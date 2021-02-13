import React from "react";
import { Link } from "react-router-dom";

import { ItemContainer } from "./style/Item.js";

function Item({ id, name, image, brand, price, rating }) {
    return (
        <ItemContainer>

            <Link style={{ color: '#FFF', width: '100%', textDecoration: "none" }} to={`/product/${id}`}>

                <ItemContainer.Image src={image} alt={"Image"} />

            </Link>

            <ItemContainer.Name>

                <Link style={{ color: 'black', width: '100%', textDecoration: "none" }} to={`/product/${id}`}>

                    {name}

                </Link>

            </ItemContainer.Name>

            <ItemContainer.Brand>

                {brand}

            </ItemContainer.Brand>


            <ItemContainer.Price>

                <ItemContainer.Small>$</ItemContainer.Small>

                <ItemContainer.Strong>{price}</ItemContainer.Strong>

            </ItemContainer.Price>

        </ItemContainer>
    );
}

export default Item;