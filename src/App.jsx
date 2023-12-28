import { useState } from 'react'
import './App.css'
import { Home } from './pages'
import { Footer, Header, Section1, Section2, Section3, Section4, Section5, Section6 } from './components'

function App() {
  const [count, setCount] = useState(0)
  function handlbactop() {
    


 handlbactop= () =>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
    
  })
  console.log("ishladi");
}

  }
  return (
    <>
    <Header/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>
    <Footer handlbactop={handlbactop}/>

    </>
  )
}

export default App
