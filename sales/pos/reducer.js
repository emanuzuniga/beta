import { combineReducers } from "redux"

import products from "./main/product/reducer.js"
import cart from "./main/cart/reducer.js"
import clients from "./sidebar/clients/reducer.js"
import searchClients from "./search/clients/reducer.js"

export default combineReducers({
  products,
  cart,
  clients,
  searchClients,

})
