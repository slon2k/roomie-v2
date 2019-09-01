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
import Data from './data';

export default class App extends Component {
    data = new Data();

    state = {
        groups: []
    };

    onError = (err) => {
        console.log(err);
    };

    onGroupsLoaded = (groups) => {
        this.setState({
            groups: [...groups]
        });
    };

    getGroups = () => {
        this.data.getGroups().then(this.onGroupsLoaded).catch(this.onError)
    };

    componentDidMount() {
        this.getGroups();
    }

    getGroupById = (groups, id) => {
        const index = groups.findIndex(el => el.id === id);
        if (index > -1)
            return groups[index];
        return null;
    }

    render() {
        let {groups} = this.state;
        console.log("tut", groups);
        console.log(this.getGroupById(groups, 101));
        return (
            <Router>
                <div>
                    <AppHeader/>
                    <Switch>
                        <Route exact path={'/'}
                               render = {() =>
                                   <HomePage
                                       groups={groups}
                                   />
                               }
                        />
                        <Route exact path={'/faq'} component={FAQPage}/>
                        <Route exact path={'/group/:id'}
                               render = {({match}) =>
                                   <GroupPage
                                       id={match.params.id}
                                       group={this.getGroupById(groups, parseInt(match.params.id))}
                                   />
                               }
                        />
                        <Route exact path={'/login'} component={LoginPage}/>
                        <Route exact path={'/register'}
                               render = {() =>
                                   <RegisterPage
                                       num={"first"}
                                   />
                               }
                        />
                        <Route exact path={'/profile/:id'}
                               render = {({match}) =>
                                   <ProfilePage
                                       id={match.params.id}
                                   />
                               }
                        />
                    </Switch>
                    <AppFooter/>
                </div>
            </Router>
        );
    };
}