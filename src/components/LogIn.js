import React from 'react';

function LogIn(){

    return(
        <>
        <h1>Log In Form Here</h1>
        <form>
            <label>Email: </label>
            <input type="text" placeHolder="Email"></input>
            <label>Password: </label>
            <input type="password" placeHolder="Password"></input>
            <input type="submit" value="Submit"/>
        </form>
        <h3>Welcome Back</h3>
        </>
    )
}

export default LogIn