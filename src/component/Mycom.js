import React, { useEffect, useState } from 'react'
import { Button,Form } from 'react-bootstrap';

let cartdata = [{name:'Hasanur Rahman',age:25}];
let userdata = {name:'',age:''}
export default function Mycom() {

    const [User,setUser] = useState(userdata);
    const {name,age}= User;
    const [getcart,setcart] = useState(cartdata);

    const HandleChage = (e) =>{
       setUser({...User,[e.target.name]:e.target.value});
    }

    // const setOnchangeName = (e)=>{  
    //         setname(e.target.value);
    // }

    const FormSubmit = (e)=>{
        e.preventDefault();
        setcart((cart)=>{
            return [...cart,{name,age}];
        }); 
        setUser(userdata);

    }

    const DeleteHandelar = (id) =>{
        let newdata = getcart.filter((item,i)=>{
            return i !== id;
        });

        setcart(newdata)

        console.log(newdata);
    }

    
  
  return (
    <>
        <Form onSubmit={FormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" name="name" value={name} onChange={HandleChage}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder="Age" name="age" value={age}  onChange={HandleChage}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        <br/>

        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {getcart.map((itm,i)=> {
                return (
                <tr key={i}>
                    <td>{itm.name}</td>
                    <td>{itm.age}</td>
                    <td><button onClick={()=>{DeleteHandelar(i)}}>Delete</button></td>
                </tr> 
                )
            })}
               
            </tbody>
            

           
        </table>
    </>
  )
}
