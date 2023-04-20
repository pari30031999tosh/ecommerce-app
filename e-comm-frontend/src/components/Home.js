import React from 'react'
import {v4} from 'uuid'

import Header from './Header'
import Carousel from './Carousel';
import ProductCard from './ProductCard';
import Navbar from './Navbar'

import './Home.css'

const DUMMY_PRODUCTS = [{
    title: 'goggles',
    price: '2.99 INR',
    imageUrl: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-372-232._SY232_CB636048992_.jpg',
},
{
    title: 'watches',
    price: '2.99 INR',
    imageUrl: 'https://m.media-amazon.com/images/I/51lM-Aap4CL._AC_SY200_.jpg'
},
{
    title: 'Mobiles',
    price: '2.99 INR',
    imageUrl: 'https://m.media-amazon.com/images/I/41kg-+XWoxL._AC_SY400_.jpg'
},{
    title: 'Bags',
    price: '2.99 INR',
    imageUrl: 'https://m.media-amazon.com/images/I/810s53kR8tL._AC_SY400_.jpg'
},{
    title: 'headphones',
    price: '2.99 INR',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SNd2tQupS._SX240_QL100_AC_SCLZZZZZZZ_.jpg'

}]

function Home({opensidebar, openaccountmodal}){

    return (
        <div>
            <Header openaccountmodal = {openaccountmodal}></Header>
            <Navbar opensidebar = {opensidebar}></Navbar>
            <Carousel></Carousel>
            <div className='product-card-container'>
                {DUMMY_PRODUCTS.map( p => <ProductCard title = {p.title} imageUrl = {p.imageUrl} price = {p.price}></ProductCard>)}
            </div>
            
        </div>
    )
}

export default Home;