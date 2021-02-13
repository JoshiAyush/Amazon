import React, { useState } from "react";

import { Images } from "../../data.js";
import { products } from "../../data.js";

import { HomeContainer } from "./style/Home.js";

import { Product } from "../../components/index.js";
import { DirectionBanner } from "../../components/index.js";


function Home() {
    /**
     * @function Home() creates a component for home
     * where the home images and products are render
     * out
     */

    let [image, setImage] = useState(Images.computers);

    return (
        <HomeContainer>

            <HomeContainer.Inner>

                <HomeContainer.InnerBar>

                    <HomeContainer.InnerBarMain>

                        <HomeContainer.InnerBarMainOption>All</HomeContainer.InnerBarMainOption>

                        <HomeContainer.InnerBarMainOption>Today's Deals</HomeContainer.InnerBarMainOption>

                        <HomeContainer.InnerBarMainOption>Customer Service</HomeContainer.InnerBarMainOption>

                        <HomeContainer.InnerBarMainOption>Gift Cards</HomeContainer.InnerBarMainOption>

                        <HomeContainer.InnerBarMainOption>Sell</HomeContainer.InnerBarMainOption>

                        <HomeContainer.InnerBarMainOption>Registry</HomeContainer.InnerBarMainOption>

                    </HomeContainer.InnerBarMain>

                    <HomeContainer.InnerBarResponse>Amazon's response to COVID-19</HomeContainer.InnerBarResponse>

                </HomeContainer.InnerBar>

                <HomeContainer.HomeImage src={image} alt="Image" />

            </HomeContainer.Inner>

            <DirectionBanner />

            <HomeContainer.HomeRowContainer>

                <HomeContainer.HomeRow>

                    <Product
                        id={products["Computers"][0].id}
                        title={products["Computers"][0].title}
                        price={products["Computers"][0].price}
                        image={products["Computers"][0].image}
                        rating={products["Computers"][0].rating}
                    />

                    <Product
                        id={products["Computers"][1].id}
                        title={products["Computers"][1].title}
                        price={products["Computers"][1].price}
                        image={products["Computers"][1].image}
                        rating={products["Computers"][1].rating}
                    />

                </HomeContainer.HomeRow>

                <HomeContainer.HomeRow>

                    <Product
                        id={products["Computers"][3].id}
                        title={products["Computers"][3].title}
                        price={products["Computers"][3].price}
                        image={products["Computers"][3].image}
                        rating={products["Computers"][3].rating}
                    />

                    <Product
                        id={products["Computers"][3].id}
                        title={products["Computers"][3].title}
                        price={products["Computers"][3].price}
                        image={products["Computers"][3].image}
                        rating={products["Computers"][3].rating}
                    />

                    <Product
                        id={products["Computers"][4].id}
                        title={products["Computers"][4].title}
                        price={products["Computers"][4].price}
                        image={products["Computers"][4].image}
                        rating={products["Computers"][4].rating}
                    />

                </HomeContainer.HomeRow>

                <HomeContainer.HomeRow>

                    <Product
                        id={products["Computers"][5].id}
                        title={products["Computers"][5].title}
                        price={products["Computers"][5].price}
                        image={products["Computers"][5].image}
                        rating={products["Computers"][5].rating}
                    />

                </HomeContainer.HomeRow>

            </HomeContainer.HomeRowContainer>

        </HomeContainer>
    );
}

export default Home;