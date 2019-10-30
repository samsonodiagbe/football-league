import React, { Component } from "react";
import Fixture from "./objects/fixture";
import Team from "./objects/team";

class Football extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const fixture1 = new Fixture(
            new Team("Man U", "", "Old Trafford"),
            new Team("Man city", "", "Ethihad")
        );
        console.log(fixture1.home_ground);
        return null;
    }
}

export default Football;
