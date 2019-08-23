import React from 'react';

import './app-footer.css';
import {Column, Columns} from "bloomer";

const AppFooter = () => {
    return (
        <div>
            <div className='footer'>
                <Columns className='container'>
                    <Column isSize={'1/3'} style={{
                        "font-family": "Open Sans",
                        "font-style": "normal",
                        "font-weight": "600",
                        "font-size": "36px",
                        "line-height": "49px",
                        /* identical to box height */

                        "letter-spacing": "0.25px",

                        "color": "#FFFFFF"

                    }}>Roomie</Column>
                    <Column className="footer-column">
                        <div className="column-title" style={{
                            "font-family": "Roboto",
                            "font-style": "normal",
                            "font-weight": "bold",
                            "font-size": "14px",
                            "line-height": "21px",
                            /* identical to box height, or 150% */


                            "color": "#FFFFFF"
                        }}>Документы</div>
                        <div className="column-text" style={{
                            "font-family": "Roboto",
                            "font-style": "normal",
                            "font-weight": "normal",
                            "font-size": "14px",
                            "line-height": "21px",
                            /* identical to box height, or 150% */


                            "color": "#FFFFFF"
                        }}>
                            Условия пользования
                            Политика конфиденциальности
                        </div>
                    </Column>
                    <Column className="footer-column">
                        <div className="column-title" style={{
                            "font-family": "Roboto",
                            "font-style": "normal",
                            "font-weight": "bold",
                            "font-size": "14px",
                            "line-height": "21px",
                            /* identical to box height, or 150% */


                            "color": "#FFFFFF"
                        }}>Контакты</div>
                        <div className="column-text" style={{
                            "font-family": "Roboto",
                            "font-style": "normal",
                            "font-weight": "normal",
                            "font-size": "14px",
                            "line-height": "21px",
                            /* identical to box height, or 150% */


                            "color": "#FFFFFF"
                        }}>
                            8 (705) 911 62 79
                            kate.korobeinikova@gmail.com
                        </div>
                    </Column>
                    <Column className="footer-column">
                        <div className="column-title" style={{
                            "font-family": "Roboto",
                            "font-style": "normal",
                            "font-weight": "bold",
                            "font-size": "14px",
                            "line-height": "21px",
                            /* identical to box height, or 150% */


                            "color": "#FFFFFF"
                        }}>Мы в социальных сетях</div>
                        <div className="column-text" style={{
                            "font-family": "Roboto",
                            "font-style": "normal",
                            "font-weight": "normal",
                            "font-size": "14px",
                            "line-height": "21px",
                            /* identical to box height, or 150% */


                            "color": "#FFFFFF"
                        }}>
                            <p>Facebook</p>
                            <p>Instagram</p>
                        </div>
                    </Column>
                </Columns>
            </div>
            <div className='footer-footer'>
                <div className='container'>
                    Roomie (c) 2019 All right
                </div>
            </div>
        </div>
    );
};

export default AppFooter;