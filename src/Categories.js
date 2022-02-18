import React from 'react';

const Categories = ({categories, changeCat}) => {
  console.log('cat', categories);
  
  return(
    <div className="btn-container">
      {categories.map((cat,index) =>
      { 
        return <button type="button"
        className="filter-btn"
        key={index} onClick={()=>changeCat(cat)}>{cat}</button>
     })
    }
    </div>
  )
}
    
export default Categories;
