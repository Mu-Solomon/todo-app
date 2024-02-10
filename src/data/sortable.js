import React, { useState, useEffect } from "react";
import Image from "next/image";
import Sortable from "sortablejs";
import CompletedTodoItem from "@/components/completedTodoItem";
import ActiveTodoItem from "@/components/activeTodoItem";


const SortableList = () => {
    useEffect(() => {
      // Initialize SortableJS for the list
      new Sortable(document.getElementById("sortable-list"), {
        animation: 150, // Animation duration in milliseconds (default: 150)
        // Add any additional options here
        onEnd: function (evt) {
          console.log("Item moved:", evt.oldIndex, "to", evt.newIndex);
        },
      });
    }, []); // Ensure the effect runs only once after initial render
    const theme = "dark";
    const key = 0;
    return (
      <ul id="sortable-list">
        {filteredTodos.map((item, key) => (
            <>
              {item.isCompleted ? (
                <CompletedTodoItem
                  key={key}
                  theme={theme}
                  item={item}
                  handleCompleted={() => handleCompleted(key)}
                  deleteItem={deleteItem}
                  todos={todos}
                />
              ) : (
                <ActiveTodoItem
                  key={key}
                  theme={theme}
                  item={item}
                  handleCompleted={() => handleCompleted(key)}
                  deleteItem={deleteItem}
                  todos={todos}
                />
              )}
            </>
          ))}
      </ul>
    );
  };
  
  export default SortableList;