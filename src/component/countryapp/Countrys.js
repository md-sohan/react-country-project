import React from "react";
import { v4 as uuidv4 } from 'uuid';
import Country from "./Country";

const Countrys = ({country,CountryRemove}) =>{



    const RemoveEvent = (name) =>{
        CountryRemove(name);
    }
      
    const conlist = country.map((con)=>{
            const coun = {con,id:uuidv4()}
            return <Country country={coun} key={coun.id} RemoveEvent={RemoveEvent}/>
    });

        return(
            <>
                <div className="row">
                    {conlist}
                </div>
                
            </>
        );
}
export default Countrys;