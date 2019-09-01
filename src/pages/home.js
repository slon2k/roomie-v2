import React, {Component} from 'react';

import GroupBlocks from '../components/group-blocks';
import {Content, Title, Container, Section, Column, Columns} from "bloomer";
import GroupBlock from "../components/group-block";

class HomePage extends Component {
    state = {
        groupBlockType: "1"
    };


    render() {
        let {groups} = this.props;
        console.log("home", groups);
        const {groupBlockType} = this.state;
        return (
            <Container style={{"background: background": "background: #E5E5E5"}}>
                <Title isSize={1}>isSize={1}</Title>
                <Title isSize={2}>isSize={2}</Title>
                <Title isSize={3}>isSize={3}</Title>
                <Title isSize={4}>isSize={4}</Title>
                <Title isSize={5}>isSize={5}</Title>
                <Title isSize={6}>isSize={6}</Title>
                <h3>HomePage</h3>
                <Content>
                    <h1>Content</h1>
                    <p>Is the component to handle WYSIWYG generated content</p>
                </Content>
                {/*<Columns>*/}
                {/*    <Column isSize={''}/>*/}
                {/*</Columns>*/}

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
                <GroupBlocks type={groupBlockType} groups={groups}/>
            </Container>
        );
    }
}

export default HomePage;