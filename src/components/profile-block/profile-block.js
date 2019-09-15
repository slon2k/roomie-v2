import React, {Component} from 'react';
import {Columns, Column, Table, Icon, Container} from "bloomer";
import { withHelpersModifiers  } from 'bloomer';

import './profile-block.css';

class ProfileBlock extends Component {
    state = {
        isBoxBottomHidden: true
    };

    render() {
        let {isBoxBottomHidden} = this.state;
        let {user} = this.props;
        return (
            <div>
                ProfileBlock
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-192x192">
                                <img class="is-rounded" src={user.imgPath}
                                     alt="Image"/>
                            </figure>
                        </div>
                        <Container>
                            <div>
                                <div>
                                <span>
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div style={{
                                                        "font-family": "Roboto",
                                                        "font-style": "normal",
                                                        "font-weight": "500",
                                                        "font-size": "28px",
                                                        "line-height": "33px",
                                                        /* identical to box height */

                                                        "letter-spacing": "0.25px",

                                                        "color": "#000000"
                                                    }}>
                                                        Коробейникова Екатерина
                                                    </div>
                                                </td>
                                                <td></td>
                                                <td>
                                                    <button className="btn btn-sm float-right">
                                                        <div className="edit">ред.</div>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div style={{
                                                        "font-family": "Roboto",
                                                        "font-style": "normal",
                                                        "font-weight": "normal",
                                                        "font-size": "20px",
                                                        "line-height": "23px",
                                                        "letter-spacing": "0.25px",

                                                        "color": "#000000"
                                                    }}>
                                                        20 лет
                                                    </div>
                                                </td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td className="column1">Родная страна</td>
                                                <td className="column2">Родная страна</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td className="column1">Родной город</td>
                                                <td className="column2">Родной город</td>
                                                <td>
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
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <Table isHidden={isBoxBottomHidden}>
                                        <tbody>
                                            <tr>
                                                <td className="column1">Дата рождения</td>
                                                <td className="column2">Дата рождения</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td className="column1">Университет</td>
                                                <td className="column2">Университет</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td className="column1">Специальность</td>
                                                <td className="column2">Специальность</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td className="column1">Разговорные языки</td>
                                                <td className="column2">Разговорные языки</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td className="column1">Вредные привычки</td>
                                                <td className="column2">Вредные привычки</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td className="column1">Телефон</td>
                                                <td className="column2">Телефон</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td className="column1">О себе</td>
                                                <td className="column2">О себе</td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </span>
                                </div>
                            </div>
                        </Container>
                    </article>
                </div>
            </div>
        );
    }
}

export default withHelpersModifiers(ProfileBlock);