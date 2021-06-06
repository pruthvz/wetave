import React from "react";

function Footer() {
  return (
    <div>
      <div class="bg-gray-300 dark:bg-gray-900  p-5">
        <footer class="flex flex-wrap items-center justify-between p-3 m-auto">
          <div class="container mx-auto flex flex-col flex-wrap items-center justify-between">
            <ul class="flex mx-auto text-white text-center">
              <a
                href="https://github.com/pruthvz/"
                target="_blank"
                rel="noreferrer"
              >
                <li class="p-2 cursor-pointer hover:underline text-black dark:text-white">
                  Projects
                </li>
              </a>
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                <li class="p-2 cursor-pointer hover:underline text-black dark:text-white">
                  React.js
                </li>
              </a>
              <a
                href="https://github.com/pruthvz/wetave"
                target="_blank"
                rel="noreferrer"
              >
                <li class="p-2 cursor-pointer hover:underline text-black dark:text-white">
                  View Code
                </li>
              </a>
            </ul>
            <ul class="flex mx-auto text-white text-center">
              <a
                href="https://github.com/pruthvz"
                target="_blank"
                rel="noreferrer"
              >
                <li class="p-2 cursor-pointer">
                  <i class="fab fa-github text-2xl text-black dark:text-white dark:hover:text-purple-600"></i>
                </li>
              </a>
              <a
                href="https://twitter.com/justpruthvi"
                target="_blank"
                rel="noreferrer"
              >
                <li class="p-2 cursor-pointer">
                  <i class="fab fa-twitter text-2xl text-black dark:text-white dark:hover:text-purple-600"></i>
                </li>
              </a>
            </ul>
            <div class="flex mx-auto text-black dark:text-white text-center">
              Copyright wetave © 2021
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
