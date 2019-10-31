import React, { Component } from "react";
import "./styles/football.css";
import teams from "./objects/teams";
import fixtures from "./objects/fixtures";
import League from "./objects/league";
import LiveScore from "./components/blocks/live-score-board";
import Standings from "./components/blocks/standings";

class Football extends Component {
    constructor(props) {
        super(props);
        this.state = {
            league: new League(fixtures, teams),
            matchday: 0
        };
    }

    componentDidMount() {}

    render() {
        const { league, matchday } = this.state;
        const standings = league.getStandings();
        return (
            <div className='football-league'>
                <LiveScore matches={league.getFixtures(matchday)} />
                <Standings standings={standings} />
            </div>
        );
    }
}

export default Football;
