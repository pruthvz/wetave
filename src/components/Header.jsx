import React from "react";
import useDarkMode from "./useDarkMode";
import { Link } from "react-router-dom";

const Header = () => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div>
      <div className="fixed top-0 p-5"></div>
      <nav
        class="bg-gray-200 dark:bg-gray-800 shadow dark:text-white"
        role="navigation"
      >
        <div class="container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap">
          <div class="mr-4 md:mr-8">
            <a href="#" rel="home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10 text-purple-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
          <div class="ml-auto md:hidden">
            <button
              class="flex items-center px-2 py-1 border rounded dark:bg-gray-600"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <div class="w-full md:w-auto md:flex-grow md:flex md:items-center">
            <ul class="flex flex-col mt-4 -mx-4 pt-4 md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:border-0">
              <li>
                <a
                  class="block px-4 py-1 md:p-2 lg:px-4 hover:text-gray-400 transition duration-200 text-purple-600"
                  href="#"
                  title="Link"
                >
                  Homepage
                </a>
              </li>
              <li>
                <a
                  class="block px-4 py-1 md:p-2 lg:px-4  hover:text-gray-400 transition duration-200"
                  href="#"
                  title="Active Link"
                >
                  Dummy Link
                </a>
              </li>
            </ul>
            <ul class="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
              <li>
                <div
                  class="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4"
                  id="nav-content"
                >
                  <div class="auth flex items-center w-full md:w-full p-5 md:p-2">
                    <Link to="/add">
                      <button class="bg-purple-600 text-gray-100 font-bold p-3 pl-10 pr-10 rounded hover:bg-purple-500 dark:bg-gray-700 dark:hover:bg-purple-700">
                        Add Contact
                      </button>
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <span
                  onClick={() => setTheme(colorTheme)}
                  className="w-10 h-10 bg-purple-700  rounded-full shadow-lg cursor-pointer text-white flex items-center justify-center ml-5 md:ml-2"
                >
                  {colorTheme === "light" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  )}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
