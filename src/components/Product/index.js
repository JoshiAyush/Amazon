import React from "react";

import { useStateValue } from "../../StateProvider.js";

import { ProductArticle } from "./style/Product.js";

function Product({ id, title, price, image, rating }) {
    /**
     * @function Product() is a product component for our markup.
     * 
     * @argument id is the identifier of the product.
     * @argument title is the title for the product.
     * @argument price is the price of the product.
     * @argument image is the image url of the product.
     * @argument rating is the rating of the product.
     */

    const [{ }, dispatch] = useStateValue();

    const addToBasket = () => {
        /**
         * @function addToBasket() adds the product to the basket
         * using function dispatch()
         */

        /**
         * @function dispatch() dispatches an event to add product to
         * the basket
         */

        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        });
    }

    return (
        <ProductArticle>

            <ProductArticle.Info>

                <ProductArticle.Para>{title}</ProductArticle.Para>

                <ProductArticle.Price>

                    <ProductArticle.Small>

                        <ProductArticle.Strong>$</ProductArticle.Strong>

                    </ProductArticle.Small>

                    <ProductArticle.Strong>{price}</ProductArticle.Strong>

                </ProductArticle.Price>

                <ProductArticle.Rating>
                    {
                        Array(rating).fill().map((_, i) => {
                            /**
                             * @function map() maps the ⭐ rating times
                             */
                            return (<ProductArticle.Para>⭐</ProductArticle.Para>);
                        })
                    }
                </ProductArticle.Rating>

            </ProductArticle.Info>

            <ProductArticle.ImageContainer>

                <ProductArticle.Image src={image} alt="" />

            </ProductArticle.ImageContainer>

            <ProductArticle.ButtonContainer>

                <ProductArticle.Button onClick={addToBasket}>Add to Basket</ProductArticle.Button>

            </ProductArticle.ButtonContainer>

        </ProductArticle>
    )
}

export default Product;