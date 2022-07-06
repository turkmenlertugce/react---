import React, { Component, useEffect } from 'react'

const Home = (props) => {
    
    console.log("qwe", props.user);
    if(props.user){
        return(
            <div>
                <h2>Hello {props.user[0].name} {props.user[0].surName} </h2>
                <p></p>
            </div>
        )
    }
    return (
        <h2> You are not logged in</h2>
    )
}

export default Home