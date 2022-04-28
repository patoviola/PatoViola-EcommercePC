import React from 'react'
// import {FaShoppingCart} from 'react-icons/fa'

const Cartwidget = ({Icon, color, size}) => {


  return (
    <div>
        {<Icon style={{color: color, fontSize: size}}/>}
        
        {/* <FaShoppingCart style={{color:'red', fontSize:'20px'}}/> */}
    </div>
  )
}

export default Cartwidget