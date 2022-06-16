import React from 'react';
import './styles/Category.css';

const Category = ({name, id,selectCategory}) => {
  return <div onClick={() => selectCategory(id)} className='category-box'>{name}</div>;
};

export default Category