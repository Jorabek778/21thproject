import React, { useState } from 'react'
import Menu from './Menu';
import Data from './Data';
import './App.css';

function App() {
  const [state , setState] = useState(Data)
  const [newState , setNewState] = useState(Data)

  const All = ()=>{
    setNewState(Data)
    setState(Data)
  }

  const Breakfast = ()=>{
        const BR = state.filter((item)=>{
          return item.category === 'breakfast'
        })
        setNewState(BR)
        setState(BR);
  }
  const Lunch = ()=>{
    const BR = state.filter((item)=>{
      return item.category === 'lunch'
    })
    setNewState(BR)
}
const Shakes = ()=>{
  const BR = state.filter((item)=>{
    return item.category === 'shakes'
  })
  setNewState(BR)
}





  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <div className='btn-container'>
          <button onClick={All} type='button' className='filter-btn'>all</button>
          <button onClick={Breakfast} type='button' className='filter-btn'>breakfast</button>
          <button onClick={Lunch} type='button' className='filter-btn'>lunch</button>
          <button onClick={Shakes} type='button' className='filter-btn'>shakes</button>
        </div>
        <div className='section-center'>
          <Menu info={newState} />
        </div>
      </section>
     
    </main>
  );
}

export default App;
