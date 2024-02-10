"use client";

import React, { useState } from "react";
import Image from "next/image";

const HomePage = ({ theme, changeTheme }) => {
  const [todos, setTodos] = useState([
    { item: "Wake up at 5am", isCompleted: true },
    { item: "Start chores at 6:30am", isCompleted: false },
    { item: "Get to work by 8:30am", isCompleted: true },
    { item: "Code code code!!!", isCompleted: true },
  ]);

  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

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
              src="/images/icon-sun.svg"
              className="sm:w-8 sm:h-8 hover:cursor-pointer"
              width={20}
              height={20}
            />
          </button>
        ) : (
          <button onClick={changeTheme}>
            <Image
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
          {/* completed */}

          {/* uncompleted */}
          {/* First item */}

          {filteredTodos.map((item, key) => (
            <>
              {item.isCompleted ? (
                <li className="group" draggable>
                  <div
                    className={`  flex items-center justify-left ${
                      theme == "dark"
                        ? "bg-[#25273c] border-b border-b-[#4d5066] "
                        : "bg-[#fafafa] border-b border-b-[#d2d3db] shadow-xl"
                    } bg-[#25273c] gap-3 mx-6 sm:mx-0 ${
                      key == 0 ? "rounded-tl-md rounded-tr-md" : ""
                    }  py-4  sm:py-5 `}
                  >
                    <span
                      className={`w-6 h-6 border-2  ${
                        theme == "dark" ? "border-[#393a4c]" : "border-none"
                      } rounded-full ml-5  bg-gradient-to-br from-[#57ddff] to-[#c058f3] hover:cursor-pointer`}
                      onClick={() => handleCompleted(key)}
                    ></span>
                    <Image
                      src="/images/icon-check.svg"
                      width={11}
                      height={11}
                      className="absolute left-[50px] sm:left-[-30px] sm:relative hover:cursor-pointer"
                      onClick={() => handleCompleted(key)}
                    />

                    <p
                      className={`text-sm  ${
                        theme == "dark" ? "text-[#4d5066]" : "text-[#d2d3db]"
                      } line-through sm:ml-[-12px] hover:cursor-pointer sm:w-[212px]`}
                    >
                      {item.item}
                    </p>
                    <Image
                      src="/images/icon-cross.svg"
                      width={15}
                      height={15}
                      className="absolute right-10 sm:hidden hover:cursor-pointer group-hover:block sm:relative sm:right-[-210px]"
                      onClick={() => deleteItem(key)}
                    />
                  </div>
                </li>
              ) : (
                <li
                  className={`justify-left group mx-6 flex items-center gap-3   ${
                    theme == "dark"
                      ? "custom-shadow bg-[#25273c] border-b border-b-[#4d5066]"
                      : "bg-[#fafafa] border-b-[1px] border-b-[#d2d3db] shadow-xl "
                  } py-4 sm:mx-0 sm:py-5 ${
                    key == 0 ? "rounded-tl-md rounded-tr-md" : ""
                  }`}
                  key={key}
                  draggable
                >
                  <div
                    className={`gradient ml-5 flex h-6 w-6 items-center justify-center rounded-full ${
                      theme == "dark" ? "bg-[#393a4c]" : "bg-[#d2d3db]"
                    }  from-[#57ddff] to-[#c058f3] hover:bg-gradient-to-br `}
                    onClick={() => handleCompleted(key)}
                  >
                    <span
                      className={`inner-gradient h-[22px] w-[22px] cursor-pointer rounded-full ${
                        theme == "dark" ? "bg-[#25273c]" : "bg-[#fafafa]"
                      }`}
                    ></span>
                  </div>
                  <p
                    className={`text-sm text-[#484b6a] hover:cursor-pointer  sm:w-[222px] sm:pl-3 ${
                      theme == "dark" ? "text-[#e4e5f1]" : "text-[#484b6a]"
                    }`}
                  >
                    {item.item}
                  </p>
                  <Image
                    src="/images/icon-cross.svg"
                    width={15}
                    height={15}
                    className="absolute right-10 sm:hidden hover:cursor-pointer group-hover:block sm:relative sm:right-[-210px]"
                    onClick={() => deleteItem(key)}
                  />
                </li>
              )}
            </>
          ))}

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
        <div id="sort" className="mt-5  sm:mt-0">
          <div
            className={`flex items-center justify-center sm:justify-between bg-[#25273c] ${
              theme == "dark"
                ? "custom-shadow shadow-xl bg-[#25273c]"
                : "bg-[#fafafa]"
            } gap-3 mx-6 sm:mx-0 rounded-bl-md rounded-br-md py-4 sm:py-5 px-5  shadow-blur`}
          >
            <p
              className={`text-sm  ${
                theme == "dark" ? "text-[#777a92]" : "text-[#9394a5]"
              } sm:block hidden`}
            >
              {formattedItems()}
            </p>
            <span className="flex sm:gap-3 gap-5">
              <p
                className={`text-sm ${
                  filter === "all" ? "text-[#0073e6]" : "text-[#777a92]"
                } ${
                  theme == "light" && filter !== "all" ? "text-[#9394a5]" : ""
                } hover:text-[#cacde8] ${
                  theme == "dark"
                    ? "hover:text-[#cacde8]"
                    : "hover:text-[#393a4c]"
                } hover:font-bold hover:cursor-pointer `}
                onClick={() => handleFilterChange("all")}
              >
                All
              </p>
              <p
                className={`text-sm ${
                  filter === "active" ? "text-[#0073e6]" : "text-[#777a92]"
                } ${
                  theme == "light" && filter !== "active"
                    ? "text-[#9394a5]"
                    : ""
                }  ${
                  theme == "dark"
                    ? " hover:text-[#cacde8] hover:font-bold"
                    : " font-bold"
                } hover:text-[#484b6a] hover:cursor-pointer`}
                onClick={() => handleFilterChange("active")}
              >
                Active
              </p>
              <p
                className={`text-sm ${
                  filter === "completed" ? "text-[#0073e6]" : "text-[#777a92]"
                } ${
                  theme == "light" && filter !== "completed"
                    ? "text-[#9394a5]"
                    : ""
                }  ${
                  theme == "dark"
                    ? " hover:text-[#cacde8] hover:font-bold"
                    : " font-bold"
                } hover:text-[#484b6a] hover:cursor-pointer`}
                onClick={() => handleFilterChange("completed")}
              >
                Completed
              </p>
            </span>

            <p
              className={`text-sm ${
                theme == "dark"
                  ? "text-[#777a92] hover:text-[#cacde8]"
                  : "text-[#9394a5] hover:text-[#484b6a]"
              } sm:block hidden  hover:cursor-pointer`}
              onClick={clearCompleted}
            >
              Clear completed
            </p>
          </div>
        </div>
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
