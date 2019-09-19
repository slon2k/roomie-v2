import React from "react";
import "./promo-block.css";
import {Link} from "react-router-dom";

const PromoBlock = () => {
    return (
        <div className="promo-block">
            <h3 className="title3">Поиск сожителей стал гораздо проще</h3>
            <div className="promo-block-text">
                Roomie решает все проблемы с поиском и находит сожителей по вашим критериям!
            </div>
            <Link to="/" className="promo-block-button">
                Начать поиск
            </Link>
        </div>
    )
}

export default PromoBlock