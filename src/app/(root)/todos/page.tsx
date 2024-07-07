'use client'

import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]) as any;
  const [input, setInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(10);


  const addTodo = (e:any) => {
    e.preventDefault()
    if (input.trim() !== "") {
      setTodos([...todos, { title: input, completed: false }]);
      setInput("");
    }
  };

  const toggleComplete = (index: number) => {
    const newTodos = todos.map((todo: any, i: number) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((_: any, i: number) => i !== index);
    setTodos(newTodos);
  };
  return (
    <section className="my-auto dark:bg-gray-900">
      <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
        <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
          <div className="">
            <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-white">
              Todos
            </h1>
            <form onSubmit={addTodo}>
              <div className="flex flex-col gap-2 justify-center w-full">
                <div className="w-full">
                  <label htmlFor="" className=" dark:text-gray-300">
                    Todo Title
                  </label>
                  <input
                    type="text"
                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                    placeholder="Todo Title"
                    required
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full rounded-lg bg-blue-500 mt-4 text-white text-lg font-semibold">
                <button type="submit" className="w-full p-4">
                  Add Todo
                </button>
              </div>
            </form>
            <div className="rounded-lg border border-gray-200">
              <div className="overflow-x-auto rounded-t-lg">
                <ul>
                  {todos.map((todo: any, index: number) => (
                    <li key={index}>
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleComplete(index)}
                      />
                      <span
                        style={{
                          textDecoration: todo.completed
                            ? "line-through"
                            : "none",
                        }}
                      >
                        {todo.title}
                      </span>
                      <button onClick={() => deleteTodo(index)}>Delete</button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
                <ol className="flex justify-end gap-1 text-xs font-medium">
                  <li>
                    <a
                      href="#"
                      className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                    >
                      <span className="sr-only">Prev Page</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                    >
                      1
                    </a>
                  </li>

                  <li className="block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
                    2
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                    >
                      3
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                    >
                      4
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                    >
                      <span className="sr-only">Next Page</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
