import React from "react";
import {Box, Content} from "bloomer";

const UsersListItem = () => {
    return (
        <Box isDisplay="flex">
            <figure className="image is-64x64">
                <img className="is-rounded"
                     src="https://bulma.io/images/placeholders/64x64.png"
                     alt="Image"/>
            </figure>
            <div style={{"width": "225px"}}>
                <div style={{
                    "font-family": "Roboto",
                    "font-style": "normal",
                    "font-weight": "500",
                    "font-size": "18px",
                    "line-height": "21px",
                    "letter-spacing": "0.25px",

                    "color": "#000000"
                }}>Name
                </div>
                <div style={{
                    "font-family": "Roboto",
                    "font-style": "normal",
                    "font-weight": "normal",
                    "font-size": "14px",
                    "line-height": "16px",
                    "letter-spacing": "0.25px",

                    "color": "#000000"
                }}>age, city
                </div>
            </div>
            <div style={{
                "width": "352px"
            }}>
                <Content>
                    {/*<h1>Content</h1>*/}
                    <p style={{
                        "font-family": "Roboto",
                        "font-style": "italic",
                        "font-weight": "normal",
                        "font-size": "14px",
                        "line-height": "16px",
                        "letter-spacing": "0.25px",

                        "color": "#000000"
                    }}>“Привет, я из Астаны, сейчас учусь в КБТУ, ищу
                        сожительниц-девушек!”</p>
                </Content>
            </div>
        </Box>
    );
};

export default UsersListItem;