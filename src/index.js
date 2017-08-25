/**
 * Created by Stoneleee on 2017/8/25.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import UserAddPage from './page/UserAdd';
import HomePage from './page/Home';
import UserListPage from './page/UserList';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={HomePage} />
        <Route path="/user/add" component={UserAddPage} />
        <Route path="/user/list" component={UserListPage} />
    </Router>
), document.getElementById('app'));