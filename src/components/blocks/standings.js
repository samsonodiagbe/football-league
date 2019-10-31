import React from "react";
import _ from "lodash";
function Standings({ standings }) {
    let drawStandings = _.map(standings, (stand, index) => {
        const { name, data } = stand;
        const { played, win, draw, lose, goal_done, goal_against, goal_for, points } = data || {};
        return (
            <div className='stand' key={index}>
                <span className='name'>{name}</span>
                <span>{played}</span>
                <span>{win}</span>
                <span>{draw}</span>
                <span>{lose}</span>
                <span>{points}</span>
                <span>{goal_for}</span>
                <span>{goal_against}</span>
                <span>{goal_done}</span>
            </div>
        );
    });
    return (
        <div className='standings'>
            <h3>Standings</h3>
            {drawStandings}
        </div>
    );
}

export default Standings;
