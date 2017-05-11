const stateConst = {
    productsFetching:false,
    productsFected:false,
    productsFetchError:'',
    products: {},
}

export default function reducer(state=stateConst, action) {

    switch (action.type) {

        case "FETCH_PRODUCTS": {
            return {...state, productsFetching: true}
        }//case

        case "FETCH_PRODUCTS_REJECTED": {
          return {
              ...state,
              productsFetching: false,
              productsFetchError: action.payload}
        }//case

        case "FETCH_PRODUCTS_FULFILLED": {
            return {
              ...state,
              productsFetching: false,
              productsFected: true,
              products: action.payload,
            }
            break;
        }//case

    }// switch

    return state //default return

}// reducer
