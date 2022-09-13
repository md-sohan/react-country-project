import React, { useState } from "react";
// import { v4 as uuidv4 } from 'uuid';
import CountryApp from "./component/countryapp/CountryApp";
import Users from "./component/PropTypes/Users";
// import Component1 from "./component/UseContext/Component1";
// import UseRefCom from "./component/ref/UseRefCom";
// import UseFunCom from "./component/ref/UseFunCom";

import {Routes,Route,Link} from 'react-router-dom'
import TeamContext1 from "./component/TeamContext/TeamContext1";
import Crud from "./component/Crud";



// import Mycom from "./component/Mycom";

// import Crud from "./component/Crud";


function App() {

  const [number] = useState(Math.round(Math.random() * 400));

  // let myarr = [];
  // for(let i=0;i<Data.length;i++){
  //     myarr.push(<h1>Name : {Data[i].name} and Age : {Data[i].age}</h1>)
  // }

  return (
    <div style={styles.App} className="container">
        {/* <CountryApp/> */}
        {/* <Users/> */}
        {/* {Data.map((itm,i)=> <Header key={uuidv4()} name={itm.name} age={itm.age}/> )} */}
        {/* <Header name="Md Hasanur rahmand sohan"/> */}

        <nav>
            <ul>
              <Link to="/">Home</Link> {" | "}
              <Link to="/add-student">Student</Link>{" | "}
              <Link to={`/users/${number}`}>Users</Link>{" | "}
              <Link to="/team">Team</Link>
            
            </ul>
        </nav>

        <Routes>
            <Route exact path="/" element={<CountryApp/>}/>
            <Route  path="/add-student" element={<Crud/>}/>
            <Route  path="/team" element={<TeamContext1/>}/>
            <Route  path="/users/:id" element={<Users name={'md hasanur rahman sohan'}/>}/>
            
        </Routes>
    </div>
  );
}

const styles = {
  App:{
    margin: '20px auto',
    width:'1024px',
  }
}
export default App;
