import React, { useState } from 'react'
import { AiOutlineDown } from "react-icons/ai";
import CommanNav from '../SelectDropDwon/Commannav/CommanNav';
import '../Navigation/Navigation.css'
import { IoIosCloseCircle } from "react-icons/io";
import Logo from '../../Assets/Images/logo.svg'
import '../../Others/MediaQuery/Mediaquery.css'
// import './Others/MediaQuery/'
const Navigation = (props) => {
  const [isClose,setisClose]=useState(true)
  const pageMenu=[
    {name:"Page",url:"/Page"}
  ]
  const handleClose=()=>{
   setisClose(!isClose)
   console.log(isClose)
  }
  return (
    <div className="Custcontainer">
      {/* className={isClose || props.data ?'navlist':'navlist'} */}
      <nav className='navlist'>
       <div>
       <div className='d-flex justify-content-between d-lg-none '>
              <div className="col-sm-2 rensologo">
                <img src={Logo} alt="Loding..." srcset="" />
              </div>
              <div className="respoIcon">
                <IoIosCloseCircle className='closeIcon' onClick={handleClose}/>
              </div>
            </div>
        <ul>
        <li className=''>Deals </li>
              <li className='DropDown'>Home <span className='Icon'><AiOutlineDown className='DropIcon'/></span>
                <div className='DropDownList'>
                <CommanNav  data={pageMenu}/>
                </div>
              </li>
              <li className=''>About </li>
              <li className='DropDown'>Shop <span className='Icon'><AiOutlineDown className='DropIcon'/></span>
              <div className='DropDownList'>
                <CommanNav  data={pageMenu}/>
                </div>
              </li>
              <li className=''>Vendors </li>
              <li className=''>Mega menu</li>
              <li className=''>Blog </li>
              <li className='DropDown'>Pages <span className='Icon'><AiOutlineDown/></span>
              </li>
        </ul>
       </div>
      </nav>
    </div>
  )
}

export default Navigation