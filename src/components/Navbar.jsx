import React, { createContext, useState } from 'react'

function Navbar() {
  const[menu,setMenu] = useState(createContext);
  console.log(menu)
  return (
    <div className='flex justify-between p-3 px-4 text-white'>
        <div>Logo</div>
        {/* {menu?"false":"True"} */}
     
    </div>
  )
}

export default Navbar