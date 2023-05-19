//for adding item to the cart

import Product from "../../component/Product";

export const addCart = (Product) => {
    return{
        type : "ADDITEM",
        payload : Product
    }
}

//for deleting item from cart
export const delCart = (Product) => {
    return {
        type: "DELITEM",
        payload: Product
    }
}