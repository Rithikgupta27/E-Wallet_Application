import React from 'react'
import  './Scroller.css'
function Scroller() {
  return (
    <div>
      <div className="scrolling-wrapper" >
      <div className="card" style={{backgroundImage: `url('images/scroll01.png')`}}>
          <h2>Card1</h2></div>
          <div className="card" style={{backgroundImage: `url('images/scroll02.png')`}}>
          <h2>Card2</h2></div>
          <div className="card" style={{backgroundImage: `url('images/scroll03.png')`}}>
          <h2>Card3</h2></div>
          <div className="card" style={{backgroundImage: `url('images/scroll4.png')`}}>
          <h2>Card4</h2></div>
             </div>
    </div>
  )
}

export default Scroller
