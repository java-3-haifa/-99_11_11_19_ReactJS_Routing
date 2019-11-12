import React, {Component} from 'react';
import Home from './Home.js'
import About from './About.js'
import Contacts from './Contacts.js'
import ContactView from "./ContactView.js";
import {Route,Link,NavLink,Switch} from 'react-router-dom'

export default class extends Component {
    render() {
        return (
            <div>
                <div>
                    <ul style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        listStyle: 'none'
                    }}>
                        <li style={{marginRight: 10}}>
                            {/*<Link to="/">Home</Link>*/}
                            <NavLink to="/" exact>Home</NavLink>
                        </li>
                        <li style={{marginRight: 10}}>
                            {/*<Link to="/about">About</Link>*/}
                            <NavLink to={{
                                pathname:'/about',
                                search:'?a=10&b=20',
                                hash:'tel-ran'
                            }}
                            activeClassName={"my-active"}>About</NavLink>
                        </li>
                        <li style={{marginRight: 10}}>
                            {/*<Link to="/contacts">Contacts</Link>*/}
                            <NavLink to="/contacts" activeStyle={{color:'blue'}}>Contacts</NavLink>
                        </li>
                    </ul>
                </div>
                <hr/>
                <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contacts/:name" component={ContactView}/>
                <Route path="/contacts"  component={Contacts}/>
                </Switch>
                {/*<Route path="**" exact render={()=><h2 style={{color: 'red'}}>404 Not Found</h2>}/>*/}
            </div>
        );


    }
}
