import React from "react";

function Footer() {
  return (
    <div>
      <div class="bg-gray-300 dark:bg-gray-900  p-5">
        <footer class="flex flex-wrap items-center justify-between p-3 m-auto">
          <div class="container mx-auto flex flex-col flex-wrap items-center justify-between">
            <ul class="flex mx-auto text-white text-center">
              <li class="p-2 cursor-pointer hover:underline text-black dark:text-white">
                Project
              </li>
              <li class="p-2 cursor-pointer hover:underline text-black dark:text-white">
                React.js
              </li>
              <li class="p-2 cursor-pointer hover:underline text-black dark:text-white">
                View Code
              </li>
            </ul>
            <ul class="flex mx-auto text-white text-center">
              <li class="p-2 cursor-pointer">
                <i class="fab fa-github text-2xl text-black dark:text-white dark:hover:text-purple-600"></i>
              </li>
              <li class="p-2 cursor-pointer">
                <i class="fab fa-twitter text-2xl text-black dark:text-white dark:hover:text-purple-600"></i>
              </li>
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
