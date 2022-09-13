import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Country = ({country,RemoveEvent}) =>{
    
    const {name,capital,flags,population,area} = country.con;

    const RemoveItem = (name) =>{
        RemoveEvent(name);
    }



    return(
        <>
            <div className="col-md-3">
            <Card style={{ marginBottom: '10px', }}>
                <Card.Img variant="top" src={flags.svg} style={{height:'100px',width:'100%'}}/>
                <Card.Body>
                    <Card.Title>{name.common}</Card.Title>
                    <Card.Text>{capital}</Card.Text>
                    <Card.Text>{population}</Card.Text>
                    <Card.Text>{area}</Card.Text>
                    <Button variant="primary" onClick={()=>RemoveItem(name.common)}>Remove</Button>
                </Card.Body>
            </Card>
            </div>
        </>
    );
}


export default Country;