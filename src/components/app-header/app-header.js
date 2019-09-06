import React, {useState} from 'react';
import {
    Container,
    Breadcrumb,
    BreadcrumbItem,
    Navbar,
    NavbarItem,
    Icon,
    NavbarBurger,
    NavbarBrand,
    NavbarMenu,
    NavbarStart,
    Image,
    NavbarLink,
    NavbarDivider,
    NavbarDropdown,
    NavbarEnd,
    Field,
    Control,
    Button
} from "bloomer"
import "./app-header.css"
import {Link} from "react-router-dom";

const AppHeader = () => {

    const [isActive, setIsActive] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(true)

    return (
        <Navbar>
            <Container>
                <NavbarBrand>
                    <NavbarItem>
                        <Link to="/">
                            <div className={"logo"}>Roomie</div>
                        </Link>
                    </NavbarItem>
                    <NavbarBurger isActive={isActive} onClick={() => setIsActive(!isActive)}/>
                </NavbarBrand>
                <NavbarMenu isActive={isActive} onClick={() => setIsActive(false)}>
                    <NavbarStart>
                        <NavbarItem>
                            <Link to='/'>Главная</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link to='/'>О проекте</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link to='/faq'>Часто задаваемые вопросы</Link>
                        </NavbarItem>
                    </NavbarStart>
                    {!isAuthorized &&
                    <NavbarEnd>
                        <NavbarItem>
                            <Link to="/login" onClick={() => setIsAuthorized(!isAuthorized)}>Вход</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link to="/register">Регистрация</Link>
                        </NavbarItem>
                    </NavbarEnd>
                    }
                    {isAuthorized &&
                    <NavbarEnd>
                        <NavbarItem>
                            <figure className="image is-32x32 avatar">
                                <img className=" is-rounded" src="/img/01.png"
                                     alt="Image"/>
                            </figure>
                            <Link to="/profile">
                                <div>Камила К.</div>
                            </Link>

                        </NavbarItem>
                        <NavbarItem>
                            <Link to="/logoff" onClick={() => setIsAuthorized(false)}>
                                <Icon className="fa fa-sign-out fa-lg"/>
                            </Link>
                        </NavbarItem>

                    </NavbarEnd>
                    }

                </NavbarMenu>
            </Container>
        </Navbar>
    );
};

export default AppHeader;