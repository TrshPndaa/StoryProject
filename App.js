import React, { useState } from 'react';
import storyData from './Story.js';
import DeadCheck from './IsAlive.js';

function App() {
  const [karma, setKarma] = useState(0);
  const [gold, setGold] = useState(200);
  const [potions, setPotions] = useState(0);
  const [chapter, setChapter] = useState('chapter1');
  const [jackAlive, setJackAlive] = useState(true);
  const [oliverAlive, setOliverAlive] = useState(true);

  function handleChoice(choice) {
    if (choice.setJackAlive) {
      setJackAlive(false);
    }
    if (choice.setOliverAlive) {
      setOliverAlive(false);
    }
  
    if (choice.karma) setKarma(karma + choice.karma);
    if (choice.gold) setGold(gold + choice.gold);
    if (choice.potions) setPotions(potions + (choice.potions || 0));
  

    if (!DeadCheck(choice, jackAlive, oliverAlive)) {
      return; 
    }
  
    setChapter(choice.next);
  }

  const currentChapter = storyData[chapter];

  return (
    <div className="app">
      <h1>{currentChapter.title}</h1>
      <p>{currentChapter.description}</p>
      <div className="choices">
        {currentChapter.choices && currentChapter.choices.map((choice, index) => (
          <button key={index} onClick={() => handleChoice(choice)}>
            {choice.text}
          </button>
        ))}
      </div>
      <div className="stats">
        <p>Karma: {karma}</p>
        <p>Gold: {gold}</p>
        <p>Healing Potions: {potions}</p>
        <p>Jack Alive: {jackAlive ? 'Yes' : 'No'}</p>
        <p>Oliver Alive: {oliverAlive ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
}

export default App;
