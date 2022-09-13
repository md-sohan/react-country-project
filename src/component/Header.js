import React from "react"


const Header = ({name,age})=>{

    return(
        <>
            <div style={mystyle.wrapper}>
                <h3 style={mystyle.header}>Name : {name}</h3>
                <p style={mystyle.subtitle}>Age : {age}</p>
            </div>
        </>
    )
}
const mystyle = {
    wrapper:{
        margin:'auto',
        width:'50%',
        height:'auto',
        boxShadow:'1px 0.5px 2px 0px',
        background:'rgb(8 156 163 / 75%)',
        padding:'10px',
        marginBottom:'10px',
        
    },
    header:{

        textAlign:'center'
    },
    subtitle:{
        textAlign:'center'
    }
}
export default Header