import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
const Search = ({searchHandler})=>{

    const [search,setsearch] = useState('');

    useEffect(()=>{
        searchHandler(search);
    },[search]);

    return(
        <div>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Search Country</Form.Label>
                <Form.Control type="text" placeholder="EX. Bangladesh" onChange={(e)=>setsearch(e.target.value)}/>
            </Form.Group>
        </div>

    )
}

export default Search;