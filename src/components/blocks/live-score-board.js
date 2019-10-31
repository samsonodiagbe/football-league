import React, { Component } from "react";
import Game from "./Game";

class LiveScore extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { matches } = this.props;
        const drawLiveBoard = matches.map((match, index) => {
            return <Game home_team={match.home_team} away_team={match.away_team} key={index} />;
        });
        return (
            <div className='live-score-board'>
                <h3>Live</h3>
                {drawLiveBoard}
            </div>
        );
    }
}

export default LiveScore;
