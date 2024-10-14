// Chapters and Choices Data
const storyData =  {
  chapter1: {
    title: "Chapter 1: The Calling",
    description: "You are called to a quest to save the world. Do you accept?",
    choices: [
      { text: "Accept the quest (+5 Karma)", next: "chapter2", karma: 5 },
      { text: "Refuse the quest (-5 Karma)", next: "badEnding1", karma: -5 },
    ],
  },
  chapter2: {
    title: "Chapter 2: The Town of Glendor",
    description: "You arrive in the town of Glendor. What will you do?",
    choices: [
      { text: "Buy healing potions. Spend 200 gold (+2 Karma)", next: "chapter3", karma: 2, gold: -200, potions: 1 },
      { text: "Buy better weapons. Spend 100 gold (-2 Karma, +1 attack power)", next: "chapter3", karma: -2, gold: -100 },
      { text: "Save gold for later (Neutral)", next: "chapter3" },
    ],
  },
  chapter3: {
    title: "Chapter 3: Quest 1 – Caravan Rescue",
    description: "A caravan is being attacked by bandits. What will you do?",
    choices: [
      { text: "Attack the bandits (+5 Karma)", next: "outcome1", karma: 5, setJackAlive: false },
      { text: "Take the bandits’ offer and let them go (-5 Karma)", next: "outcome2", karma: -5 },
      { text: "Negotiate to save both goods and merchants (+10 Karma if successful, -5 Karma if unsuccessful)", next: "outcome3" },
    ],
  },
  outcome1: {
    title: "Outcome: Attack the bandits",
    description: "You attack the bandits. If no healing potions, Jack is killed in the process. Receive 150 gold.",
    karmaRequirement: null,
    choices: [{ text: "Continue to Chapter 4", next: "chapter4", gold: 150 }],
  },
  outcome2: {
    title: "Outcome: Let the bandits go",
    description: "You receive 200 gold, but the merchants remain prisoners.",
    karmaRequirement: null,
    choices: [{ text: "Continue to Chapter 4", next: "chapter4", gold: 200 }],
  },
  outcome3: {
    title: "Outcome: Negotiation attempt",
    description: "If karma is +5 or higher, successful negotiation saves everyone. Receive 100 gold.",
    karmaRequirement: 5,
    choices: [{ text: "Continue to Chapter 4", next: "chapter4", gold: 100 }],
  },
  chapter4: {
    title: "Chapter 4: Quest 2 – The Dark Mines of Aldoria",
    description: "You venture into the dark mines. What strategy will you use?",
    choices: [
      { text: "Attack head-on (Neutral)", next: "outcome4" },
      { text: "Let Jack disable traps and Oliver cast wards (+5 Karma, requires Jack to be alive)", next: "outcome5", karma: 5, requiresJackAlive: true },
      { text: "Avoid the golem entirely (-5 Karma)", next: "outcome6", karma: -5 },
    ],
  },
  outcome4: {
    title: "Outcome: Attack head-on",
    description: "Without healing, Nasko dies. Receive 200 gold.",
    karmaRequirement: null,
    choices: [{ text: "Continue to Chapter 5", next: "chapter5", gold: 200 }],
  },
  outcome5: {
    title: "Outcome: Disable traps and wards",
    description: "Your group defeats the golem safely. Receive 150 gold.",
    karmaRequirement: null,
    choices: [{ text: "Continue to Chapter 5", next: "chapter5", gold: 150 }],
  },
  outcome6: {
    title: "Outcome: Avoid the golem",
    description: "You miss the treasure. No rewards and lose Karma.",
    karmaRequirement: null,
    choices: [{ text: "Continue to Chapter 5", next: "chapter5" }],
  },
  chapter5: {
    title: "Chapter 5: Quest 3 – The Farmer's Plea",
    description: "A farmer pleads for help as wolves are attacking their village. What will you do?",
    choices: [
      { text: "Fight the wolves head-on (+10 Karma)", next: "outcome7", karma: 10 },
      { text: "Set a trap to lure wolves away (+5 Karma)", next: "outcome8", karma: 5 },
      { text: "Flee the village (-10 Karma)", next: "outcome9", karma: -10 },
    ],
  },
  outcome7: {
    title: "Outcome: Fight the wolves head-on",
    description: "Nasko dies if he wasn’t healed. Receive 100 gold.",
    choices: [{ text: "Continue to Chapter 6", next: "chapter6", gold: 100 }],
  },
  outcome8: {
    title: "Outcome: Set a trap",
    description: "Oliver gets poisoned and dies if no healing potions are available.",
    choices: [{ text: "Continue to Chapter 6", next: "chapter6", setOliverAlive: false }],
  },
  outcome9: {
    title: "Outcome: Flee the village",
    description: "The village is destroyed. Leads to bad karma path later.",
    choices: [{ text: "Continue to Chapter 6", next: "chapter6" }],
  },
  chapter6: {
    title: "Chapter 6: Quest 4 – The Direwolf Hunt",
    description: "You must track down and hunt the direwolves responsible for attacking the village.",
    choices: [
      { text: "Use Oliver’s magic to track the wolves (+5 Karma, requires Oliver to be alive)", next: "outcome10", karma: 5, requiresOliverAlive: true },
      { text: "Set up a trap (Neutral Karma)", next: "outcome11" },
      { text: "Flee (-10 Karma)", next: "outcome12", karma: -10 },
    ],
  },
  outcome10: {
    title: "Outcome: Track the wolves with magic",
    description: "The group defeats the wolves safely. Receive 300 gold.",
    choices: [{ text: "Continue to Chapter 7", next: "chapter7", gold: 300 }],
  },
  outcome11: {
    title: "Outcome: Set up a trap",
    description: "Nasko is injured; possible loss of Nasko without healing potions.",
    choices: [{ text: "Continue to Chapter 7", next: "chapter7" }],
  },
  outcome12: {
    title: "Outcome: Flee",
    description: "The group fails the quest. No rewards, leading to bad karma.",
    choices: [{ text: "Continue to Chapter 7", next: "chapter7" }],
  },
  chapter7: {
    title: "Chapter 7: Quest 5 – The Lost Relic",
    description: "You find a relic that can weaken the titan you will face. What do you do?",
    choices: [
      { text: "Use the relic to weaken the titan (+5 Karma)", next: "outcome13", karma: 5 },
      { text: "Attack without using the relic (-5 Karma)", next: "outcome14", karma: -5 },
    ],
  },
  outcome13: {
    title: "Outcome: Use relic to weaken the titan",
    description: "Titan is weakened and defeated with no casualties. Receive 200 gold.",
    choices: [{ text: "Continue to Chapter 8", next: "chapter8", gold: 200 }],
  },
  outcome14: {
    title: "Outcome: Attack without using relic",
    description: "The group wins, but Nasko or Jack may die if they weren’t healed. Retrieve relic.",
    choices: [{ text: "Continue to Chapter 8", next: "chapter8" }],
  },
  chapter8: {
    title: "Chapter 8: The Revelation of Paul",
    description: "You confront Paul, the source of the world’s suffering. What will you do?",
    choices: [
      { text: "Use the relic to sever Paul’s bond (+10 Karma)", next: "outcome15", karma: 10 },
      { text: "Attack without using the relic (-10 Karma)", next: "outcome16", karma: -10 },
    ],
  },
  outcome15: {
    title: "Outcome: Sever Paul's bond",
    description: "Paul is weakened, leading to a better chance of victory.",
    choices: [{ text: "Continue to Chapter 9", next: "chapter9" }],
  },
  outcome16: {
    title: "Outcome: Attack without relic",
    description: "Paul fights back fiercely. The group suffers severe casualties.",
    choices: [{ text: "Continue to Chapter 9", next: "chapter9" }],
  },
  chapter9: {
    title: "Chapter 9: The Final Battle",
    description: "You face Paul in the final battle. What will you do?",
    choices: [
      { text: "Use the relic to sever Paul’s connection to treasure (+15 Karma)", next: "outcome17", karma: 15 },
      { text: "Sacrifice a companion to defeat Paul (+5 Karma)", next: "outcome18", karma: 5 },
      { text: "Let Paul go (-15 Karma)", next: "badEnding2", karma: -15 },
    ],
  },
  outcome17: {
    title: "Outcome: Sever Paul’s connection",
    description: "You successfully defeat Paul and free the world from his tyranny.",
    choices: [{ text: "Continue to Chapter 10", next: "chapter10" }],
  },
  outcome18: {
    title: "Outcome: Sacrifice Oliver",
    description: "You defeat Paul, but one of your companions dies.",
    choices: [{ text: "Continue to Chapter 10", next: "chapter10" }],
  },
  chapter10: {
    title: "Chapter 10: The Aftermath",
    description: "The world is saved, but at what cost? Your actions have lasting consequences.",
    choices: [
      { text: "Reflect on your journey and rebuild the world (+20 Karma)", next: "goodEnding" },
      { text: "Leave the world to rebuild itself (-20 Karma)", next: "badEnding3" },
    ],
  },
  badEnding1: {
    title: "Bad Ending: The Quiet Life",
    description: "Jesus lives a quiet life as the world slowly falls into ruin under Paul's rule.",
  },
  badEnding2: {
    title: "Bad Ending: Paul's Return",
    description: "You let Paul go, but he returns stronger, and the world plunges deeper into chaos.",
  },
  badEnding3: {
    title: "Bad Ending: A Broken World",
    description: "You abandon the world, and it collapses without your leadership.",
  },
  goodEnding: {
    title: "Good Ending: A New Dawn",
    description: "You successfully rebuild the world, and peace returns for generations to come.",
  },
};


export default storyData;