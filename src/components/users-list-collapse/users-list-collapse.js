import React, {Component} from 'react';
import {Box, Container, Content, Icon} from "bloomer";

import UsersListItem from "../users-list-item";
import "./users-list-collapse.css";
import * as PropTypes from "prop-types";

class UsersListCollapse extends Component {
    state = {
        isBoxBottomHidden: true
    };
    render() {
        let {isBoxBottomHidden} = this.state;
        let {name, membersNumber, usersList} = this.props;
        const elements = usersList.map((item) => {
            const id = item.id;
            return (
                <li key={id}>
                    <UsersListItem user={item}/>
                </li>
            );
        });

        return (
            <div>
                <Box>
                    <div className="collapse-header">{name} ({membersNumber})
                        <button className="btn btn-sm float-right"
                                onClick={() => this.setState({isBoxBottomHidden: false})}>
                            <Icon
                                isHidden={!isBoxBottomHidden}
                                className="fa fa-chevron-down fa-lg"
                                style={{"color": "#0019FF"}}
                            />
                        </button>
                        <button className="btn btn-sm float-right"
                                onClick={() => this.setState({isBoxBottomHidden: true})}>
                            <Icon
                                isHidden={isBoxBottomHidden}
                                className="fa fa-chevron-up fa-lg"
                                style={{"color": "#0019FF"}}
                            />
                        </button>
                    </div>
                </Box>
                <Container isHidden={isBoxBottomHidden}>
                    <Box>
                        <ul>
                            {elements}
                        </ul>
                    </Box>
                </Container>
            </div>
        );
    }
}

UsersListCollapse.propTypes = {
    name: PropTypes.any,
    membersNumber: PropTypes.any,
    usersList: PropTypes.any
}

export default UsersListCollapse