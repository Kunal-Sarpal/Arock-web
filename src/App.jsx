
import { useState } from "react"
import Contextmenu from "./Contextmenu"
import Home from "./Landing/Home"
// import LoadParent from "./Loading/LoadParent"
import Menu from "./Menu/Menu"

function App() {
  const [menu,setMenu] = useState(true);
  return (
    <Contextmenu.Provider value={{menu,setMenu}}>
    <div className=" overflow-hidden w-full h-screen bg-[#0B100E]">
    <Home/>
   
    <Menu />
    </div>
    </Contextmenu.Provider>
  )
}

export default App