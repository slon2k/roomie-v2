import React from 'react';

import GroupBlocks from '../components/group-blocks';
import {Content, Title, Container, Section, Column, Columns} from "bloomer";
import GroupBlock from "../components/group-block";

const HomePage = () => {
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

            <GroupBlocks groups={[
                <GroupBlock/>,
                <GroupBlock/>,
                <GroupBlock/>,
                <GroupBlock/>,
                <GroupBlock/>,
                <GroupBlock/>]
            }/>
        </Container>
    );
};

export default HomePage;