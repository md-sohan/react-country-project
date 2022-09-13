import { useState } from "react";
import StudentForm from "./StudentForm";
import StudentTable from "./StudentTable";
import { v4 as uuidv4 } from 'uuid';


const Crud = () =>{

        const [users,setusers] = useState([]);

        const [edituser,setedituser] = useState(null);


        const CartData = (data)=>{
            // console.log(data)
            let newdata = {...data,id:uuidv4()};
            setusers([...users,newdata]);
           
            // setusers((predata)=>{
            //         return [...predata,{id:uuidv4(),data}];
            // });

        }

    const DeleteEvent = (id) =>{
        const getusers = users.filter((user)=>{
           return user.id !== id;
        });
        setusers(getusers)

    }

    const EditEvent = (id) =>{
        const getuser = users.filter((user)=>{
            return user.id === id;
        });
        setedituser(getuser[0]);
        
    }

    return(
        <>
            <h1 className="text-center">Student Information</h1><hr></hr>
            <div className="row">
                    <div className="col-md-6">
                        <StudentForm CartData={CartData} edituser={edituser}/>
                    </div>
                    <div className="col-md-6">
                        <StudentTable users={users} DeleteEvent={DeleteEvent} EditEvent={EditEvent}/>
                    </div>
                    
            </div>

        </>

    );
}

export default Crud;