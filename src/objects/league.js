import _ from "lodash";

class League {
    constructor(fixtures, teams) {
        this.fixtures = fixtures;
        this.teams = _.sortBy(teams, (team) => team.name);
        this.matchDay = 1;
    }

    getStandings() {
        return this.teams;
    }
    updateStandings() {
        console.log(this.teams);
    }

    getFixtures(week) {
        return this.fixtures[week];
    }

    getNextFixtures(week) {
        return this.fixtures[week + 1];
    }
}

export default League;
