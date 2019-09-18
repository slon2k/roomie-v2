import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './app.css';

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
        this.data.getGroups()
            .then(groups => {
                this.onGroupsLoaded(groups);
            })
            .catch(this.onError)
    };

    getUser = ({id}) => {
        this.data.getUser({id}).then(res => console.log("app getUser", res))
            .catch(this.onError);
    };

    componentDidMount() {
        this.getGroups();
    }

    getGroupById = (id) => {
        let {groups} = this.state;
        const index = groups.findIndex(el => el.id === id);
        if (index > -1)
            return groups[index];
        return null;
    };

    render() {
        let {groups} = this.state;
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
                        <Route exact path={'/faq'}
                               render = {() => <FAQPage questions={this.data.getQuestions()}/>}
                        />
                        <Route exact path={'/group/:id'}
                               render ={({match}) => {
                                   //console.log("APP", this.getGroupById(parseInt(match.params.id)));
                                   return <GroupPage
                                       id={match.params.id}
                                       group={this.getGroupById(parseInt(match.params.id))}
                                   />
                               }
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
                                       getUser = {this.data.getUser}
                                       //user={this.getUser(match.params.id)}
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