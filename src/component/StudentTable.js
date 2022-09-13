import React from 'react';
import Table from 'react-bootstrap/Table';
const StudentTable = ({users,DeleteEvent,EditEvent})=>{

    // const[userdata,setUserdata] = useState(users);

    const DeleteRow = (id)=>{
        DeleteEvent(id);
    }

    const EditRow = (id)=>{
        EditEvent(id);
    }


    const mapdata = users.map((user,i)=>{
       
        return(
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.address}</td>
                    <td><button className='btn btn-sm btn-danger' onClick={()=>DeleteRow(user.id)}>Delete</button> | <button className='btn btn-sm btn-info' onClick={()=>EditRow(user.id)}>Edit</button></td>
                </tr>

        );
    });

    return(
        <>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {mapdata}
            </tbody>
            </Table>
        </>

    );
}
export default StudentTable;