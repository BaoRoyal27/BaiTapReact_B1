import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Item from './Item'
import Footer from './Footer'

const BaiTap1 = () => {
  return (
   <div>
    <Header/>
    <div className="container">
        <Banner/>
            <div className="row">
                <div className="col-md-3"><Item/></div>
                <div className="col-md-3"><Item/></div>
                <div className="col-md-3"><Item/></div>
                <div className="col-md-3"><Item/></div>
            </div>
    </div>
        <Footer/> 
   </div>
    
  )
}

export default BaiTap1