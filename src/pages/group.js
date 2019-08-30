import React, {Component} from 'react';
import {Box, Column, Columns, Container, Content, Table} from "bloomer";
import GroupBlock from "../components/group-block";
import * as PropTypes from "prop-types";

class GroupPage extends Component {
    state = {
        groupBlockType: "2"
    };

    isClick = () => {
        this.setState({groupBlockType: "3"});
    }

    render() {
        const {groupBlockType} = this.state;
        let {id} = this.props;
        return (
            <Container>
                <h3>Group</h3>
                <h4>{id}</h4>
                <Columns>
                    <Column isSize="1/3">
                        <GroupBlock type={groupBlockType} isClick={this.isClick}/>
                    </Column>
                    <Column>
                        <div>
                            <Box>
                                A white box to contain other elements
                            </Box>
                            <Container>
                                <Box>
                                    <div className="table-container"
                                         style={{"width": "725px", "background-color": "#FFFFFF"}}>
                                        <div className="table">
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <figure className="image is-64x64">
                                                        <img className="is-rounded"
                                                             src="https://bulma.io/images/placeholders/64x64.png"
                                                             alt="Image"/>
                                                    </figure>
                                                </td>
                                                <td>
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
                                                </td>
                                                <td>
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
                                                </td>
                                            </tr>
                                            </tbody>
                                        </div>
                                    </div>
                                </Box>
                            </Container>
                        </div>
                        <div>
                            <Box>
                                A white box to contain other elements
                            </Box>
                            <Container>
                                <Box>
                                    <div className="table-container"
                                         style={{"width": "725px", "background-color": "#FFFFFF"}}>
                                        <div className="table">
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <figure className="image is-64x64">
                                                        <img className="is-rounded"
                                                             src="https://bulma.io/images/placeholders/64x64.png"
                                                             alt="Image"/>
                                                    </figure>
                                                </td>
                                                <td>
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
                                                </td>
                                                <td>
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
                                                </td>
                                            </tr>
                                            </tbody>
                                        </div>
                                    </div>
                                </Box>
                            </Container>
                        </div>
                        <div>
                            <Box>
                                A white box to contain other elements
                            </Box>
                            <Container>
                                <Box>
                                    <div className="table-container"
                                         style={{"width": "725px", "background-color": "#FFFFFF"}}>
                                        <div className="table">
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <figure className="image is-64x64">
                                                        <img className="is-rounded"
                                                             src="https://bulma.io/images/placeholders/64x64.png"
                                                             alt="Image"/>
                                                    </figure>
                                                </td>
                                                <td>
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
                                                </td>
                                                <td>
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
                                                </td>
                                            </tr>
                                            </tbody>
                                        </div>
                                    </div>
                                </Box>
                            </Container>
                        </div>
                    </Column>
                </Columns>
            </Container>
        );
    }
}

GroupPage.propTypes = {id: PropTypes.any}

export default GroupPage;