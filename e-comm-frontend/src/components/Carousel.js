import React from "react";

import { Card } from "./Card";
import './Carousel.css'

const DUMMY_CARDS = [{
    title:'Everyday value offer',
    imageUrl: 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/April/BVD/HERO/Unrec/PC_Hero_3000x1200_3_2x._CB592081458_.jpg',
    description: 'dummy description'
},
{
    title:'Everyday value offer',
    imageUrl: 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/April_2023/BVD/UNREC/Shoes/shoes_3000._CB591742334_.jpg',
    description: 'dummy description'
},
{
    title:'Everyday value offer',
    imageUrl: 'https://m.media-amazon.com/images/I/51ovs76vmtL._SX3000_.jpg',
    description: 'dummy description'
},
{
    title:'Everyday value offer',
    imageUrl: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/PC_Hero_2x-toys._CB591544420_.jpg',
    description: 'dummy description'
},
{
    title:'Everyday value offer',
    imageUrl: 'https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/Push/3000x1200_Hunter_V7._CB592913261_.jpg',
    description: 'dummy description'
}]
function Carousel(){

    let box = document.querySelector('.carousel-container')
    
    const prevCardHandler = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
    }

    const nextCardHandler = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
    }

    return (
        <div className="carousel">
            <button className="pre-btn" onClick = {prevCardHandler}><p>&lt;</p></button>
            <button className="next-btn" onClick={nextCardHandler}><p>&gt;</p></button>

            <div className="carousel-container">
                {DUMMY_CARDS.map(card => <Card title = {card.title} imageUrl = {card.imageUrl} description = {card.description}></Card>)}
               

            </div>
        </div>
    )
        
    
}

export default Carousel;