import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import { Provider } from "react-redux"


import Main from './main/main.jsx'
import Sidebar from './sidebar/sidebar.jsx'
import SearchClient from './search/clients/searchPanel.jsx'
import Footer from './footer/footer.jsx'
//import PeopleContainer from './people/components/PeopleContainer.jsx'


import store from "./store.js"

// ReactDOM.render(
//         <Provider store={store}>
//
//             <Main></Main>
//
//         </Provider>,
//
//     document.getElementById('app-main-container')
// );


ReactDOM.render(<Provider store={store}>
                    <div style={{'marginTop':'5px'}} className="row blur-div">

                        <Main></Main>
                        <Sidebar></Sidebar>
                        <SearchClient></SearchClient>

                    </div>
                </Provider>,

                document.getElementById('main-content')
);

ReactDOM.render(<Provider store={store}>

                    <Footer></Footer>

                </Provider>,

    document.getElementById('footer')
);
