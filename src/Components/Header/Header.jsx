import React, { useState } from "react";
import "../Header/Header.css";
import Logo from "../../Assets/Images/logo.svg";
import Compare from '../../Assets/Images/icon-compare.svg'
import heart from '../../Assets/Images//icon-heart.svg'
import cart from '../../Assets/Images/icon-cart.svg'
import user from '../../Assets/Images/icon-user.svg';
import CategoryDropDown from "../SelectDropDwon/Category/CategoryDropDown";
import { HiUsers } from "react-icons/hi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaGift } from "react-icons/fa";
import { BiHeart } from "react-icons/bi";
import { IoIosSettings,IoIosLogOut } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
const Header = () => {
  const [catgories, setcatgories] = useState([
    "All Catgories",
    "Milks and Dairies",
    "Clothing & beauty",
    "Pet Foods & Toy",
    "Baking material",
    "Fresh Fruit",
    "Wines & Drinks",
    "Fresh Seafood",
    "Fast food",
    "Vegetables",
    "Bread and Juice",
    "Milks and Dairies",
    "Clothing & beauty",
    "Wines & Drinks",
    "Fresh Seafood",
  ]);

  const [isOpenAccount, setisOpenAccount] = useState(false);
  //   const haendelCate=()=>{
  //    setisOpenAccount(!isOpenAccount)
  //    console.log(isOpenAccount)
  //   }
  const headelUser = () =>{
    setisOpenAccount(!isOpenAccount)
  }
  return (
    <div>
      <header>
        <div className="Custcontainer">
          <div className="row1  justify-content-cut">
          <div className="col-sm-3 menubox">
            <IoMenu className="menu"/>
          </div>
            <div className="col-sm-3">
              <div className="logo">
                <img src={Logo} alt="" />
              </div>
            </div>
            <div className="col-sm-5">
              <div className="headerSearch">
                <div className="d-flex align-item-center">
                <div>
                <CategoryDropDown data={catgories} />
                </div>
                <div className="inputCate">
                  <input type="text" placeholder="Search Item..." />
                </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <ul className="list list-inline mb-0 headerTabs">
                <li className="list-inline-item Compare">
                  <span>
                    <img src={Compare} alt="" />
                    <span className="badge bg-success">3</span>
                    <span className="listname">Compare</span>
                  </span>
                </li>
                <li className="list-inline-item Wishlist">
                  <span>
                    <img src={heart} alt="" />
                    <span className="badge bg-success">3</span>
                    <span className="listname">Wishlist</span>
                  </span>
                </li>
                <li className="list-inline-item Cart">
                  <span>
                    <img src={cart} alt="" />
                    <span className="badge bg-success">3</span>
                    <span className="listname">Cart</span>
                  </span>
                </li>
                <li className="list-inline-item Account" onClick={headelUser} >
                  <span className="position-relative">
                    <img src={user} alt="" />
                    <span className="listname" >Account</span>
                    {
                        isOpenAccount == true && 
                    <ul className="userList">
                        <li className="d-flex align-items-center">
                                <HiUsers className="userDropIcon"/>
                            My Account
                        </li>
                        <li><TbTruckDelivery className="userDropIcon"/>Order Tracking</li>
                        <li><FaGift className="userDropIcon"/>My Voucher</li>
                        <li><BiHeart className="userDropIcon"/>My Wishlist</li>
                        <li><IoIosSettings className="userDropIcon"/>Setting</li>
                        <li><IoIosLogOut className="userDropIcon"/>Sign out</li>
                    </ul>
                    }
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
