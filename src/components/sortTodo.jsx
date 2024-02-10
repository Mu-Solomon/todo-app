import React from "react";

const SortTodo = ({
  theme,
  filter,
  handleFilterChange,
  clearCompleted,
  formattedItems,
}) => {
  return (
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
              theme == "dark" ? "hover:text-[#cacde8]" : "hover:text-[#393a4c]"
            } hover:font-bold hover:cursor-pointer `}
            onClick={() => handleFilterChange("all")}
          >
            All
          </p>
          <p
            className={`text-sm ${
              filter === "active" ? "text-[#0073e6]" : "text-[#777a92]"
            } ${
              theme == "light" && filter !== "active" ? "text-[#9394a5]" : ""
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
              theme == "light" && filter !== "completed" ? "text-[#9394a5]" : ""
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
  );
};

export default SortTodo;
