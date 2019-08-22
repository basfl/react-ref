import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import styles from './Nav.module.css'
import Login from '../Login/Login'
class Nav extends Component {
    render() {
        return (
            <div className={styles.error}>***
            <ul className={styles.u}>
                    <li className={styles.l}><NavLink
                        to="/login"
                        className={styles.NavLink}>login</NavLink></li>
                    <li className={styles.l}><NavLink
                        to="/logout"
                        className={styles.NavLink}>logout</NavLink></li>

                </ul>
                <Switch>
                    <Route path="/login" exact component={Login} />
                    <Route path="/logout" component={Login} />
                    <Route path="/signup" component={Login} />
                    {/* <Redirect from="/" to="/posts" /> */}
                   
                </Switch>
            </div>
        )
    }
}
export default Nav