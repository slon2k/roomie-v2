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
                {this.state.loading && <div>Loading ...</div> }
                {!this.state.loading && <ProfileBlock user={user}/>}
                <p style={{
                    "font-family": "Roboto",
                    "font-style": "normal",
                    "font-weight": "bold",
                    "font-size": "50px",
                    "line-height": "64px",
                    /* identical to box height, or 128% */

                    "text-align": "center",
                    "letter-spacing": "0.892857px",

                    "color": "#292A34"
                }}>
                    Мои группы
                </p>
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