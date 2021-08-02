// IMport the react and ReactDOM libraries
// create a react componet
//take the react component and show it on the screen

import React from 'react';
import ReactDOM from 'react-dom';

const getTime = () => (new Date()).toLocaleTimeString();

const App = () => {
    return (
<div>
    <div className="cTime">
        <h3>Current time {getTime()}</h3>
    </div>
    <div className="form">
        <div className="form-toggle"></div>
        <div className="form-panel one">
            <div className="form-header">
                <h3>Account Login</h3>
            </div>
            <div className="form-content">
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" name="username" required="required"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" name="password" required="required"/>
                    </div>
                    <div className="form-group">
                        <label className="form-remember">
                            <input type="checkbox"/>Remember Me
                        </label><a className="form-recovery" href="#">Forgot Password?</a>
                    </div>
                    <div className="form-group">
                        <button type="submit">Log In</button>
                    </div>
                </form>
            </div>
        </div>
        <div className="form-panel two">
            <div className="form-header">
                <h1>Register Account</h1>
            </div>
            <div className="form-content">
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" name="username" required="required"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" name="password" required="required"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cpassword">Confirm Password</label>
                        <input id="cpassword" type="password" name="cpassword" required="required"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input id="email" type="email" name="email" required="required"/>
                    </div>
                    <div className="form-group">
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
    );
};


//take the react component and show it on the screen

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);