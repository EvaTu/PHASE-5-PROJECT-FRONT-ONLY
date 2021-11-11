import './App.css';
import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import { Switch, Route} from 'react-router-dom'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import ShoppingCart from './components/ShoppingCart'
import ProductList from './components/ProductList'
import Home from './components/Home'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import ProductDetail from './components/ProductDetail'
import AddProduct from './components/AddProduct'
import MyAccount from './components/MyAccount'

function App() {
  const [products, setProducts] = useState([])
  const [detailForm, setDetailForm] = useState([])
  const [confirmOrder, setConfirmOrder] = useState([])

  

  useEffect(()=>{
    fetch("http://localhost:3000/products")
    .then(resp => resp.json())
    .then(data => setProducts(data))
  },[])


  function handelShoppingSub(event,selectNum,clickedPro){
    event.preventDefault()
    let orderInfo = {...clickedPro, order: selectNum}
    setDetailForm([...detailForm, orderInfo])
  }

  

  function onDelete(id){
    const updatedShopCart = detailForm.flat().filter(item=>(item.id !== id ))
    setDetailForm(updatedShopCart)
  }
  

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/AddProduct">
          <AddProduct />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/LogIn">
          <LogIn />
        </Route>
        <Route path="/MyAccount">
          <MyAccount confirmOrder={confirmOrder}/>
        </Route>
        <Route path="/ShoppingCart">
          <ShoppingCart detailForm={detailForm} onDelete={onDelete} setConfirmOrder={setConfirmOrder} confirmOrder={confirmOrder}/>
        </Route>
        <Route path="/ProductList/:id">
          <ProductDetail handelShoppingSub={handelShoppingSub}/>
        </Route>
        <Route path="/ProductList">
          <ProductList products={products}/>
        </Route>
        <Route path="/AboutUs">
          <AboutUs />
        </Route>
        <Route path="/ContactUs">
          <ContactUs />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
