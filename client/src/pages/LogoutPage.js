import React, { Component } from 'react';
import {Route} from 'react-router-dom';
  

import LoginPage from './pages/LoginPage'


class logout extends Component {
    render() {
        return (
            <div>
                <Route path="/login" element={<LoginPage />} />
            </div>
        );
    }
}

export default logout;