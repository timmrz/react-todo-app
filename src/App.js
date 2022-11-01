import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { v4 } from "uuid";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const addTodo = (todo) => {
    setTodos([...todos, { name: todo, id: v4(), isFinished: false }]);
  };

  const changeTodo = (id) => {
    const newState = todos.map((item) => {
      if (item.id === id) {
        return { name: item.name, id: item.id, isFinished: !item.isFinished };
      }
      return item;
    });
    setTodos(newState);
  };

  const deleteTodo = (todo) => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='max-w-[800px] mx-auto h-screen flex items-center'>
      <div className='rounded-3xl w-full p-3 sm:p-6 h-[650px] sm:h-[800px] bg-[#f2eae9] border-2 border-black flex flex-col'>
        <TodoInput addTodo={addTodo} />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          changeTodo={changeTodo}
        />
      </div>
    </div>
  );
}

export default App;
