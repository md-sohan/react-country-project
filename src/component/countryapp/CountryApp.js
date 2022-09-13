import React, { useEffect, useState } from "react";
import Countrys from "./Countrys";

import Search from "./Search";

const url = "https://restcountries.com/v3.1/all";
const CountryApp = () =>{
    const [isloading,setisloading] = useState(true);
    const [error,seterror] = useState(null);
    const [country,setcountry] = useState([]);



    const CountryRemove = (name) =>{
  
      let updatecountry = country.filter((con)=>{
            return con.name.common !== name;
       });
       console.log(updatecountry)
       setcountry(updatecountry);
    }

    const fetchcountry = async (url) =>{
        setisloading(true);
        try{
            const response = await fetch(url);
            const data = await response.json();
            setcountry(data);
            setisloading(false);
            seterror(null);
        }catch(error){
            seterror(error);
            setisloading(false);
        }
       
       
    }


    const searchHandler = name =>{
       let searchname = name.toLowerCase();
      

        if(searchname != ""){
            let newcountry = country.filter((con)=>{
                return con.name.common.toLowerCase().startsWith(searchname);
            });
            setcountry(newcountry)

        }
      

    }

    useEffect(()=>{
        fetchcountry(url);
    },[]);


    


    return(
        <>
            <h1 className="text-center">Country Application</h1>
            <Search searchHandler={searchHandler}/>
            {isloading && <h2>Loading...</h2>}
            {error && <h3>{error.message}</h3>}
            {country && <Countrys country={country} CountryRemove={CountryRemove}/>}

        </>
    );
}

export default CountryApp;