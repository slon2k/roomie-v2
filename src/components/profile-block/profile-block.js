import React from 'react';
import {Columns, Column, Table, Icon, Container} from "bloomer";

import './profile-block.css';

const ProfileBlock = () => {
    return (
        <div>
            ProfileBlock
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-192x192">
                            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="Image"/>
                        </figure>
                    </div>
                    <Container>
                        <div>
                            <div>
                                <span className="d-flex">
                                    <Table isNarrow>
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
                                                <td className="column2">10000</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td className="column1">Родной город</td>
                                                <td className="column2">5000</td>
                                                <td>
                                                    <button className="btn btn-sm float-right">
                                                        <Icon
                                                            className="fa fa-chevron-down fa-lg"
                                                            style={{"color": "#0019FF"}}
                                                        />
                                                    </button>
                                                    <button className="btn btn-sm float-right">
                                                        <Icon
                                                            className="fa fa-chevron-up fa-lg"
                                                            style={{"color": "#0019FF"}}
                                                        />
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="column1">Дата рождения</td>
                                                <td className="column2">10000</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td className="column1">Университет</td>
                                                <td className="column2">5000</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td className="column1">Специальность</td>
                                                <td className="column2">5000</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td className="column1">Разговорные языки</td>
                                                <td className="column2">5000</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td className="column1">Вредные привычки</td>
                                                <td className="column2">5000</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td className="column1">Телефон</td>
                                                <td className="column2">5000</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td className="column1">О себе</td>
                                                <td className="column2">5000</td>
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
};

export default ProfileBlock;