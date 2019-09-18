import React from 'react'
import {Container} from "bloomer";
import FaqBlock from "../components/faq-block";

const FAQPage = ({questions}) => {

    return(
        <div className="page">
            <Container>
                <h3 className="title2">Часто задаваемые вопросы</h3>
                {questions && <FaqBlock questions={questions}/>}
            </Container>
        </div>
    );
};

export default FAQPage;