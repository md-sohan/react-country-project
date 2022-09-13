import React, { useContext } from "react";
import { TeamContext } from "./TeamContext";
import { Link, useNavigate } from "react-router-dom";

const TeamContext3 = () =>{

    const user = useContext(TeamContext);

    const nav = useNavigate();

    return(
        <div>
                <h1>User name : {user.name}</h1>
                <h1>User age : {user.age}</h1>
                <h1>User address : {user.address}</h1>

                <Link to={`/users/${user.age}`}>{user.name}</Link>


                <button className="btn btn-sm btn-info" onClick={()=>nav("/")}>Back to Home</button>
        </div>
    )
}

export default TeamContext3;