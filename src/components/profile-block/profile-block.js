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
        showDetails: false,
    };

    render() {
        let {showDetails} = this.state;
        let {user} = this.props;
        return (
            <div className="profile">
                <div className="profile-edit-button" ></div>
                <div className={ showDetails ? "profile-dropdown-button profile-dropdown-button--open" : "profile-dropdown-button" }
                     onClick={() => this.setState({showDetails: !showDetails})}
                >
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
                            in={showDetails}
                            timeout={300}
                            classNames="show-details"
                            unmountOnExit
                            appear
                        >
                            <section >
                                {userProp('Дата рождения', user.birthDate)}
                                {userProp('Университет', user.university)}
                                {userProp('Специальность', user.specialty)}
                                {userProp('Языки', user.languages)}
                                {userProp('Вредные привычки', user.badHabits)}
                                {userProp('Телефон', user.phoneNumber)}
                                {userProp('О себе', user.info)}
                            </section>
                        </CSSTransition>
                    </div>
                </div>
            </div>
        );
    }
}

export default withHelpersModifiers(ProfileBlock);