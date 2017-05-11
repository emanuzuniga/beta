import axios from "axios";

export function fetchClients() {

  return function(dispatch) {
    axios.get("/sales/api/clients/")
      .then((response) => {
        dispatch({type: "FETCH_CLIENTS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_CLIENTS_REJECTED", payload: err})
      })
  }
}

export function clientSelected(code, clients) {

    const clientSelected = clients.findIndex(client => client.code == code)//checks if product exists

    let res = (clientSelected == -1 )//if not exists dispatch Not Found, if exists check if already in cart
            ? {type: "CLIENT_NOT_FOUND", payload: -1}
            : {type: "CLIENT_SELECTED", payload: {client:clients[clientSelected]}}

    return res

}

export function searchClient(){

    return {type: "CLIENT_SHOW_PANEL", payload: -1}
}
