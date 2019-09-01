import React from 'react';
import {Box, Container, Content} from "bloomer";

import UsersListItem from "../users-list-item";
import "./users-list-collapse.css";

const UsersListCollapse = ({name, membersNumber, usersList}) => {
    return (
        <div>
            <Box>
                <div className="collapse-header">{name} ({membersNumber})</div>
            </Box>
            <Container>
                <div>
                    <UsersListItem/>
                </div>
            </Container>
        </div>
    );
};

export default UsersListCollapse