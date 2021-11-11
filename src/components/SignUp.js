import React from 'react';

function SignUp(){

    return(
        <>
        <h1>Sign Up Form Here</h1>
        <form>
            <label>First Name: </label>
            <input type="text" placeHolder="First Name"></input>
            <label>Last Name: </label>
            <input type="text" placeHolder="Last Name"></input>
            <label>Email: </label>
            <input type="text" placeHolder="Email"></input>
            <label>Password: </label>
            <input type="password" placeHolder="Password"></input>
            <label>Password Confirmation: </label>
            <input type="password" placeHolder="Password Confirmation"></input>
            <input type="submit" value="Submit"/>
        </form>
        <h3>Thanks For Joining Us</h3>
        </>
    )
}

export default SignUp