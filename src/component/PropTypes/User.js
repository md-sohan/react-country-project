import React from "react";
import PropTypes from 'prop-types'

const User = ({user}) =>{
    const {name,age} = user;
    return(
            <div>
                <div>Name : {name}</div>
                <div>age:{age}</div>
            </div>
    )
}

User.propTypes = {
    name : PropTypes.string,
    age:PropTypes.number
}
export default User;