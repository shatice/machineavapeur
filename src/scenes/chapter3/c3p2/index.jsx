import React from "react";

import bg from "../../../assets/radio_bg.jpg";
import people from "../../../assets/manhattan_project_people.png"

import Embleme from "../../../components/Embleme";
import Arm from "../../../components/Arm";

const Chapter3Part2 = () => {
    return (<>
        <div className="container-c3p2">
            <img src={bg} alt="" className="bg" />
            <img src={people} alt="" className="people" />
            <Embleme />
            <Arm />
        </div>
    </>
    );
};

export default Chapter3Part2;
