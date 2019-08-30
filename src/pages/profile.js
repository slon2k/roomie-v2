import React, {Component} from 'react'

import ProfileBlock from '../components/profile-block';
import GroupBlocks from "../components/group-blocks";
import GroupBlock from "../components/group-block";
import {Container} from "bloomer";
import * as PropTypes from "prop-types";

class ProfilePage extends Component {
    state = {
        groupBlockType: "4"
    };
    render() {
        const {groupBlockType} = this.state;
        let {id} = this.props;
        return (
            <Container>
                <h3>Profile</h3>
                <h4>{id}</h4>
                <ProfileBlock/>
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

ProfilePage.propTypes = {id: PropTypes.any}

export default ProfilePage;