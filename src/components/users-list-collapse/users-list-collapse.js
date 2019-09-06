import React from 'react';
import {Box, Container, Content} from "bloomer";

import UsersListItem from "../users-list-item";
import "./users-list-collapse.css";

const UsersListCollapse = ({name, membersNumber, usersList}) => {
    const elements = usersList.map((item) => {
        const id = item.id;
        return (
            <li key={id}>
                <UsersListItem user={item}/>
            </li>
        );
    });

    console.log("users-list-collapse ", usersList);

    return (
        <div>
            <Box>
                <div className="collapse-header">{name} ({membersNumber})</div>
            </Box>
            <Container>
                <ul>
                    {elements}
                </ul>
            </Container>
        </div>
    );
};

export default UsersListCollapse