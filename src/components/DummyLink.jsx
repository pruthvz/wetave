import React from "react";
import oopsDev from "../images/oopsdev.png";
import spatepate from "../images/spatepate.png";
import weeeProject from "../images/weee.png";

function DummyLink() {
  return (
    <div
      className="main dark:bg-gray-800 bg-gray-200"
      style={{ paddingTop: "120px", paddingBottom: "310px" }}
    >
      <h2 class="text-gray-800 dark:text-gray-200 text-4xl text-center pb-10">
        Fun Projects
      </h2>
      <div class="flex flex-wrap">
        <div class="md:w-1/2 lg:w-1/3 py-4 px-4 transform hover:scale-105 transition duration-300">
          <div class=" ">
            <a href="https://ooopsdev.com/#/" target="_blank">
              <div class="bg-gray-100 dark:bg-gray-700 dark:text-gray-300 relative shadow p-2 rounded-lg text-gray-800 hover:shadow-lg">
                <div class="right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-white bg-purple-600 px-2 py-1 bg-orange-500 ">
                  Project 1
                </div>
                <img
                  src={oopsDev}
                  class="h-32 rounded-lg w-full object-cover"
                />
                <div class="flex justify-center">
                  {/* <img
                    src="http://alpha.backer.id//assets/images/bg/avatar-default2.jpg"
                    class="rounded-full -mt-6 border-4 object-center object-cover border-white mr-2 h-16 w-16"
                  /> */}
                </div>
                <div class="py-2 px-2">
                  <div class=" font-bold font-title text-center dark:text-gray-100">
                    ooopsDev
                  </div>

                  <div class="text-sm font-light text-center my-2">
                    ooopsDev.com began as a joke, but I realized that this kind
                    of website would be helpful to more than just me. The
                    website's contains front-end and back-end resources.
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="md:w-1/2 lg:w-1/3 py-4 px-4 transform hover:scale-105 transition duration-300">
          <div class=" ">
            <a href="https://pruthvz.github.io/spatepate/" target="_blank">
              <div class="bg-gray-100 dark:bg-gray-700 dark:text-gray-300 relative shadow p-2 rounded-lg text-gray-800 hover:shadow-lg">
                <div class="right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-white bg-purple-600 px-2 py-1 bg-orange-500 ">
                  Project 2
                </div>
                <img
                  src={spatepate}
                  class="h-32 rounded-lg w-full object-cover"
                />
                <div class="flex justify-center">
                  {/* <img
                    src="http://alpha.backer.id//assets/images/bg/avatar-default3.jpg"
                    class="rounded-full -mt-6 border-4 object-center object-cover border-white mr-2 h-16 w-16"
                  /> */}
                </div>
                <div class="py-2 px-2">
                  <div class=" font-bold font-title text-center dark:text-gray-100">
                    spatepate
                  </div>

                  <div class="text-sm font-light text-center my-2">
                    I created spatepate for developers who are looking for
                    videos on how to code. I included the most of programming
                    languages and gathered beginner friendly and advanced
                    tutorials.
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="md:w-1/2 lg:w-1/3 py-4 px-4 transform hover:scale-105 transition duration-300">
          <div class=" ">
            <a href="https://project-weee.vercel.app/" target="_blank">
              <div class="bg-gray-100 dark:bg-gray-700 dark:text-gray-300 relative shadow p-2 rounded-lg text-gray-800 hover:shadow-lg">
                <div class="right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-white bg-purple-600 px-2 py-1 bg-orange-500 ">
                  Project 3
                </div>
                <img
                  src={weeeProject}
                  class="h-32 rounded-lg w-full object-cover"
                />
                <div class="flex justify-center">
                  {/* <img
                    src="http://alpha.backer.id//assets/images/bg/avatar-default1.jpg"
                    class="rounded-full -mt-6 border-4 object-center object-cover border-white mr-2 h-16 w-16"
                  /> */}
                </div>
                <div class="py-2 px-2">
                  <div class=" font-bold font-title text-center dark:text-gray-100">
                    Fun Project
                  </div>

                  <div class="text-sm font-light text-center my-2">
                    This was a fun experiment that I developed to learn the
                    fundamentals of Next.js before starting a new project with
                    Next.js.
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <center class="mx-auto pt-10">
          <a href="https://portfolio-pruthvi.vercel.app/">
            <button className="ui p-3 pl-5 pr-5 rounded-lg text-white bg-purple-600 hover:bg-purple-800 outline-none focus:outline-none">
              Visit my portfolio for more projects.
            </button>
          </a>
        </center>
      </div>
    </div>
  );
}

export default DummyLink;
