import React from 'react';
import {Breadcrumb, BreadcrumbItem, Navbar, NavbarItem, Icon, onClickNav, NavbarBurger, NavbarBrand, brand, NavbarMenu, NavbarStart, NavbarLink, NavbarDivider, NavbarDropdown, NavbarEnd, Field, Control, Button} from "bloomer"

const AppHeader = () => {

    return (
        <Navbar style={{ border: 'solid 1px #00D1B2', margin: '0' }}>
            <NavbarBrand>
                Roomie
            </NavbarBrand>
            <NavbarMenu>
                <NavbarStart>
                    <NavbarItem href='./'>Главная</NavbarItem>
                    <NavbarItem href='./'>О проекте</NavbarItem>
                    <NavbarItem href='./faq'>Часто задаваемые вопросы</NavbarItem>
                </NavbarStart>
                <NavbarEnd>
                    <Breadcrumb>
                        <ul>
                            <BreadcrumbItem><a href='./login'>Вход</a></BreadcrumbItem>
                            <BreadcrumbItem><a href='./register'>Регистрация</a></BreadcrumbItem>
                        </ul>
                    </Breadcrumb>
                </NavbarEnd>
            </NavbarMenu>
        </Navbar>
    );
};

export default AppHeader;