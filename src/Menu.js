import React from 'react';

const Menu = ({items}) => {
  return (
    <div className='section-center'>
      {items.map(item => {
        return(
          <div key={item.id}>
            <img className='photo' src={item.img} alt={item.title}/>
            <div className='item-info'>
              <header style={{padding: '1rem 0'}}>
                <h4>{item.title}</h4>
                <h4>${item.price}</h4>
              </header>
            </div>
            <p>{item.desc}</p>
          </div>
        )
      }
      )}
    </div>
  )
};

export default Menu;
