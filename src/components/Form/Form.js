import { Component } from "react";
import Inputs from "./Inputs";


class Form extends Component {
    constructor(props) {
        super(props);

        // set the state for both input boxes to be empty at first
        this.state = {
            player1: "",
            player2: "",
            winningScore: 21,
            alternate: 5,
        };

        this.handlePlayer1 = this.handlePlayer1.bind(this);
        this.handlePlayer2 = this.handlePlayer2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); // for submit button
        this.handleScore = this.handleScore.bind(this); // for score button
        this.handleAlternate = this.handleAlternate.bind(this); // for alternate button
    }

    handlePlayer1 = (e) => {
        this.setState({ player1: e.currentTarget.value });
    }

    handlePlayer2 = (e) => {
        this.setState({ player2: e.currentTarget.value });
    }

    handleScore = (e) => {
        this.setState({ winningScore: e.currentTarget.value });
    }

    handleAlternate = (e) => {
        this.setState({ alternate: e.currentTarget.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmit({ ...this.state });
    }

    render() {
        let { player1, player2, winningScore, alternate } = this.state;
        return (
            // the className is changed (making the input field styling change) depending on whether the valid state is true or not
            // handleChange is triggered by an event, and sets the state of password or confirm to be the value of the event's current target
            <form onSubmit={this.handleSubmit} className="form-group">
                <Inputs
                    type="text"
                    label="Player 1 Name"
                    value={player1}
                    handleChange={this.handlePlayer1}
                />
                <Inputs
                    type="text"
                    label="Player 2 Name"
                    value={player2}
                    handleChange={this.handlePlayer2}
                />

                <Inputs
                    type="number"
                    label="Winning Score"
                    value={winningScore}
                    handleChange={this.handleScore}
                />

                <Inputs
                    type="number"
                    label="Alternate Every"
                    value={alternate}
                    handleChange={this.handleAlternate}
                />

                <button class="btn btn-warning" type="button">Submit</button>
            </form>
        );
    }
}

export default Form;