import React, {Component} from 'react';
import { CSSTransition } from "react-transition-group";
import { Icon } from "bloomer";
import { withHelpersModifiers  } from 'bloomer';

import './profile-block.css';
import Avatar from "../avatar";
import {ageToString} from "../../utils";

const userProp = (key, value) => {
    return(
        <div className="profile-info-prop">
            <div className="profile-info-key">
                {key}
            </div>
            <div className="profile-info-value">
                {value}
            </div>
        </div>
    )
}

class ProfileBlock extends Component {
    state = {
        isBoxBottomHidden: true,
        transition: false
    };

    render() {
        let {isBoxBottomHidden, transition} = this.state;
        let {user} = this.props;
        return (
            <div className="profile">

                <div className={ isBoxBottomHidden? "profile-dropdown-button" : "profile-dropdown-button profile-dropdown-button_open"}
                     onClick={() => this.setState({isBoxBottomHidden: !isBoxBottomHidden})}
                >
                    <Icon className="fa fa-arrow-circle-down fa-lg" />
                </div>
                <div className="box profile-block">
                    <div className="profile-picture">
                        <Avatar image={user.imgPath} size={200}/>
                    </div>
                    <div className="profile-info">
                        <div className="profile-info-name">{user.name}</div>
                        <div className="profile-info-age">{ageToString(user.age)}</div>
                        {userProp('Родная страна', 'Казахстан')}
                        {userProp('Родной город', user.city)}
                        <CSSTransition
                            in={!isBoxBottomHidden}
                            timeout={500}
                            classNames="my-node"
                            unmountOnExit
                            appear
                        >
                            <div>

                                <section >
                                    {userProp('Родной город', user.city)}
                                    {userProp('Родной город', user.city)}
                                    {userProp('Родной город', user.city)}
                                    {userProp('Родной город', user.city)}
                                    {userProp('Родной город', user.city)}
                                    {userProp('Родной город', user.city)}
                                    {userProp('Родной город', user.city)}
                                    {userProp('Родной город', user.city)}
                                </section>

                            </div>
                        </CSSTransition>
                    </div>
                </div>
                <button onClick={() => this.setState({transition: !transition})}>on/off</button>
                <CSSTransition
                    in={transition}
                    timeout={500}
                    classNames="my-node"
                    unmountOnExit
                    appear
                >
                    <div>

                        <div style={{width: "100px"}} key={"1"}>
                            Transition
                        </div>

                    </div>
                </CSSTransition>
            </div>
        );
    }
}

export default withHelpersModifiers(ProfileBlock);