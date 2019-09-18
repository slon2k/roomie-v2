import React from "react"
import "./faq-block.css"
import FaqBlockItem from "./faq-block-item";

const FaqBlock = ({questions}) => {
    return(
        <ul>
            {questions.map(item => <FaqBlockItem item={item}/>)}
        </ul>
    )
}

export default FaqBlock