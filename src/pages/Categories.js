import React, { useState, useEffect } from 'react';
import Category from '../components/Category';
import './styles/Categories.css';

const Categories = ({selectCategory}) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const url = 'https://opentdb.com/api_category.php';
    fetch(url)
      .then((res) => res.json())
      .then((result) => setCategories(result.trivia_categories));
  }, []);
  return (
    <>
      <h1 className="categories-title">SELECT A CATEGORY</h1>
      <div className="categories-box">
        {categories.map((category) => (
          <Category name={category.name} id={category.id} selectCategory={selectCategory} />
        ))}
      </div>
    </>
  );
};

export default Categories;
