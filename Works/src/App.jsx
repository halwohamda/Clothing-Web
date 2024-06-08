import React from 'react'
import Works from './Components/Works'
import Portfolio from './Components/Portfolio'

const App = () => {
  return (
    <>
   <main>
    <div className="Works">
    <Works/>
    </div>
    <div className="portfolio">
      <Portfolio/>
    </div>
   </main>
    </>
  )
}

export default App