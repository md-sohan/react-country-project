import React, { useState } from "react";
import Component2 from "./Component2";

import { userContext } from "./UserContext";

const Component1 = () =>{

    const [user] = useState({id:1,name:'Md Hasanur Rahman',age:25,address:'dhaka, Bangladesh.'});

    return(
        <userContext.Provider value={user}>
            <Component2/>
        </userContext.Provider>
    )
}

export default Component1;