import React from 'react';
import {Columns, Column} from "bloomer";

import GroupBlock from '../group-block';

const GroupBlocks = ({groups}) => {
    const groupsList = groups.map((el) => {
        return (
            <Column isSize={'1/3'} >
                {el}
            </Column>
        );
    });
    return (
        <div>
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
                Найдите подходящую группу
            </p>
            <Columns isMultiline={true}>
                {groupsList}
            </Columns>
        </div>
    );
};

export default GroupBlocks;