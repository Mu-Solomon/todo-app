import React from "react";
import Image from "next/image";

const ActiveTodoItem = ({theme, key, item, handleCompleted, deleteItem}) => {
  return (
    <li
      className={`justify-left group mx-6 flex items-center gap-3   ${
        theme == "dark"
          ? "custom-shadow bg-[#25273c] border-b border-b-[#4d5066]"
          : "bg-[#fafafa] border-b-[1px] border-b-[#d2d3db] shadow-xl "
      } py-4 sm:mx-0 sm:py-5 ${key == 0 ? "rounded-tl-md rounded-tr-md" : ""}`}
      key={key}
    >
      <div
        className={`gradient ml-5 flex h-6 w-6 items-center justify-center rounded-full ${
          theme == "dark" ? "bg-[#393a4c]" : "bg-[#d2d3db]"
        }  from-[#57ddff] to-[#c058f3] hover:bg-gradient-to-br `}
        onClick={handleCompleted}
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
  );
};

export default ActiveTodoItem;
