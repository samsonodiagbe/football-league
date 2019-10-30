class Fixture {
    constructor(home_team, away_team) {
        this.home_team = home_team;
        this.away_team = away_team;
        this.home_ground = this.home_team._home_ground;
    }
}

export default Fixture;
