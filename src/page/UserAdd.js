/**
 * Created by Stoneleee on 2017/8/25.
 */
import React, { Component } from 'react';
import HomeLayout from '../layouts/HomeLayout';
import UserEditor from '../components/UserEditor';

class UserAdd extends Component {

    render () {
        return (
            <HomeLayout title="添加用户">
                <UserEditor />
            </HomeLayout>
        );
    }
}
export default UserAdd;