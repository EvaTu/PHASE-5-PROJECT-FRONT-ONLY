import React from 'react'


function MyAccount({confirmOrder}){
    console.log("my account", confirmOrder)
    let today = new Date().toString().slice(0, 15)
    console.log(today)

    let productTotal = confirmOrder.reduce((accumulator,element) => (accumulator+= element.order*element.price),0)
    let taxFee = parseFloat(productTotal*0.08875).toFixed(2)
    let deliveryFee =  productTotal === 0.0 || productTotal>75? 0.0: 20.0
    let allTotal = (productTotal+parseFloat(taxFee)+deliveryFee).toFixed(2)

    return(
        <div>
            <h1>Please Log In to View Order History</h1>
            <p>Order Date: {today}</p>
            <p>Order Detail:</p>
            <div>
                {confirmOrder.map(item => 
                    (  
                    <ul>
                        <h4>{item.name}</h4>
                        <h5>${item.price}</h5>
                        <p>Order Qty: {item.order}</p>
                    </ul>
                    )
                )}
                <p>Order Total Amount: {allTotal}</p>
            </div>
        </div>
    )


}

export default MyAccount