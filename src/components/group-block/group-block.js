import React from 'react'
import {Box, Image, Content, Icon, Columns, Column, Notification} from "bloomer";

import './group-block.css'

const GroupBlock = () => (
    <Box
        //isFullWidth="false"
        style={{"background" : "#FFFFFF",
            "box-shadow": "0px 0px 48px rgba(0, 0, 0, 0.05)",
            "border-radius": "8px",
            // "height": "414px",
            "width": "352px"}}>
        <div style={{}}>
            <span>
                <a href="http://localhost:3000/groups/"
                   className="group-name">
                    Box
                    <button className="btn btn-sm float-right">
                        <Icon
                              className="fa fa-arrow-right fa-lg"
                              style={{"color": "#0019FF"}}
                        />
                    </button>
                </a>
            </span>
            <p style={{
                "font-family": "Roboto",
                "font-style": "normal",
                "font-weight": "normal",
                "font-size": "14px",
                "line-height": "16px",
                "letter-spacing": "0.25px",

                "color": "#3F3F3F"
            }}>
                City
            </p>
            <Content style={{
                "height": "172px",
                "display": "flex",
                "align-items": "center",
                "justify-content": "center"
            }}>
                {/*<h1>Content</h1>*/}
                <p style={{
                    "font-family": "Roboto",
                    "font-style": "italic",
                    "font-weight": "normal",
                    "font-size": "14px",
                    "line-height": "16px",
                    "letter-spacing": "0.25px",

                    "color": "#000000"
                }}>“Привет! Мы ищем таких же увлеченных физикой студентов!”</p>
            </Content>

            <Image isSize="64x64" src="maxresdefault.jpg" />
            <div style={{"height": "16px"}}></div>

            <Columns>
                <Column>
                    <p className="group-block-column-name">
                        ПЕРИОД АРЕНДЫ
                    </p>
                    <p className="group-block-column-data">
                        1 год
                    </p>
                </Column>
                <Column>
                    <p className="group-block-column-name">
                        ВСЕГО
                    </p>
                    <p className="group-block-column-data">
                        1 год
                    </p>
                </Column>
                <Column>
                    <p className="group-block-column-name">
                        ОСТАЛОСЬ
                    </p>
                    <p className="group-block-column-data">
                        1 год
                    </p>
                </Column>
            </Columns>
        </div>

    </Box>
);

export default GroupBlock;
