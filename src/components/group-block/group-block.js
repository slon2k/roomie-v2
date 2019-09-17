import React from 'react'
import {Box, Image, Content, Icon, Columns, Column, Notification, Button, Control} from "bloomer";
import {Link} from 'react-router-dom';
import "./group-block.css";
import Avatar from "../avatar";
import user2 from "./../../images/user2.png"
import user3 from "./../../images/user3.png"
import user4 from "./../../images/user4.png"


const boxStyle = {
    background: "#FFFFFF",
    boxShadow: "0px 0px 48px rgba(0, 0, 0, 0.05)",
    borderRadius: "8px",
    width: "352px",
    padding: "36px 24px"
}

const buttonStyle = {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "18px",
    color: "#0019FF"
}

const membersList = () => {
    return(
        <div className="group-block-members">
            <Avatar size={64} image={user2}/>
            <Avatar size={64} image={user3}/>
            <Avatar size={64} image={user4}/>
        </div>
    )
}


const GroupBlock = ({type, isClick, group}) => {
    const {id, name, city, rentalPeriod, peopleNumber, free, groupInfo} = group;
    return (
        <div>
            <Box style={boxStyle} className="group-block">
                <header className="group-block-header">
                    <h3 className="group-block-title">Студенты-физики</h3>
                    <span className="group-block-city">Алматы</span>
                    <Link to="/group">
                        <div className="arrow-right"></div>
                    </Link>
                </header>
                <div className="group-block-about">
                    <p>“Привет! Мы ищем таких же увлеченных физикой студентов!</p>
                </div>
                { membersList() }

                <footer className="group-block-controls">
                    <Button disabled>Заявка подана</Button>
                    <Button style={buttonStyle}>Отменить</Button>
                </footer>


            </Box>

        </div>

    );
};

export default GroupBlock;
