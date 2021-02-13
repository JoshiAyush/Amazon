/**
 * @file src/components/index.js contains the alias for all the app components created using 
 * React. We do this so that we don't have to write the full path every time we want to acces 
 * a component in our web app page we just need to access this file like,
 * 
 * import _ from "src/components";
 * 
 * Or,
 * 
 * import _ from "src/components/index";
 * 
 * Or,
 * 
 * import _ from "src/components/index.js"; 
 */

export { default as Item } from "./Item/index.js";
export { default as Order } from "./Order/index.js";
export { default as Orders } from "./Orders/index.js";
export { default as Header } from "./Header/index.js";
export { default as Product } from "./Product/index.js";
export { default as Subtotal } from "./Subtotal/index.js";
export { default as CheckoutProduct } from "./CheckoutProduct/index.js";
export { default as DirectionBanner } from "./DirectionBanner/index.js";
export { default as EmptyBasketButton } from "./EmptyBasketButton/index.js";