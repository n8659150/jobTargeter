import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import './index.css';
import App from './App';
import notFound from './pages/404/404';
import ConnectedJRP from './pages/jrp/jrp'
import jdpUI from './pages/jdp/jdpUI'
import { Router, Route, browserHistory } from 'react-router'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    (<Provider store={store}>
        <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="result" component={ConnectedJRP} />
            <Route path="detail/:jobDID" component={jdpUI} />
        <Route path="*" component={notFound}/>
        </Route>
        </Router>
    </Provider>
    ),
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
