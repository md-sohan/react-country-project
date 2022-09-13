
import React, { createRef } from 'react';

class UseRefCom extends React.Component{

    constructor(props){
        super(props)
        this.userNameref = createRef();
        this.state = {}
    }

          
     HandleClick = (e) =>{
        e.preventDefault();
       alert(this.userNameref.current.value);
    //    console.log(this.userNameref.current.value);
    }   


    render(){

  

        return (
            <>
                <h1 className='text-center'>Use Refference</h1>

                <form onSubmit={this.HandleClick}>  
                    Name : <input type="text" ref={this.userNameref}/>
                    <button className="btn btn-info" type='submit'>Submit</button>
                </form>
            </>
        )
    }

}

export default UseRefCom;