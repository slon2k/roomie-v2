import React, {Component} from 'react';
import {Columns, Column, Table, Icon, Container} from "bloomer";
import { withHelpersModifiers  } from 'bloomer';

import './profile-block.css';
import Avatar from "../avatar";

class ProfileBlock extends Component {
    state = {
        isBoxBottomHidden: true
    };

    render() {
        let {isBoxBottomHidden} = this.state;
        let {user} = this.props;
        return (
            <section className="profile">
                <div className="box">
                    <Avatar image={user.imgPath} size={200}/>
                </div>
            </section>
        );
    }
}

export default withHelpersModifiers(ProfileBlock);