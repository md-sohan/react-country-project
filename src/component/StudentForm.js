import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const form = {name:'',phone:'',address:''}

const StudentForm = ({CartData,edituser})=>{

    const [user,setuser] = useState(form);

  
    const onChangeHandeller = (e) =>{
        if(edituser != null){
            setuser({...user,edituser});
        }else{
            const {name,value} = e.target;
            setuser({...user,[name]:value});
        }
       

    }

    const FormSubmit = (e)=>{
        e.preventDefault();
        const {name,phone,address} = user;
        if(!name){
            alert("Please Enter A Name");
            return;
        }else if(!phone){
            alert("Please Enter Phone");
            return;
        }
        else if(!address){
            alert("Please Enter Address");
            return;
        }else{
            CartData(user);
            setuser(form);
        }
    }

    return(
        <>
            <Form onSubmit={FormSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" name="name" value={user.name} onChange={onChangeHandeller}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Phone Number" name="phone" value={edituser != null?edituser.phone:user.phone}onChange={onChangeHandeller} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control as="textarea" rows={3} name="address" value={edituser != null?edituser.address:user.address} onChange={onChangeHandeller} />
            </Form.Group>
            <Button variant="success" type="submit">
                {edituser != null?'Update':'Save'}
            </Button>
            </Form>
        </>

    );
}
export default StudentForm;