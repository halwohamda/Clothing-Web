import React from 'react'
import Works from './Components/Works'
import Contact from './Components/Contact'


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
  
   </main>
    </>
  )
}

export default App