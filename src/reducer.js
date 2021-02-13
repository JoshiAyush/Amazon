// our initial state
export const initialState = {
    basket: [],
    user: null
};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => {
    /**
     * @function array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
     * @argument total is the variable that keeps the reduced value of the array basically it is a accumulator
     * @argument currentValue is the current iterative value of the array provided
     * @argument currentIndex is the current iteratvie index of the provided array
     * @argument arr is the array itself
     * @argument initialValue is the initial value in our case its 0
     * 
     * It reduces the array to a single value. 
     * 
     * The method executes a provided function 
     * for each value of the array (from left-to-right).
     * 
     * The return value of the function is stored 
     * in an accumulator (result/total). 
     * 
     * Here ? symbol after basket means optional
     * chaining so the program does not break
     * in case the basket is not defined.
     */
    return item.price + amount;
}, 0);

const reducer = (state, action) => {
    /**
     * @function reducer() is a listener for the events for our data layer,
     * it performs operations according to the action type.
     * @argument state is the state of the data layer
     * @argument action is the object that keeps the type of event and other data
     */

    switch (action.type) {
        case "ADD_TO_BASKET":
            /**
             * @return updated basket and rest of the state when 
             * @case ADD_TO_BASKET happens 
             */
            return {
                ...state, // spreading the state using the spread operator
                basket: [...state.basket, action.item] // adding item to the end of the basket (fancy push)
            };
        case "REMOVE_FROM_BASKET":
            /**
             * removing item from basket using index when
             * @case REMOVE_FROM_BASKET happens 
             */
            const index = state.basket.findIndex(
                /**
                 * @function findIndex() returns the index of the 
                 * first element in an array that pass a test 
                 * (provided as a function)
                 */
                (basketItem) => basketItem.id === action.id
            );
            /**
             * Destructuring entire basket to a new basket array
             */
            let newBasket = [...state.basket];
            // check if we have got a real index value
            if (index >= 0) {
                /**
                 * @function splice() finds and remove the element
                 * @argument index is the item index
                 * @argument deleteCount is the number of elements to be deleted from start number
                 */
                newBasket.splice(index, 1);
            } else {
                /**
                 * warning if item is not removable 
                 */
                console.warn(`Can't remove product (id: ${action.id}) as it's not in basket`);
            }
            /**
             * @return new basket and the rest of the state when
             * @case REMOVE_FROM_BASKET happens
             */
            return {
                ...state, // spreading the state using the spread operator
                basket: newBasket // updating basket
            };
        case "EMPTY_BASKET":
            /**
             * @return empty basket and the rest of the state when
             * @case EMPTY_BASKET happens
             */
            return {
                ...state,
                basket: []
            };
        case "SET_USER":
            /**
             * @return given user and the rest of the state when
             * @case SET_USER happens  
             */
            return {
                ...state,
                user: action.user
            };
        default:
            /**
             * @return the state as it is, incase of no case
             */
            return state;
    }
}

// export reducer as default
export default reducer;