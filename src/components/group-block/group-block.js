import React from 'react'
import {Box, Image, Content, Icon, Columns, Column, Notification, Button, Control} from "bloomer";

import './group-block.css'

const GroupBlock = ({type, isClick}) => (
    <Box
        //isFullWidth="false"
        style={{"background" : "#FFFFFF",
            "box-shadow": "0px 0px 48px rgba(0, 0, 0, 0.05)",
            "border-radius": "8px",
            // "height": "414px",
            "width": "352px"}}>
        <div style={{}}>
            <Content isHidden={(type === "2" || type === "3")}>
            <span>
                <a href="http://localhost:3000/groups/"
                   className="group-name">
                    Box {type}
                    <button className="btn btn-sm float-right">
                        <Icon
                              className="fa fa-arrow-right fa-lg"
                              style={{"color": "#0019FF"}}
                        />
                    </button>
                </a>
            </span>
            </Content>
            <Content isHidden={(type === "2" || type === "3")}>
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
            </Content>
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
                }}>“Привет! Мы ищем таких же увлеченных физикой студентов!” {type}</p>
            </Content>

            <Content isHidden={(type === "2" || type === "3")}>
            <span>
                <figure className="image is-64x64">
                    <img className="is-rounded" src="https://bulma.io/images/placeholders/64x64.png" alt="Image"/>
                </figure>
            </span>
            </Content>
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
            <Control>
                <Button onClick={() => isClick()}
                        isHidden={(type === "1" || type === "3" || type === "4")}
                        style={{
                    "background": "#001AFF",
                    "border-radius": "4px",
                    "height": "54px",
                    "width": "257px",
                    "font-family": "Roboto",
                    "font-style": "normal",
                    "font-weight": "500",
                    "font-size": "14px",
                    "line-height": "16px",
                    "letter-spacing": "0.25px",

                    "color": "#FFFFFF"
                }}>Подать заявку</Button>
            </Control>
            <Content isHidden={(type === "1" || type === "2" || type === "3")}>
                <span style={{
                    "font-family": "Roboto",
                    "font-style": "normal",
                    "font-weight": "500",
                    "font-size": "18px",
                    "line-height": "21px",
                    /* identical to box height */

                    "letter-spacing": "0.25px",

                    "color": "#979797"
                }}>Заявка подана</span>
                <span className="float-right"
                      style={{
                    "font-family": "Roboto",
                    "font-style": "normal",
                    "font-weight": "500",
                    "font-size": "18px",
                    "line-height": "21px",
                    /* identical to box height */

                    "letter-spacing": "0.25px",

                    "color": "#0019FF"
                }}>Отменить</span>
            </Content>
            <Content isHidden={(type === "1" || type === "2" || type === "4")}
                 style={{
                "font-family": "Roboto",
                "font-style": "normal",
                "font-weight": "500",
                "font-size": "18px",
                "line-height": "21px",
                /* identical to box height */

                "letter-spacing": "0.25px",

                "color": "#C2C2C2"
            }}>
                Ваша заявка на рассмотрении!
            </Content>
        </div>
    </Box>
);

export default GroupBlock;
