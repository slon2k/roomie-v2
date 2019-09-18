import React, {Component} from "react"
import "./faq-block-item.css"

export default class FaqBlockItem extends Component {

    state = { showAnswer: false }

    render() {
        const {item} = this.props;
        const {showAnswer} = this.state;
        return(
            <li key={item.id} className="faq-item">
                <div className="faq-item-question">
                    {item.question}
                    <div className={ showAnswer? "faq-item-control faq-item-control--open" : "faq-item-control"}
                         onClick={() => this.setState({showAnswer: !showAnswer})}>
                    </div>
                </div>
                {this.state.showAnswer && <div className="faq-item-answer">{item.answer}</div>}
            </li>
        )
    }
}
