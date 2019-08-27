import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';
import HomePage from './pages/home';
import FAQPage from './pages/faq';
import GroupPage from './pages/group';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import ProfilePage from './pages/profile';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <AppHeader/>
                    <Switch>
                        <Route exact path={'/'} component={HomePage}/>
                        <Route exact path={'/faq'} component={FAQPage}/>
                        <Route exact path={'/group/:id'}
                               render = {({match}) =>
                                   <GroupPage
                                       id={match.params.id}
                                   />
                               }
                        />
                        <Route exact path={'/login'} component={LoginPage}/>
                        <Route exact path={'/register'} component={RegisterPage}/>
                        <Route exact path={'/profile/:id'}
                               render = {({match}) =>
                                   <ProfilePage
                                       id={match.params.id}
                                   />
                               }
                        />
                        <Route component={HomePage}/>
                    </Switch>
                    <AppFooter/>
                </div>
            </Router>
        );
    };
}