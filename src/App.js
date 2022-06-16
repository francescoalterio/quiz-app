import React, { useState } from 'react';
import Categories from './pages/Categories';
import Game from './pages/Game';
import Final from './pages/Final';
import Difficulty from './pages/Difficulty';
import './style.css';

export default function App() {
  const [screen, setScreen] = useState('final');
  const [difficulty, setDifficulty] = useState();
  const [category, setCategory] = useState();
  const [corrects, setCorrects] = useState(0)

  React.useEffect(() => {
    console.log({ screen, difficulty, category });
  }, [screen, difficulty, category]);

  const selectCategory = (categorySelected) => {
    setCategory(categorySelected);
    setScreen('game');
  };

  const selectDifficulty = (difficultySelected) => {
    setDifficulty(difficultySelected);
    setScreen('categories');
  };

  const handleAgain = () => {
    setDifficulty('')
    setCategory('')
    setCorrects(0)
    setScreen('difficulty')
  }

  if (screen === 'difficulty') {
    return <Difficulty selectDifficulty={selectDifficulty} />;
  }
  if (screen === 'categories') {
    return <Categories selectCategory={selectCategory} />;
  }
  if (screen === 'game') {
    return <Game difficulty={difficulty} category={category} setScreen={setScreen} corrects={corrects} setCorrects={setCorrects} />;
  }
  if (screen === 'final') {
    return <Final corrects={corrects} handleAgain={handleAgain} />;
  }
}
