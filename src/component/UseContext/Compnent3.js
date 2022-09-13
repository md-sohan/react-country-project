import React, { useContext } from "react";
import { userContext } from "./UserContext";

const Component3= () =>{

    const user = useContext(userContext);
    
    return(
        <div>
            <h2>Name : {user.name}</h2>
            <h2>Age : {user.age}</h2>
            <h2>Address : {user.address}</h2>
        </div>
    );
}

export default Component3;