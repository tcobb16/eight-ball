import React from "react";
import './EightBall.css';

interface EightBallProps {
    readonly msg: string;
    readonly color: string;
}

export class EightBall extends React.Component<{}, EightBallProps> {
    private static possibilities: Array<EightBallProps> = [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" }
    ];

    constructor(props: any) {
        super(props);
        this.state = { msg: "Think of a Question", color: "black" };
        this.handleClick = this.handleClick.bind(this);
    }

    private choice(): EightBallProps {
        const randomIdx = Math.floor(Math.random() * EightBall.possibilities.length);
        return EightBall.possibilities[randomIdx];
    }

    private handleClick() {
        this.setState(this.choice());
    }
      

    render() {
        return (
            <div className='Eight-Ball' onClick={this.handleClick} style={{backgroundColor: this.state.color}}>
                <p>{this.state.msg}</p>
            </div>
        );
    }
}