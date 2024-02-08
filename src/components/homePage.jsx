import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <div
      id="container "
      className="bg-cover h-[200px] sm:h-[320px] flex flex-col sm:items-center gap-3 bg-center  bg-[url('/images/bg-mobile-dark.jpg')] 
      sm:bg-cover 
      sm:bg-[url('/images/bg-desktop-dark.jpg')]"
    >
      <div
        id="head"
        className="flex items-center justify-between mx-6 py-10 sm:w-[550px] sm:mt-8"
      >
        <h1 className="text-3xl font-bold text-[#fafafa] tracking-[8px] sm:text-5xl sm:tracking-[14px]">
          TODO
        </h1>
        <Image
          src="/images/icon-sun.svg"
          className="sm:w-8 sm:h-8"
          width={20}
          height={20}
        />
      </div>
      <div
        id="input"
        className="flex items-center gap-3 justify-left bg-[#25273c] mx-6 rounded-sm sm:w-[550px]"
      >
        <span className="w-6 h-6 border-2 border-[#393a4c] rounded-full ml-5 "></span>
        <input
          type="text"
          name="todoItem"
          placeholder="Create a new todo..."
          className="bg-[#25273c] py-4 sm:py-5 text-[#777a92]"
        />
      </div>
      <div id="todos" className="sm:w-[550px] sm:mt-5">
        <ul>
          <li>
            <div className="flex items-center justify-left bg-[#25273c] gap-3 mx-6 sm:mx-0 rounded-sm py-5 border-b border-b-[#4d5066] ">
              <span className="w-6 h-6 border-2 border-[#393a4c] rounded-full ml-5  bg-gradient-to-br from-[#57ddff] to-[#c058f3]"></span>
              <Image
                src="/images/icon-check.svg"
                width={11}
                height={11}
                className="absolute left-[50px] sm:left-[-30px] sm:relative"
              />
              <p className="text-sm text-[#4d5066] line-through sm:ml-[-12px]">
                Complete online Javascript course
              </p>
              <Image
                src="/images/icon-cross.svg"
                width={15}
                height={15}
                className="absolute right-10 sm:right-[-210px] sm:relative"
              />
            </div>
          </li>
          <li>
            <div className="flex items-center justify-left bg-[#25273c] gap-3 mx-6 sm:mx-0 rounded-sm py-5 border-b border-b-[#4d5066]">
              <span className="w-6 h-6 border-2 border-[#393a4c] rounded-full ml-5 "></span>
              <p className="text-sm text-[#c4d4e8] sm:pl-3 sm:w-[222px]">
                Jog around the park 3x
              </p>
              <Image
                src="/images/icon-cross.svg"
                width={15}
                height={15}
                className="absolute right-10 sm:right-[-210px] sm:relative"
              />
            </div>
          </li>
          <li>
            <div className="flex items-center justify-left bg-[#25273c] gap-3 mx-6 sm:mx-0 rounded-sm py-5 border-b border-b-[#4d5066]">
              <span className="w-6 h-6 border-2 border-[#393a4c] rounded-full ml-5 "></span>
              <p className="text-sm text-[#c4d4e8] sm:pl-3 sm:w-[222px]">
                Jog around the park 3x
              </p>
              <Image
                src="/images/icon-cross.svg"
                width={15}
                height={15}
                className="absolute right-10 sm:right-[-210px] sm:relative"
              />
            </div>
          </li>
          <li>
            <div className="flex items-center justify-left bg-[#25273c] gap-3 mx-6 sm:mx-0 rounded-sm py-5 border-b border-b-[#4d5066]">
              <span className="w-6 h-6 border-2 border-[#393a4c] rounded-full ml-5 "></span>
              <p className="text-sm text-[#c4d4e8] sm:pl-3 sm:w-[222px]">
                Jog around the park 3x
              </p>
              <Image
                src="/images/icon-cross.svg"
                width={15}
                height={15}
                className="absolute right-10 sm:right-[-210px] sm:relative"
              />
            </div>
          </li>
          <li>
            <div className="flex items-center justify-left bg-[#25273c] gap-3 mx-6 sm:mx-0 rounded-sm py-5 border-b border-b-[#4d5066]">
              <span className="w-6 h-6 border-2 border-[#393a4c] rounded-full ml-5 "></span>
              <p className="text-sm text-[#c4d4e8] sm:pl-3 sm:w-[222px]">
                Jog around the park 3x
              </p>
              <Image
                src="/images/icon-cross.svg"
                width={15}
                height={15}
                className="absolute right-10 sm:right-[-210px] sm:relative"
              />
            </div>
          </li>
          <li>
            <div className="flex items-center justify-left bg-[#25273c] gap-3 mx-6 sm:mx-0 rounded-sm py-5 border-b border-b-[#4d5066]">
              <span className="w-6 h-6 border-2 border-[#393a4c] rounded-full ml-5 "></span>
              <p className="text-sm text-[#c4d4e8] sm:pl-3 sm:w-[222px]">
                Jog around the park 3x
              </p>
              <Image
                src="/images/icon-cross.svg"
                width={15}
                height={15}
                className="absolute right-10 sm:right-[-210px] sm:relative"
              />
            </div>
          </li>

          <li>
            <div className="flex items-center justify-between bg-[#25273c] gap-3 mx-6 sm:mx-0 rounded-sm py-5 px-5 sm:border-b sm:border-b-[#4d5066] sm:hidden">
              <p className="text-sm text-[#4d5066]">5 items left</p>
              <p className="text-sm text-[#4d5066]">Clear completed</p>
            </div>
          </li>
        </ul>
        <div id="sort" className="mt-5  sm:mt-0">
          <div className="flex items-center justify-center sm:justify-between bg-[#25273c] gap-3 mx-6 sm:mx-0 rounded-sm py-5 px-5">
            <p className="text-sm text-[#4d5066] sm:block hidden">
              5 items left
            </p>
            <span className="flex sm:gap-3 gap-5">
              <p className="text-sm text-[#0073e6]">All</p>
              <p className="text-sm text-[#4d5066]">Active</p>
              <p className="text-sm text-[#4d5066]">Completed</p>
            </span>

            <p className="text-sm text-[#4d5066] sm:block hidden">
              Clear completed
            </p>
          </div>
        </div>
      </div>
      <p className="text-center mt-5 sm:py-9 my-3 text-[#4d5066]">
        Drag and drop to reorder list
      </p>
    </div>
  );
};

export default HomePage;
