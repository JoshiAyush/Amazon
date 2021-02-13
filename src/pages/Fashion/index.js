import React from "react";

import { Item } from "../../components/index.js";

import { FashionContainer } from "./style/Fashion.js";

import { products } from "../../data.js";

function Fashion() {
    return (
        <FashionContainer>

            <FashionContainer.Left>


            </FashionContainer.Left>

            <FashionContainer.Right>

                <FashionContainer.Products>

                    {
                        Array.from(products["Fashion"]).map((product) => (
                            <FashionContainer.List>

                                <Item
                                    name={product.name}
                                    image={product.image}
                                    brand={product.brand}
                                    price={product.price}
                                />

                            </FashionContainer.List>
                        ))
                    }

                </FashionContainer.Products>

            </FashionContainer.Right>

        </FashionContainer>
    );
}

export default Fashion;