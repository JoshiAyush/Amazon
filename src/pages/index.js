/**
 * @file src/pages/index.js contains the alias for all the app pages component created using 
 * React. We do this so that we don't have to write the full path every time we want to acces 
 * a page component in our web app page we just need to access this file like,
 * 
 * import _ from "src/pages";
 * 
 * Or,
 * 
 * import _ from "src/pages/index";
 * 
 * Or,
 * 
 * import _ from "src/pages/index.js"; 
 */

export { default as Home } from "./Home/index.js";
export { default as Login } from "./Login/index.js";
export { default as SignUp } from "./SignUp/index.js";
export { default as Fashion } from "./Fashion/index.js";
export { default as Payment } from "./Payment/index.js";
export { default as Checkout } from "./Checkout/index.js";