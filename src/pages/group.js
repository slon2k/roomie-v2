import React, {Component} from 'react';
import {Box, Column, Columns, Container, Content, Table} from "bloomer";
import GroupBlock from "../components/group-block";
import UsersListCollapse from "../components/users-list-collapse";
import "./group.css";
import * as PropTypes from "prop-types";

class GroupPage extends Component {
    state = {
        groupBlockType: "2"
    };

    isClick = () => {
        this.setState({groupBlockType: "3"});
    };

    render() {
        const {groupBlockType} = this.state;
        console.log("group page", this.props);
        let {group} = this.props;
        const {id} = group;
        return (
            <Container>
                <p className="group-name">Студенты-физики</p>
                <h4>{id}</h4>
                <Columns>
                    <Column isSize="1/3">
                        <GroupBlock type={groupBlockType} isClick={this.isClick} group={group}/>
                    </Column>
                    <Column>
                        <UsersListCollapse name="Участники"/>
                        <UsersListCollapse name="Заявки на участие"/>
                        <UsersListCollapse name="Опросы"/>
                    </Column>
                </Columns>
            </Container>
        );
    }
}

GroupPage.propTypes = {id: PropTypes.any}

export default GroupPage;