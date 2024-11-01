import React from 'react'
import { Link } from 'react-router-dom'

const CommanNav = (props) => {
  return (
    <div>
        <ul>
    {
        props.data.map((ele)=>{
       return(
        <li>
            <Link to={ele.url}  className='LinkColor'>{ele.name}</Link>
            {/* <AiFillAliwangwang/> */}
            {/* <p>ll</p> */}
        </li>
       )
        })
    }
    </ul>
    </div>
  )
}

export default CommanNav