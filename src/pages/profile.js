import React, {Component} from 'react'

import ProfileBlock from '../components/profile-block';
import GroupBlocks from "../components/group-blocks";
import GroupBlock from "../components/group-block";
import {Container} from "bloomer";

class ProfilePage extends Component {
    state = {
        loading: false,
        groupBlockType: "4",
        user: {}
    };

    componentDidMount() {
        this.setState({loading: true})
        this.props.getUser({id: this.props.id})
            .then(user =>  this.setState({user: user, loading: false}));
    }

    render() {
        console.log("profile render", this.state);
        const {groupBlockType, user} = this.state;
        return (
            <Container>
                {this.state.loading ? <div>Loading ...</div> : <ProfileBlock user={user}/>}
                <h3>
                    Мои группы
                </h3>
                <GroupBlocks groups={[
                    <GroupBlock type={groupBlockType}/>,
                    <GroupBlock type={groupBlockType}/>,
                    <GroupBlock type={groupBlockType}/>]
                }/>
            </Container>
        );
    }
}

export default ProfilePage;