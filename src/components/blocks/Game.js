import React, { Component } from "react";

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            probability: [1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
            home_score: 0,
            away_score: 0,
            game_count: 1
        };

        this.playGame();
    }

    playGame() {
        return (this.gameplay = setInterval(() => {
            const { home_score, away_score, game_count } = this.state;
            if (game_count > 6) {
                clearInterval(this.gameplay);
                // update team data
            } else {
                let rand = Math.floor(Math.random() * 2) + 1;
                if (rand === 1) {
                    this.setState({
                        home_score: home_score + 1
                    });
                } else if (rand === 2) {
                    this.setState({
                        away_score: away_score + 1
                    });
                }
            }
            this.setState({
                game_count: game_count + 1
            });
        }, 10000));
    }

    componentDidMount() {
        // start the game
        // this.playGame();
    }
    render() {
        const { home_team, away_team } = this.props;
        const { home_score, away_score } = this.state;
        return (
            <div className='match'>
                <div>
                    {home_team.name}
                    <span>{home_score}</span>
                </div>{" "}
                -
                <div>
                    <span>{away_score}</span>
                    {away_team.name}
                </div>
            </div>
        );
    }
}

export default Game;
