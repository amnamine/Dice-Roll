import React, { useState } from 'react';
import './App.css';

const diceTypes = [
  { name: 'D4', sides: 4, color: 'bg-green-500' },
  { name: 'D6', sides: 6, color: 'bg-blue-500' },
  { name: 'D8', sides: 8, color: 'bg-yellow-500' },
  { name: 'D10', sides: 10, color: 'bg-red-500' },
  { name: 'D12', sides: 12, color: 'bg-purple-500' },
  { name: 'D20', sides: 20, color: 'bg-pink-500' },
  { name: 'D100', sides: 100, color: 'bg-indigo-500' },
];

function App() {
  const [selectedDice, setSelectedDice] = useState(diceTypes[0]);
  const [diceValue, setDiceValue] = useState(1);

  const rollDice = () => {
    const newValue = Math.floor(Math.random() * selectedDice.sides) + 1;
    setDiceValue(newValue);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-extrabold text-white mb-6 animate-bounce">
        🎲 Dice Roll App 🎲
      </h1>
      <div className="bg-white rounded-lg shadow-lg p-10 mb-4 max-w-3xl mx-auto">
        <div className={`text-8xl font-bold ${selectedDice.color} mb-6 border-4 border-indigo-600 rounded-lg p-8 text-center animate-pulse`}>
          {diceValue}
        </div>
        <div className="flex justify-center space-x-4 mb-6 flex-wrap">
          {diceTypes.map((dice, index) => (
            <button
              key={index}
              onClick={() => setSelectedDice(dice)}
              className={`${dice.color} text-white py-3 px-4 rounded-lg shadow-md hover:opacity-80 transition duration-300 font-semibold text-xl`}
            >
              {dice.name}
            </button>
          ))}
        </div>
        <button
          onClick={rollDice}
          className="bg-blue-600 text-white py-4 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 font-bold text-2xl w-full"
        >
          Roll Dice!
        </button>
        <div className="text-center mt-4">
          <p className={`text-lg font-medium ${selectedDice.color}`}>
            Chosen Dice: <span className="font-bold">{selectedDice.name}</span>
          </p>
        </div>
      </div>
      <div className="text-white text-xl mt-4 text-center">
        <p className={`text-lg font-semibold ${selectedDice.color}`}>
          Select a dice type by clicking the buttons above and roll!
        </p>
      </div>
    </div>
  );
}

export default App;
