import React, { useState } from "react";

export default function TodoInput({ addTodo }) {
  const [inputValue, setInputValue] = useState("");
  const handleClick = (todo) => {
    if (inputValue.length > 2) {
      addTodo(todo);
      setInputValue("");
    }
  };
  return (
    <div className='flex items-center justify-between sm:px-14 py-5'>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        className='h-[60px] w-full rounded-xl border-2 border-black px-3 py-2 sm:text-2xl'
        type='text'
      />
      <button
        onClick={() => handleClick(inputValue)}
        className='ml-3 sm:ml-10 py-3 px-5 bg-orange-400 hover:bg-orange-500 duration-300 whitespace-nowrap rounded-xl text-lg sm:text-2xl font-semibold border-2 border-black'>
        Add todo
      </button>
    </div>
  );
}
