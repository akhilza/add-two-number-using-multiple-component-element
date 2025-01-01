// AddTwoNumbers.js
import React, { useState } from 'react';
import NumberInput from '../NumberInput';
import ResultDisplay from '../ResultDisplay';
import AddButton from '../AddButton';

function AddTwoNumbers() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(null);

  const handleAdd = () => {
    setResult(parseFloat(number1) + parseFloat(number2));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Add Two Numbers</h1>
        <NumberInput
          className="w-full p-2 mb-4 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter first number"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
        />
        <NumberInput
          className="w-full p-2 mb-4 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter second number"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
        />
        <AddButton 
         className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
         buttonText="Calculate"
         onClick={handleAdd} />
        {result !== null && <ResultDisplay result={result} />}
      </div>
    </div>
  );
}

export default AddTwoNumbers;
