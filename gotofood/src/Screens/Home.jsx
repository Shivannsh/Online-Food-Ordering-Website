import React from 'react'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
import Footer from '../Components/Footer'
import Carousel from '../Components/Carousel'

export default function Home() {
    return (
        <>
            <div >
                <Navbar />
            </div>
           <div><Carousel/></div>
           <div className='d-flex flex-wrap'> <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div> 
            <Footer/>
        </>
    )
}
