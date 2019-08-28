import React from 'react';
import {Column, Columns, Container} from "bloomer";
import GroupBlock from "../components/group-block";

const GroupPage = ({id}) => {
    return (
        <Container>
            <h3>Group</h3>
            <h4>{id}</h4>
            <Columns>
                <Column>
                    <GroupBlock/>
                </Column>
                <Column></Column>
            </Columns>
        </Container>
    );
};

export default GroupPage;