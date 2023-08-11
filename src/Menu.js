import React from 'react'

const Menu = (props) => {
  return (
    (props.info.map((item)=>{
       return <article className='menu-item'>
        <img className='photo' src={item.img} alt={item.name} />
    <div className='item-info'>
        <header>
            <h4>{item.title}</h4>
            <h4 className='price'>{item.price}</h4>
        </header>
        <p className='item-text'>
            {item.desc}
        </p>
    </div>
    </article>
    }))
  )
}

export default Menu