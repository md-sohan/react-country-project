import React, { useState } from "react";
import { useParams } from "react-router-dom";
import User from "./User";
const Users = ({name}) =>{

    let params = useParams();
    

    const [user] = useState({name:'sohan',age:"dskfjds"});
    return(
        <div>
            <User user={user} />
            {params.id} <br></br>
            {name}
        </div>
    ) ;
}
export default Users;