import React from "react";
import Image from "next/image";

const CompletedTodoItem = ({
  theme,
  index,
  keyItem,
  item,
  handleCompleted,
  deleteItem,
}) => {
  return (
    <li className="group">
      <div
        className={`  flex items-center justify-left ${
          theme == "dark"
            ? "bg-[#25273c] border-b border-b-[#4d5066] "
            : "bg-[#fafafa] border-b border-b-[#d2d3db] shadow-xl"
        } bg-[#25273c] gap-3 mx-6 sm:mx-0 ${
          index == 0 ? "rounded-tl-md rounded-tr-md" : ""
        }  py-4  sm:py-5 `}
      >
        <span
          className={`w-6 h-6 border-2  ${
            theme == "dark" ? "border-[#393a4c]" : "border-none"
          } rounded-full ml-5  bg-gradient-to-br from-[#57ddff] to-[#c058f3] hover:cursor-pointer`}
          onClick={handleCompleted}
        ></span>
        <Image
          alt="Cross image"
          src="/images/icon-check.svg"
          width={11}
          height={11}
          className="absolute left-[50px] sm:left-[-30px] sm:relative hover:cursor-pointer"
          onClick={() => handleCompleted(keyItem)}
        />

        <p
          className={`text-sm  ${
            theme == "dark" ? "text-[#4d5066]" : "text-[#d2d3db]"
          } line-through sm:ml-[-12px] hover:cursor-pointer sm:w-[214px]`}
        >
          {item.item}
        </p>
        <Image
          alt="Cross image"
          src="/images/icon-cross.svg"
          width={15}
          height={15}
          className="absolute right-10 sm:hidden hover:cursor-pointer group-hover:block sm:relative sm:right-[-210px]"
          onClick={() => deleteItem(keyItem)}
        />
      </div>
    </li>
  );
};

export default CompletedTodoItem;
