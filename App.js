import React, { useState } from 'react';
import storyData from './Story.js';



function App(setJackAlive, setOliverAlive){
  const [karma, setKarma] = useState(0);
  const [gold, setGold] = useState(200); 
  const [potions, setPotions] = useState(0);
  const [chapter, setChapter] = useState('chapter1');
  const [jackAlive, updateJackAlive] = useState(true)
  const [oliverAlive, updateOliverAlive] = useState(true)

  function handleChoice(choice, choices){
    for(let i = 0; i<choices.length; i++){
      if ("setJackAlive" in choices[i]){
        updateJackAlive(false)
      }
      console.log(choice)
      console.log(choices)
      console.log("-------------------")
    }
    for(let i = 0; i<choices.length; i++){
      if ("setOliverAlive" in choices[i]){
        updateOliverAlive(false)
      }}
    if (choice.karma) setKarma(karma + choice.karma);
    if (choice.gold) setGold(gold + choice.gold);
    if (choice.potions) setPotions(potions + (choice.potions || 0));

    if ("updateJackAlive" in choices.keys)

    if (choice.requiresJackAlive & setJackAlive === false) {
      alert('Jack is not alive, you cannot make this choice!');
      return;
    }
    if (choice.requiresOliverAlive && !setOliverAlive) {
      alert('OLiver is not alive, you cannot make this choice!');
      return;
    }

    setChapter(choice.next);
  };

  const currentChapter = storyData[chapter];

  return (
    <div className="app">
      <h1>{currentChapter.title}</h1>
      <p>{currentChapter.description}</p>
      <div className="choices">
        {currentChapter.choices && currentChapter.choices.map((choice, index) => (
          
          <button key={index} onClick={() => handleChoice(choice, currentChapter.choices)}>
            {choice.text}
          </button>
        ))}
      </div>
      <div className="stats">
        <p>Karma: {karma}</p>
        <p>Gold: {gold}</p>
        <p>Healing Potions: {potions}</p>
        <p>Jack Alive: {jackAlive ? 'Yes' : 'No'}</p>
        <p>Oliver Alive: {oliverAlive ? 'Yes' : 'no'}</p>
      </div>
    </div>
  );
};

export default App;
