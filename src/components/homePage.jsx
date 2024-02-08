import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <div
      id="container "
      className="bg-cover h-[200px] flex flex-col gap-3 bg-center  bg-[url('/images/bg-mobile-dark.jpg')] 
      sm:bg-cover sm:bg-center 
      sm:bg-[url('/images/bg-desktop-dark.jpg')]"
    >
      <div id="head" className="flex items-center justify-between mx-6 py-10">
        <h1 className="text-3xl font-bold text-[#fafafa] tracking-[8px]">
          TODO
        </h1>
        <Image src="/images/icon-sun.svg" width={20} height={20} />
      </div>
      <div
        id="input"
        className="flex items-center gap-3 justify-left bg-[#25273c] mx-6 rounded-sm"
      >
        <span className="w-6 h-6 border-2 border-[#393a4c] rounded-full ml-4"></span>
        <input
          type="text"
          name="todoItem"
          placeholder="Create a new todo..."
          className="bg-[#25273c] py-4 text-[#777a92]"
        />
      </div>
      <div id="todos">
        <ul>
          <li>
            <div className="flex items-center justify-left bg-[#25273c] gap-3 mx-6 rounded-sm py-4 border-b border-b-[#4d5066]">
              <span className="w-6 h-6 border-2 border-[#393a4c] rounded-full ml-4 bg-gradient-to-br from-[#57ddff] to-[#c058f3]"></span>
              <Image
                src="/images/icon-check.svg"
                width={11}
                height={11}
                className="absolute left-[47px]"
              />
              <p className="text-sm text-[#4d5066] line-through">
                Complete online Javascript course
              </p>
              <Image
                src="/images/icon-cross.svg"
                width={15}
                height={15}
                className="absolute right-10"
              />
            </div>
          </li>
          <li>
            <div className="flex items-center justify-left bg-[#25273c] gap-3 mx-6 rounded-sm py-4 border-b border-b-[#4d5066]">
              <span className="w-6 h-6 border-2 border-[#393a4c] rounded-full ml-4"></span>
              <p className="text-sm text-[#c4d4e8]">Task 1</p>
              <Image
                src="/images/icon-cross.svg"
                width={15}
                height={15}
                className="absolute right-10"
              />
            </div>
          </li>
          <li>
            <div className="flex items-center justify-left bg-[#25273c] gap-3 mx-6 rounded-sm py-4 border-b border-b-[#4d5066]">
              <span className="w-6 h-6 border-2 border-[#393a4c] rounded-full ml-4"></span>
              <p className="text-sm text-[#c4d4e8]">Task 1</p>
              <Image
                src="/images/icon-cross.svg"
                width={15}
                height={15}
                className="absolute right-10"
              />
            </div>
          </li>
          <li>
            <div className="flex items-center justify-left bg-[#25273c] gap-3 mx-6 rounded-sm py-4 border-b border-b-[#4d5066]">
              <span className="w-6 h-6 border-2 border-[#393a4c] rounded-full ml-4"></span>
              <p className="text-sm text-[#c4d4e8]">Task 1</p>
              <Image
                src="/images/icon-cross.svg"
                width={15}
                height={15}
                className="absolute right-10"
              />
            </div>
          </li>
          <li>
            <div className="flex items-center justify-left bg-[#25273c] gap-3 mx-6 rounded-sm py-4 border-b border-b-[#4d5066]">
              <span className="w-6 h-6 border-2 border-[#393a4c] rounded-full ml-4"></span>
              <p className="text-sm text-[#c4d4e8]">Task 1</p>
              <Image
                src="/images/icon-cross.svg"
                width={15}
                height={15}
                className="absolute right-10"
              />
            </div>
          </li>
          <li>
            <div className="flex items-center justify-left bg-[#25273c] gap-3 mx-6 rounded-sm py-4 border-b border-b-[#4d5066]">
              <span className="w-6 h-6 border-2 border-[#393a4c] rounded-full ml-4"></span>
              <p className="text-sm text-[#c4d4e8]">Task 1</p>
              <Image
                src="/images/icon-cross.svg"
                width={15}
                height={15}
                className="absolute right-10"
              />
            </div>
          </li>
          <li>
            <div className="flex items-center justify-between bg-[#25273c] gap-3 mx-6 rounded-sm py-4 px-5">
              <p className="text-sm text-[#4d5066]">5 items left</p>
              <p className="text-sm text-[#4d5066]">Clear completed</p>
            </div>
          </li>
        </ul>
        <div id="sort" className="mt-4">
          <div className="flex items-center justify-center bg-[#25273c] gap-3 mx-6 rounded-sm py-4 px-5">
            <p className="text-sm text-[#0073e6]">All</p>
            <p className="text-sm text-[#4d5066]">Active</p>
            <p className="text-sm text-[#4d5066]">Completed</p>
          </div>
        </div>
      </div>
      <p className="text-center mt-5 text-[#4d5066]">
        Drag and drop to reorder list
      </p>
    </div>
  );
};

export default HomePage;
