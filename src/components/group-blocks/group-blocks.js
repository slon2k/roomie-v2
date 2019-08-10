import React from 'react';

import GroupBlock from "./group-block";

const GroupBlocks = () => {
    return (
        <div className={"d-flex"}>
            <GroupBlock/>
            <GroupBlock/>
            <GroupBlock/>
        </div>
    );
};

export default GroupBlocks;