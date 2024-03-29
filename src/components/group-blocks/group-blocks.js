import React from 'react';
import {Columns, Column} from "bloomer";

import GroupBlock from '../group-block';

const GroupBlocks = ({groups, type}) => {
    console.log(groups);
    const groupsList = groups.map((el) => {
        return (
            <Column isSize={'1/3'} >
                <GroupBlock type={type} group={el}/>
            </Column>
        );
    });
    return (
        <div>
            <Columns isMultiline={true}>
                {groupsList}
            </Columns>
        </div>
    );
};

export default GroupBlocks;