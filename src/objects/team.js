class Team {
    constructor(name, emblem, home_ground) {
        this.name = name;
        this.emblem = emblem;
        this.home_ground = home_ground;
        this.data = {
            played: 0,
            win: 0,
            draw: 0,
            lose: 0,
            goal_done: 0,
            goal_against: 0,
            goal_for: 0,
            points: 0
        };
    }

    getName() {
        return this._name;
    }

    getEmblem() {
        return this._emblem;
    }

    getHomeGround() {
        return this._home_ground;
    }

    getTeamData() {
        return this._data;
    }
}

export default Team;
