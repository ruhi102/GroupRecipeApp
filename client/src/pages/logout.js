import React, { Component } from 'react';
import User from './User';
import {Route} from 'react-router-dom';
  

import LoginPage from './LoginPage'


class logout extends Component {
    render() {
        return (
            <div>
                <div className='App'>
                 <User />
</div>
            </div>
        );
    }
}

export default logout;