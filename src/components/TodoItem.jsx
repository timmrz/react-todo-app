import React, { useState } from "react";

export default function TodoItem({ todo, deleteTodo, changeTodo }) {
  return (
    <li
      className='border-2 border-black rounded-xl  py-2 px-2 sm:px-3 my-3 flex justify-between items-center'
      style={{
        background: `${todo.isFinished ? "rgb(187, 247, 208)" : "white"}`,
      }}>
      <p className='tracking-wider italic text-lg sm:text-2xl ml-4 whitespace-normal max-w-[80%] h-full truncate'>
        {todo.name}
      </p>
      <div className='sm:ml-2 sm:text-xl flex flex-nowrap'>
        <button
          onClick={() => changeTodo(todo.id)}
          className='mr-1 sm:mr-3 py-2 sm:py-3 px-2 sm:px-4 bg-green-400 rounded-xl bg-gree sm:hover:bg-green-500 duration-300'>
          Ready
        </button>
        <button
          onClick={() => deleteTodo(todo)}
          className='py-2 sm:py-3 px-2 sm:px-4 bg-red-400 rounded-xl sm:hover:bg-red-500 duration-300'>
          Delete
        </button>
      </div>
    </li>
  );
}
