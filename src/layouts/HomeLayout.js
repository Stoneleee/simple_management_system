/**
 * Created by Stoneleee on 2017/8/25.
 */
import React, { Component } from 'react';

class HomeLayout extends Component {
    render () {
        const { title, children } = this.props;
        return (
            <div>
                <header>
                    <h1>{title}</h1>
                </header>
                <main>
                    {children}
                </main>
            </div>
        );
    }
}
export default HomeLayout;