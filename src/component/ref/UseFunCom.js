import React, { useRef } from 'react'

const UseFunCom = () =>{

    const UserName = useRef(null);

    const HandleSubmit = (e) =>{
        e.preventDefault();
            console.log(UserName.current.value)
            alert(UserName.current.value)
    }

    return(
        <>
            <h2 style={{marginBottom:'1px solid #ddd'}}>Use Functional Component</h2>
            <form onSubmit={HandleSubmit}>
                    Name : <input type="text" ref={UserName}/>
                    <button type='submit' className='btn btn-sm btn-success'>Submit</button>
            </form>
        </>
    );
}

export default UseFunCom;