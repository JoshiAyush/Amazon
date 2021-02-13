/** 
 * React is an open-source, front end, JavaScript library for building user interfaces or UI components. 
 * 
 * It is maintained by Facebook and a community of individual developers and companies. 
 * 
 * React can be used as a base in the development of single-page or mobile applications. 
 * 
 * For more information on React @see https://en.wikipedia.org/wiki/React_(web_framework)
 * 
 * If you want to get in touch with, @see https://www.linkedin.com/in/ayush-joshi-3600a01b7 my LinkedIn profile
 */

import styled from "styled-components/macro";                        // importing styled components

import React, { useEffect } from "react";                            // importing React and hooks from react
import { Route } from "react-router-dom";                            // importing Router from react-route-dom
import { Switch } from "react-router-dom";                           // importing Switch from react-router-dom
import { BrowserRouter as Router } from "react-router-dom";          // importing BrowserRouter as Router from react-router-dom

import { Home } from "./pages/index.js";                             // importing page Home
import { Login } from "./pages/index.js";                            // importing page Login
import { SignUp } from "./pages/index.js";                           // importing page SignUp
import { Payment } from "./pages/index.js";                          // importing page Payment 
import { Fashion } from "./pages/index.js";                          // importing page Fashion
import { Checkout } from "./pages/index.js";                         // importing page Checkout

import { Header } from "./components/index.js";                      // importing component Header
import { Orders } from "./components/index.js";                      // importing component Orders

import { register } from "./serviceWorker.js";                       // importing service worker
import { useStateValue } from "./StateProvider.js";                  // importing StateProvider

/**
 * @styledComponent Container (holds the children nodes of our web app).
 */
const Container = styled.div`
  text-align: center;
  color: white;
  font-family: 'Roboto', sans-serif;
`;


function AppContainer({ children, ...props }) {
  /**
   * @function AppContainer() it holds the complete App components within itself.
   * 
   * @argument {Markup} children it the reference variable for the components that build our App.
   * 
   * @argument {Attributes} props it is the properties given to the AppContainer() component.
   */
  return (
    <Container {...props}>
      {children}
    </Container>
  );
}

function App() {
  /**
   * @function App() creates a react component App which later renders the App in our browser.
   * 
   * We also use Routes here to enable routing in our App we have the following routes that a 
   * user can visit,
   * 
   * @route /login (Login page for our web app).
   * 
   * @route /account.create (Sign Up for our web app).
   * 
   * @route /cart (Checkout page for our web app).
   * 
   * @route /payment (Payment page for our web app).
   * 
   * @route /orders (Ordered products list).
   * 
   * @route / (Root node for our web app).
   */
  const [{ }, basket] = useStateValue();

  useEffect(() => {
    /**
     * register the service worker for our app in the very first render of our app component. 
     */
    register();
  }, []);

  return (
    <AppContainer>

      <Router>

        <Switch>

          <Route path="/login">

            <Login />

          </Route>

          <Route path="/signup">

            <SignUp />

          </Route>

          <Route path="/cart">

            <Header />

            <Checkout />

          </Route>

          <Route path={basket.lenght !== 0 && "/payment"}>

            <Header />

            <Payment />

          </Route>

          <Route path="/orders">

            <Header />

            <Orders />

          </Route>

          <Route path="/fashion">

            <Header />

            <Fashion />

          </Route>

          <Route path="/">

            <Header />

            <Home />

          </Route>

        </Switch>

      </Router>

    </AppContainer>
  );
}

/**
 * @export App to index.js
 */

export default App;