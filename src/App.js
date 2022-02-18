import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  let cat = [], uniq;
  cat = items.map(item => item.category);
  uniq = ['all', ...new Set([...cat])]
  console.log(uniq);
  const [categ, setCateg] = useState([]);
  const [menuItems, setMenuItems] = useState(items);
  const changeCategory = (cat) =>{
     console.log('change cat', cat);
    const newItems = items.filter((item) => item.category === cat);
    setMenuItems(newItems);
    if(cat === 'all'){
      setMenuItems(items);
    }
  }

  return (
  <main>
    <div className='container'>
      <h2 style={{textAlign: 'center'}}>menu project setup</h2>
      <div className=''>
      <Categories categories = {uniq} changeCat={changeCategory} items={items}/>
      </div>
      <Menu items={menuItems} />
    </div>
  </main>
  )
}

export default App;
