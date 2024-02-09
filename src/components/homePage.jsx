"use client";

import React, { useState } from "react";
import Image from "next/image";

const HomePage = ({ theme, changeTheme }) => {
  return (
    <div
      id="container "
      className="bg-cover h-[200px] sm:h-[320px] flex flex-col sm:items-center gap-3 bg-center  bg-[url('/images/bg-mobile-dark.jpg')] 
      sm:bg-cover 
      sm:bg-[url('/images/bg-desktop-dark.jpg')]"
    >
      <div
        id="head"
        className="flex items-center justify-between mx-6 pt-12 pb-7 sm:w-[550px] sm:mt-8"
      >
        <h1 className="text-3xl font-bold text-[#fafafa] tracking-[8px] sm:text-5xl sm:tracking-[14px]">
          TODO
        </h1>
        <button onClick={changeTheme}>
          <Image
            src="/images/icon-sun.svg"
            className="sm:w-8 sm:h-8 hover:cursor-pointer"
            width={20}
            height={20}
          />
        </button>
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
          placeholder="Create a new todo..."
          className={` ${
            theme == "dark" ? "bg-[#25273c]" : "bg-[#fafafa]"
          } rounded-md py-3 sm:py-5 text-[#484b6a] w-full focus:border-transparent focus:outline-none`}
        />
      </div>
      <div className="sm:w-[550px] sm:mt-5">
        <ul>
          {/* completed */}

          <li className="group">
            <div
              className={` shadow-xl flex items-center justify-left ${
                theme == "dark"
                  ? "bg-[#25273c] border-b border-b-[#4d5066]"
                  : "bg-[#fafafa] border-b border-b-[#d2d3db] "
              } bg-[#25273c] gap-3 mx-6 sm:mx-0 rounded-sm py-4  sm:py-5 `}
            >
              <span
                className={`w-6 h-6 border-2  ${
                  theme == "dark" ? "border-[#393a4c]" : "border-none"
                } rounded-full ml-5  bg-gradient-to-br from-[#57ddff] to-[#c058f3] hover:cursor-pointer`}
              ></span>
              <Image
                src="/images/icon-check.svg"
                width={11}
                height={11}
                className="absolute left-[50px] sm:left-[-30px] sm:relative"
              />
              <p
                className={`text-sm  ${
                  theme == "dark" ? "text-[#4d5066]" : "text-[#d2d3db]"
                } line-through sm:ml-[-12px] hover:cursor-pointer`}
              >
                Complete online Javascript course
              </p>
              <Image
                src="/images/icon-cross.svg"
                width={15}
                height={15}
                className="absolute sm:hidden right-10 sm:right-[-210px] sm:relative hover:cursor-pointer group-hover:block"
              />
            </div>
          </li>

          {/* uncompleted */}

          <li
            class={`shadow-xl justify-left group mx-6 flex items-center gap-3 rounded-sm  ${
              theme == "dark"
                ? "bg-[#25273c] border-b border-b-[#4d5066]"
                : "bg-[#fafafa] border-b-[1px] border-b-[#d2d3db]"
            } py-4 sm:mx-0 sm:py-5`}
          >
            <div
              class={`gradient ml-5 flex h-6 w-6 items-center justify-center rounded-full ${
                theme == "dark" ? "bg-[#393a4c]" : "bg-[#d2d3db]"
              }  from-[#57ddff] to-[#c058f3] hover:bg-gradient-to-br`}
            >
              <span
                class={`inner-gradient h-[22px] w-[22px] cursor-pointer rounded-full ${
                  theme == "dark" ? "bg-[#25273c]" : "bg-[#fafafa]"
                }`}
              ></span>
            </div>
            <p
              class={`text-sm text-[#484b6a] hover:cursor-pointer hover:text-[#484b6a] sm:w-[222px] sm:pl-3 ${
                theme == "dark" ? "text-[#484b6a]" : "text-[#484b6a]"
              }`}
            >
              Jog around the park 3x
            </p>
            <Image
              src="/images/icon-cross.svg"
              width={15}
              height={15}
              class="absolute right-10 sm:hidden hover:cursor-pointer group-hover:block sm:relative sm:right-[-210px]"
            />
          </li>
          <li
            class={`shadow-xl justify-left group mx-6 flex items-center gap-3 rounded-sm  ${
              theme == "dark"
                ? "bg-[#25273c] border-b border-b-[#4d5066]"
                : "bg-[#fafafa] border-b border-b-[#d2d3db]"
            } py-4 sm:mx-0 sm:py-5`}
          >
            <div
              class={`gradient ml-5 flex h-6 w-6 items-center justify-center rounded-full ${
                theme == "dark" ? "bg-[#393a4c]" : "bg-[#d2d3db]"
              }  from-[#57ddff] to-[#c058f3] hover:bg-gradient-to-br`}
            >
              <span
                class={`inner-gradient h-[22px] w-[22px] cursor-pointer rounded-full ${
                  theme == "dark" ? "bg-[#25273c]" : "bg-[#fafafa]"
                }`}
              ></span>
            </div>
            <p
              class={`text-sm text-[#484b6a] hover:cursor-pointer hover:text-[#484b6a] sm:w-[222px] sm:pl-3 ${
                theme == "dark" ? "text-[#484b6a]" : "text-[#484b6a]"
              }`}
            >
              Jog around the park 3x
            </p>
            <Image
              src="/images/icon-cross.svg"
              width={15}
              height={15}
              class="absolute right-10 sm:hidden hover:cursor-pointer group-hover:block sm:relative sm:right-[-210px]"
            />
          </li>
          <li
            class={`shadow-xl justify-left group mx-6 flex items-center gap-3 rounded-sm  ${
              theme == "dark"
                ? "bg-[#25273c] border-b border-b-[#4d5066]"
                : "bg-[#fafafa] border-b border-b-[#d2d3db]"
            } py-4 sm:mx-0 sm:py-5`}
          >
            <div
              class={`gradient ml-5 flex h-6 w-6 items-center justify-center rounded-full ${
                theme == "dark" ? "bg-[#393a4c]" : "bg-[#d2d3db]"
              }  from-[#57ddff] to-[#c058f3] hover:bg-gradient-to-br`}
            >
              <span
                class={`inner-gradient h-[22px] w-[22px] cursor-pointer rounded-full ${
                  theme == "dark" ? "bg-[#25273c]" : "bg-[#fafafa]"
                }`}
              ></span>
            </div>
            <p
              class={`text-sm text-[#484b6a] hover:cursor-pointer hover:text-[#484b6a] sm:w-[222px] sm:pl-3 ${
                theme == "dark" ? "text-[#484b6a]" : "text-[#484b6a]"
              }`}
            >
              Jog around the park 3x
            </p>
            <Image
              src="/images/icon-cross.svg"
              width={15}
              height={15}
              class="absolute right-10 sm:hidden hover:cursor-pointer group-hover:block sm:relative sm:right-[-210px]"
            />
          </li>
          <li
            class={`shadow-xl justify-left group mx-6 flex items-center gap-3 rounded-sm  ${
              theme == "dark"
                ? "bg-[#25273c] border-b border-b-[#4d5066]"
                : "bg-[#fafafa] border-b border-b-[#d2d3db]"
            } py-4 sm:mx-0 sm:py-5`}
          >
            <div
              class={`gradient ml-5 flex h-6 w-6 items-center justify-center rounded-full ${
                theme == "dark" ? "bg-[#393a4c]" : "bg-[#d2d3db]"
              }  from-[#57ddff] to-[#c058f3] hover:bg-gradient-to-br`}
            >
              <span
                class={`inner-gradient h-[22px] w-[22px] cursor-pointer rounded-full ${
                  theme == "dark" ? "bg-[#25273c]" : "bg-[#fafafa]"
                }`}
              ></span>
            </div>
            <p
              class={`text-sm text-[#484b6a] hover:cursor-pointer hover:text-[#484b6a] sm:w-[222px] sm:pl-3 ${
                theme == "dark" ? "text-[#484b6a]" : "text-[#484b6a]"
              }`}
            >
              Jog around the park 3x
            </p>
            <Image
              src="/images/icon-cross.svg"
              width={15}
              height={15}
              class="absolute right-10 sm:hidden hover:cursor-pointer group-hover:block sm:relative sm:right-[-210px]"
            />
          </li>
          <li
            class={`shadow-xl justify-left group mx-6 flex items-center gap-3 rounded-sm  ${
              theme == "dark"
                ? "bg-[#25273c] border-b border-b-[#4d5066]"
                : "bg-[#fafafa] border-b border-b-[#d2d3db]"
            } py-4 sm:mx-0 sm:py-5`}
          >
            <div
              class={`gradient ml-5 flex h-6 w-6 items-center justify-center rounded-full ${
                theme == "dark" ? "bg-[#393a4c]" : "bg-[#d2d3db]"
              }  from-[#57ddff] to-[#c058f3] hover:bg-gradient-to-br`}
            >
              <span
                class={`inner-gradient h-[22px] w-[22px] cursor-pointer rounded-full ${
                  theme == "dark" ? "bg-[#25273c]" : "bg-[#fafafa]"
                }`}
              ></span>
            </div>
            <p
              class={`text-sm text-[#484b6a] hover:cursor-pointer hover:text-[#484b6a] sm:w-[222px] sm:pl-3 ${
                theme == "dark" ? "text-[#484b6a]" : "text-[#484b6a]"
              }`}
            >
              Jog around the park 3x
            </p>
            <Image
              src="/images/icon-cross.svg"
              width={15}
              height={15}
              class="absolute right-10 sm:hidden hover:cursor-pointer group-hover:block sm:relative sm:right-[-210px]"
            />
          </li>

          <li>
            <div
              className={`flex items-center justify-between ${
                theme == "dark" ? "bg-[#25273c]" : "bg-[#fafafa]"
              } gap-3 mx-6 sm:mx-0 rounded-sm py-4 sm:py-5 px-5 sm:border-b sm:border-b-[#4d5066] sm:hidden shadow-xl`}
            >
              <p
                className={`text-sm ${
                  theme == "dark" ? "text-[#4d5066]" : "text-[#9394a5]"
                }`}
              >
                5 items left
              </p>
              <p
                className={`text-sm ${
                  theme == "dark" ? "text-[#4d5066]" : "text-[#9394a5]"
                }`}
              >
                Clear completed
              </p>
            </div>
          </li>
        </ul>
        <div id="sort" className="mt-5  sm:mt-0">
          <div
            className={`flex items-center justify-center sm:justify-between bg-[#25273c] ${
              theme == "dark" ? "bg-[#25273c]" : "bg-[#fafafa]"
            } gap-3 mx-6 sm:mx-0 rounded-sm py-4 sm:py-5 px-5  shadow-blur`}
          >
            <p className="text-sm text-[#4d5066] sm:block hidden">
              5 items left
            </p>
            <span className="flex sm:gap-3 gap-5">
              <p className="text-sm text-[#0073e6] hover:text-[#484b6a] hover:cursor-pointer">
                All
              </p>
              <p
                className={`text-sm  ${
                  theme == "dark"
                    ? "text-[#4d5066]"
                    : "text-[#9394a5] font-bold"
                } hover:text-[#484b6a] hover:cursor-pointer`}
              >
                Active
              </p>
              <p
                className={`text-sm  ${
                  theme == "dark"
                    ? "text-[#4d5066]"
                    : "text-[#9394a5] font-bold"
                } hover:text-[#484b6a] hover:cursor-pointer`}
              >
                Completed
              </p>
            </span>

            <p className="text-sm text-[#4d5066] sm:block hidden hover:text-[#484b6a] hover:cursor-pointer">
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
