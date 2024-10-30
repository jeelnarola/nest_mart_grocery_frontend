import React, { useState } from 'react'
import '../Header/Header.css'
import Logo from '../../Assets/Images/logo.svg'

import CategoryDropDown from '../SelectDropDwon/Category/CategoryDropDown';
const Header = () => {
    const [catgories,setcatgories]=useState([
        'All Catgories',
        'Milks and Dairies',
        'Clothing & beauty',
        'Pet Foods & Toy',
        'Baking material',
        'Fresh Fruit',
        'Wines & Drinks',
        'Fresh Seafood',
        'Fast food',
        'Vegetables',
        'Bread and Juice',
        'Milks and Dairies',
        'Clothing & beauty',
        'Wines & Drinks',
        'Fresh Seafood'
      ])
    
      const [isOpenAccount,setisOpenAccount]=useState(false)
    //   const haendelCate=()=>{
    //    setisOpenAccount(!isOpenAccount)
    //    console.log(isOpenAccount)
    //   }
  return (
    <div>
        <header>
            <div className="container">
                <div className="row1">
                    <div className='col-sm-3'>
                        <div className="logo">
                            <img src={Logo} alt="" />
                        </div>   
                    </div>
                    <div className='col-sm-5'>
                       <div className='headerSearch d-flex align-items-center'>
                            <CategoryDropDown data={catgories}/>
                            <div className='inputCate'>
                                <input type="text" />
                            </div>
                       </div>  
                    </div>
                    <div className='col-sm-5'>
                        <div>
                            <h1> Functionlity</h1>
                        </div>   
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header
