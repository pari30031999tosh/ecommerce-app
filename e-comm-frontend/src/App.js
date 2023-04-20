import './App.css';
import React from 'react';
import { useState } from 'react';
//commentsnnnnnnnnnnnnnnnnn bbbbbbbbbbbbbbbbb
import { Route, BrowserRouter as Router, Routes, Redirect, Navigate } from 'react-router-dom'
import MainNavigation from './components/MainNavigation';
import Products from './components/Products';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import Home from './components/Home'
import Login from './components/Login'
import Orders from './components/Orders'
import Address from './components/Cart';
import Signup from './components/Signup';
import Sidebar from './components/Sidebar';
import Backdrop from './components/Backdrop';
import Footer from './components/Footer';
import SignInHoverModal from './components/SignInHoverModal';

function App() {
  
  //in v6 of react-router-dom switch is replaced by routes
  //and below syntax is followed for route
  const [sidebar, setSideBar] = useState(false);
  const [accountModal, setaccountModal] = useState(false);
  

  const togglesidebar = () => {
    setSideBar((prevstate) => !prevstate);
    console.log("sidebar state", sidebar)
  }

  const toggleaccountDetail = () => {
    setaccountModal((prevState) => !prevState)
    console.log(accountModal);
  }

  return (
      <>
        
        <Router> 
            <Routes>
              <Route path = "/" exact element={<MainNavigation opensidebar = {togglesidebar} openaccountmodal = {toggleaccountDetail}/>}/>
              <Route path = "/products" exact element={<Products />}/>
              <Route path = "/checkout" exact element={<Checkout />}/>
              <Route path = "/login" exact element={<Login />}/>
              <Route path = "/address" exact element={<Address />}/>
              <Route path = "/cart" exact element={<Cart/>}/>
              <Route path = "/orders" exact element={<Orders />}/>
              <Route path = "/Home" exact element={<Home opensidebar = {togglesidebar} openaccountmodal = {toggleaccountDetail}/>}/>
              <Route path = "/signup" exact element={<Signup />}/>
              
            </Routes>
            <SignInHoverModal accountModal = {accountModal} openaccountmodal = {toggleaccountDetail} ></SignInHoverModal>
            
        </Router>
        
        <Sidebar sidebar = {sidebar}></Sidebar>
        <Backdrop sidebar = {sidebar} accountModal = {accountModal} openaccountmodal = {toggleaccountDetail} closesidebar = {togglesidebar}></Backdrop>
        <Footer/>
      </>
  )

      
      
     
  
}

export default App;
