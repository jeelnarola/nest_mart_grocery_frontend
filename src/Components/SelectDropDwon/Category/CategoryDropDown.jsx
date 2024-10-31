import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import '../Category/categoryDropDown.css'
const CategoryDropDown = (props) => {
  const [isOpenAccount, setisOpenAccount] = useState(false);
  const [categoryList,setcategoryList]=useState(props.data)
  const [categoryFind,setcategoryFind]=useState(props.data)
  const [selectIndex,setselectIndex] = useState(0)
  const [selectItem,setselectItem] = useState('All Catgories')
  const haendelCate = () => {
    setisOpenAccount(!isOpenAccount);
    setcategoryList(props.data)
  };
  const closeSelect = (index,name) =>{
    setselectIndex(index)
    console.log("index",index)
    setselectItem(name)
    setisOpenAccount(false)
  }
  const categoryFilter=(e)=>{
    let keyword = e.target.value.toLowerCase()
    const list=categoryFind.filter((item)=>{
      return item.toLowerCase().includes(keyword)
    })
    const list2 = list.filter((item,index)=>list.indexOf(item)===index)
    setcategoryList(list2)
  }
  return (
    <div>
      <div className="selectCate position-relative">
        <div className="cateName cursor" onClick={haendelCate}>
          {selectItem.length >= 15 ? selectItem.substring(0,13) +'..':selectItem}<RiArrowDropDownLine className="DropDownicon"/>
        </div>
        {isOpenAccount == true && (
          <div className="CateDrop">
            <input type="text" onChange={categoryFilter}/>
            <ul className="cateList cursor">
              {
                categoryList.map((item,index)=>{
                return(
                  <li className={`${selectIndex === index ? 'active' :' '}`} onClick={()=>closeSelect(index,item)}>{item}</li>
                )
              })
              }
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryDropDown;
