import React from 'react'

import ProfileBlock from '../components/profile-block';
import GroupBlocks from "../components/group-blocks";
import GroupBlock from "../components/group-block";
import {Container} from "bloomer";

const ProfilePage = ({id}) => {
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
                <GroupBlock/>,
                <GroupBlock/>,
                <GroupBlock/>,
                <GroupBlock/>,
                <GroupBlock/>,
                <GroupBlock/>]
            }/>
        </Container>
    );
};

export default ProfilePage;