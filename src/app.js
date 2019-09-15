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
        //console.log("APP onGroupsLoaded", groups);
        this.setState({
            groups: [...groups]
        });
    };

    getGroups = () => {
        this.data.getGroups()
            .then(groups => {
                //console.log("App getGroups", groups);
                this.onGroupsLoaded(groups);
            })

            .catch(this.onError)
    };

    getUser = ({id}) => {
        console.log("app check", id);
        this.data.getUser({id: id}).then(res => console.log("app getUser", res))
            .catch(this.onError);
    };

    componentDidMount() {
        //setTimeout('', 2000);
        //console.log("APP component did mount");
        this.getGroups();
    }


    getGroupById = (id) => {
        //console.log("APP STATE: ", this.state);
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
                        <Route exact path={'/faq'} component={FAQPage}/>
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
                                       getUser = {this.getUser}
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