import React from 'react';


function AddProduct(){
    return(
        <form id="add-product-form" style={{margin:"100px"}}>
            <label>Name: </label>
            <input type="text" placeHolder="Enter Product Name"></input>

            <label>Type: </label>
            <input type="text" placeHolder="Enter Product Type"></input>

            <label>Image: </label>
            <input type="text" placeHolder="Enter Product Image"></input>

            <label>Price: </label>
            <input type="text" placeHolder="Enter Product Price"></input>

            <label>Color: </label>
            <input type="text" placeHolder="Enter Product Color"></input>

            <label>Inventory: </label>
            <input type="text" placeHolder="Enter Product Inventory"></input>

            <label>Description: </label>
            <input type="text" placeHolder="Enter Product Description"></input>

            <input type="submit" value="Submit New Product"></input>
        </form>
    )

}
export default AddProduct