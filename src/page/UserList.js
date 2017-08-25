/**
 * Created by Stoneleee on 2017/8/25.
 */
import React, { Component } from 'react';
import HomeLayout from '../layouts/HomeLayout';

class UserList extends Component {

    constructor (props) {
        super (props);
        this.state = {
            userList: [],
        }
    }

    componentWillMount () {
        fetch('http://localhost:3000/user')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    userList: res,
                });
            });
    }

    handleDel = (user) => {
        const confirmed = confirm(`确定要删除用户 ${user.name} 吗？`);
        if(confirmed) {
            fetch('http://localhost:3000/user/' + user.id, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        userList: this.state.userList.filter(item => item.id !== user.id),
                    });
                    alert('删除用户成功');
                })
                .catch(err => {
                    console.log(err);
                    alert('删除用户失败');
                })
        }
    };

    render () {
        const { userList } = this.state;
        return (
            <HomeLayout title="用户列表">
                <table>
                    <thead>
                        <tr>
                            <td>用户ID</td>
                            <td>用户名</td>
                            <td>性别</td>
                            <td>年龄</td>
                            <td>操作</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userList.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.age}</td>
                                        <td>
                                            <a
                                                href="javascript:void(0)"
                                                onClick={() => this.handleEdit(user)}
                                            >编辑</a>
                                            <a
                                                href="javascript:void(0)"
                                                onClick={() => this.handleDel(user)}
                                            >删除</a>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </HomeLayout>
        );
    }
}
export default UserList;