import React from 'react';
import {Columns, Column, Table, Icon} from "bloomer";

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
                    <div className="media-content">
                        <div className="content">
                            <span style={{
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
                                <button className="btn btn-sm float-right">
                                    ред.
                                </button>
                            </span>
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
                            <div>
                                <span className="d-flex">
                                    <Table>
                                        <tbody>
                                            <tr>
                                                <td>Родная страна</td>
                                                <td>10000</td>
                                            </tr>
                                            <tr>
                                                <td>Родной город</td>
                                                <td>5000</td>
                                            </tr>
                                        </tbody>
                                    </Table>
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
                                </span>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>Дата рождения</td>
                                            <td>10000</td>
                                        </tr>
                                        <tr>
                                            <td>Университет</td>
                                            <td>5000</td>
                                        </tr>
                                        <tr>
                                            <td>Специальность</td>
                                            <td>5000</td>
                                        </tr>
                                        <tr>
                                            <td>Разговорные языки</td>
                                            <td>5000</td>
                                        </tr>
                                        <tr>
                                            <td>Вредные привычки</td>
                                            <td>5000</td>
                                        </tr>
                                        <tr>
                                            <td>Телефон</td>
                                            <td>5000</td>
                                        </tr>
                                        <tr>
                                            <td>О себе</td>
                                            <td>5000</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default ProfileBlock;