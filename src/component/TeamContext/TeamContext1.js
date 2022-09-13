import React, { useState } from "react";
import { TeamContext } from "./TeamContext";
import TeamContext2 from "./TeamContext2";


const TeamContext1 = () =>{

const [user] = useState({name: 'sohan',age:25,address:'dhaka,bangladesh.'});


    return(
        <TeamContext.Provider value={user}>
            <TeamContext2/>
        </TeamContext.Provider>
    )
}

export default TeamContext1;