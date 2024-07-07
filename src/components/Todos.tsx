"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function TodoComponent() {
  const [todos, setTodos] = useState([]) as any;
  const [input, setInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodosPerPage] = useState(10);
  const [isEditing, setIsEditing] = useState(null) as any;
  const [editInput, setEditInput] = useState("");
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchTodos();
  }, []);

  const addTodo = (e: any) => {
    e.preventDefault();
    // api call to add todo
    if (input.trim() !== "") {
      setTodos([{ title: input, completed: false }, ...todos]);
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

  const editTodo = (index: number, title: string) => {
    setIsEditing(index);
    setEditInput(title);
  };

  const saveEdit = (index: number) => {
    const newTodos = todos.map((todo: any, i: number) => {
      if (i === index) {
        return { ...todo, title: editInput };
      }
      return todo;
    });
    setTodos(newTodos);
    setIsEditing(null);
    setEditInput("");
  };

  const cancelEdit = () => {
    setIsEditing(null);
    setEditInput("");
  };

  // Pagination logic
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(todos.length / todosPerPage)) {
      setCurrentPage(currentPage + 1);
    }
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
                  <input
                    type="text"
                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                    placeholder="Todo Title"
                    required
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
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
                <table className="w-full">
                  <tbody>
                    <tr>
                      <td>Completed</td>
                      <td>Title</td>
                      <td colSpan={2}>Action</td>
                    </tr>

                    {currentTodos.map((todo: any, index: number) => (
                      <>
                        {isEditing === index ? (
                          <tr key={index}>
                            <td></td>
                            <td>
                              <input
                                type="text"
                                value={editInput}
                                onChange={(e) => setEditInput(e.target.value)}
                              />
                            </td>
                            <td>
                              <button
                                onClick={() =>
                                  saveEdit(indexOfFirstTodo + index)
                                }
                              >
                                Save
                              </button>
                            </td>
                            <td>
                              <button onClick={cancelEdit}>Cancel</button>
                            </td>
                          </tr>
                        ) : (
                          <tr key={index}>
                            <td>
                              <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() =>
                                  toggleComplete(indexOfFirstTodo + index)
                                }
                              />
                            </td>
                            <td>
                              <span
                                style={{
                                  textDecoration: todo.completed
                                    ? "line-through"
                                    : "none",
                                }}
                              >
                                {todo.title}
                              </span>
                            </td>
                            <td>
                              <button
                                onClick={() =>
                                  editTodo(indexOfFirstTodo + index, todo.title)
                                }
                              >
                                Edit
                              </button>
                            </td>
                            <td>
                              <button
                                onClick={() =>
                                  deleteTodo(indexOfFirstTodo + index)
                                }
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        )}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
              <Pagination
                currentPage={currentPage}
                todosPerPage={todosPerPage}
                totalTodos={todos.length}
                paginate={paginate}
                prevPage={prevPage}
                nextPage={nextPage}
                setTodosPerPage={setTodosPerPage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const Pagination = ({
  currentPage,
  todosPerPage,
  totalTodos,
  paginate,
  prevPage,
  nextPage,
  setTodosPerPage,
}: any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
    pageNumbers.push(i);
  }
  const visiblePageNumbers = pageNumbers.filter(
    (number) =>
      number === 1 ||
      number === pageNumbers.length ||
      (number >= currentPage - 1 && number <= currentPage + 1)
  );
  return (
    <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
      <ol className="flex justify-end gap-1 text-xs font-medium">
        <li>
          <select
            className="inline-flex px-5 py-2 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            value={todosPerPage}
            onChange={(e) => {
              setTodosPerPage(e.target.value);
            }}
          >
            <option value={5}>5 </option>
            <option value={10}>10</option>
            <option value={30}>30</option>
          </select>
        </li>
        <li>
          <a
            onClick={prevPage}
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
        {visiblePageNumbers.map((number) => (
          <li key={number}>
            <a
              onClick={() => paginate(number)}
              className={`block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900 ${
                currentPage === number
                  ? "border-blue-600 text-white bg-gray-600"
                  : ""
              }`}
            >
              {number}
            </a>
          </li>
        ))}
        <li>
          <a
            onClick={nextPage}
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
  );
};
