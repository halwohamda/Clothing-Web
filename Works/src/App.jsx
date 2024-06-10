import React from 'react'
import Works from './Components/Works'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


const App = () => {
  return (
    <>
   <main>
    <div className="Works">
    <Works/>
    </div>
    <div className="contact">
      <Contact/>
    </div>
    <div className="footer">
      <Footer/>
    </div>
  
   </main>
    </>
  )
}

export default App
