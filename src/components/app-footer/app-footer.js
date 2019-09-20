import React from 'react';

import './app-footer.css';
import {Column, Columns, Container} from "bloomer";

const AppFooter = () => {
    return (
        <div>
            <div className='footer'>
                <Container>
                    <Columns className='container'>
                        <Column>
                            <div className="logo">Roomie</div>
                        </Column>
                        <Column>
                            <div className="footer-title">
                                Документы
                            </div>
                            <div className="footer-text">
                                Условия пользования
                            </div>
                            <div className="footer-text">
                                Политика конфиденциальности
                            </div>
                        </Column>
                        <Column>
                            <div className="footer-title">Контакты</div>
                            <div className="footer-text" >
                                8 (705) 911 62 79
                            </div>
                            <div className="footer-text" >
                                kate.korobeinikova@gmail.com
                            </div>
                        </Column>
                        <Column>
                            <div className="footer-title">
                                Мы в социальных сетях
                            </div>
                            <div className="footer-text">
                                <p>Facebook</p>
                            </div>
                            <div className="footer-text">
                                <p>Instagram</p>
                            </div>
                        </Column>
                    </Columns>
                </Container>
            </div>
            <div className='footer-footer'>
                <Container>
                    Roomie (c) 2019 All right
                </Container>
            </div>
        </div>
    );
};

export default AppFooter;