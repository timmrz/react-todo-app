import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { Scrollbars } from "react-custom-scrollbars-2";

export default function TodoList({ todos, deleteTodo, changeTodo }) {
  return (
    <div className='w-full flex-1 flex flex-col justify-start items-center'>
      <Scrollbars style={{ width: "100%", height: "100%" }}>
        <ul className='flex-1 w-full py-4 sm:px-4'>
          {todos.length > 0 &&
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                changeTodo={changeTodo}
              />
            ))}
        </ul>
      </Scrollbars>
    </div>
  );
}
