"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import CompletedTodoItem from "./completedTodoItem";
import ActiveTodoItem from "./activeTodoItem";
import SortTodo from "./sortTodo";
import Sortable from "sortablejs";

const HomePage = ({ theme, changeTheme }) => {
  // SETTING TODOS EVEN IF YOU REFRESH YOU STAY
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  // Update local storage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  //When I press Enter the item is added to the localstorage
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const updatedTodos = [{ item: input, isCompleted: false }, ...todos];
      setTodos(updatedTodos);
      setInput("");
    }
  };

  const handleCompleted = (key) => {
    const updatedTodos = [...todos];
    updatedTodos[key].isCompleted = !updatedTodos[key].isCompleted;
    setTodos(updatedTodos);
  };

  const deleteItem = (key) => {
    console.log(key);
    const updatedTodos = [...todos];
    updatedTodos.splice(key, 1);
    setTodos(updatedTodos);
  };

  const itemsLeft = todos.filter((item) => !item.isCompleted).length;

  const formattedItems = () => {
    var text = "";
    if (itemsLeft > 1) {
      text = itemsLeft + " items left";
    } else if (itemsLeft == 1) {
      text = itemsLeft + " item left";
    } else if (itemsLeft < 1) {
      text = "All done!";
    }
    return text;
  };

  const clearCompleted = () => {
    const updatedTodos = todos.filter((item) => !item.isCompleted);
    setTodos(updatedTodos);
  };

  const [filter, setFilter] = useState("all");

  const [activeColor, setActiveColor] = useState("");

  const handleFilterChange = (newFilter) => {
    console.log(typeof newFilter);
    setFilter(newFilter);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.isCompleted;
    } else if (filter === "completed") {
      return todo.isCompleted;
    } else {
      return true;
    }
  });

  //Helps to drag and drop
  const SortableList = () => {
    useEffect(() => {
      const sortableList = new Sortable(
        document.getElementById("sortable-list"),
        {
          animation: 150, // Animation duration in milliseconds
          onEnd: ({ oldIndex, newIndex }) => {
            const newTodos = [...todos];
            const [removed] = newTodos.splice(oldIndex, 1);
            newTodos.splice(newIndex, 0, removed);
            setTodos(newTodos);
          },
        }
      );

      return () => {
        sortableList.destroy(); // Cleanup SortableJS instance
      };
    }, [todos, setTodos]);

    return (
      <span id="sortable-list">
        {filteredTodos.map((item, index) => (
          <React.Fragment key={index}>
            {item.isCompleted ? (
              <CompletedTodoItem
                key={index}
                keyItem={index}
                index={index}
                theme={theme}
                item={item}
                handleCompleted={() => handleCompleted(index)}
                deleteItem={() => deleteItem(index)}
                todos={todos}
              />
            ) : (
              <ActiveTodoItem
                key={index}
                keyItem={index}
                theme={theme}
                item={item}
                handleCompleted={() => handleCompleted(index)}
                deleteItem={() => deleteItem(index)}
                todos={todos}
              />
            )}
          </React.Fragment>
        ))}
      </span>
    );
  };

  return (
    <div
      id="container "
      className={`bg-cover h-[200px] sm:h-[320px] flex flex-col sm:items-center gap-3 bg-center ${
        theme == "dark"
          ? 'bg-[url("/images/bg-mobile-dark.jpg")]' +
            ' sm:bg-cover sm:bg-[url("/images/bg-desktop-dark.jpg")]'
          : 'bg-[url("/images/bg-mobile-light.jpg")]' +
            ' sm:bg-cover sm:bg-[url("/images/bg-desktop-light.jpg")]'
      }`}
    >
      <div
        id="head"
        className="flex items-center justify-between mx-6 pt-12 pb-7 sm:w-[550px] sm:mt-8"
      >
        <h1 className="text-3xl font-bold text-[#fafafa] tracking-[8px] sm:text-5xl sm:tracking-[14px]">
          TODO
        </h1>
        {theme == "dark" ? (
          <button onClick={changeTheme}>
            <Image
              alt="Light sun"
              src="/images/icon-sun.svg"
              className="sm:w-8 sm:h-8 hover:cursor-pointer"
              width={20}
              height={20}
            />
          </button>
        ) : (
          <button onClick={changeTheme}>
            <Image
              alt="Dark moon"
              src="/images/icon-moon.svg"
              className="sm:w-8 sm:h-8 hover:cursor-pointer"
              width={20}
              height={20}
            />
          </button>
        )}
      </div>
      <div
        id="input"
        className={`flex items-center gap-3 justify-left ${
          theme == "dark" ? "bg-[#25273c]" : "bg-[#fafafa]"
        }   mx-6 rounded-md sm:w-[550px]`}
      >
        <span
          className={`min-w-6 h-6 border-2 border-[#393a4c] ${
            theme == "dark" ? "border-2" : "border-[1px] border-[#d2d3db]"
          } rounded-full ml-5 `}
        ></span>
        <input
          type="text"
          name="todoItem"
          value={input}
          placeholder="Create a new todo..."
          className={` ${
            theme == "dark" ? "bg-[#25273c] text-[#e4e5f1]" : "bg-[#fafafa]"
          } rounded-md py-3 sm:py-5 text-[#484b6a] w-full focus:border-transparent focus:outline-none`}
          onChange={handleInput}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className="sm:w-[550px] sm:mt-5">
        <ul>
          <SortableList />
          <li>
            <div
              className={`flex items-center justify-between ${
                theme == "dark"
                  ? "custom-shadow shadow-xl bg-[#25273c]"
                  : "bg-[#fafafa]"
              } gap-3 mx-6 sm:mx-0  rounded-bl-md rounded-br-md  py-4 sm:py-5 px-5 sm:border-b sm:border-b-[#4d5066] sm:hidden shadow-xl`}
            >
              <p
                className={`text-sm ${
                  theme == "dark" ? "text-[#4d5066]" : "text-[#9394a5]"
                }`}
              >
                {formattedItems()}
              </p>
              <p
                className={`text-sm ${
                  theme == "dark" ? "text-[#4d5066]" : "text-[#9394a5]"
                } hover:cursor-pointer`}
                onClick={clearCompleted}
              >
                Clear completed
              </p>
            </div>
          </li>
        </ul>
        <SortTodo
          theme={theme}
          filter={filter}
          handleFilterChange={(value) => handleFilterChange(value)}
          clearCompleted={clearCompleted}
          formattedItems={formattedItems}
        />
      </div>
      <p
        className={`text-center mt-5 sm:py-9 my-3  ${
          theme == "dark" ? "text-[#4d5066]" : "text-[#9394a5]"
        }`}
      >
        Drag and drop to reorder list
      </p>
    </div>
  );
};

export default HomePage;
