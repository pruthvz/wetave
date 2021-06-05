import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg";

function ContactDetail(props) {
  const { name, email } = props.location.state.contact;

  return (
    <div
      className="main dark:bg-gray-800 bg-gray-100"
      style={{ paddingTop: "220px", paddingBottom: "220px" }}
    >
      <div class="flex flex-wrap">
        <div class="md:w-1/2 lg:w-1/3 py-4 px-4 mx-auto">
          <div class="">
            <div class="bg-white relative shadow p-2 rounded-lg text-gray-800 hover:shadow-lg cursor-pointer dark:bg-gray-900 dark:hover:shadow-2xl transform  scale-105 hover:scale-110 transtion duration-200">
              <div class="right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-white bg-purple-600 px-2 py-1 bg-orange-500 ">
                10 Follower
              </div>
              <img
                src="https://images.pexels.com/photos/1054289/pexels-photo-1054289.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="banenr"
                class="h-32 rounded-lg w-full object-cover"
              />
              <div class="flex justify-center">
                <img
                  src={user}
                  alt="user profile picture"
                  class="rounded-full -mt-6 border-4 object-center object-cover border-white mr-2 h-16 w-16"
                />
              </div>
              <div class="py-2 px-2">
                <div class=" font-bold font-title text-center dark:text-gray-100">
                  {name}
                </div>

                <div class="text-1xl font-light text-center my-2 dark:text-gray-300">
                  {email}
                </div>
              </div>
            </div>

            <div className="center-div pt-10">
              <center>
                <Link to="/wetave/">
                  <button className="ui p-3 pl-5 pr-5 rounded-lg text-white bg-purple-600 hover:bg-purple-800 outline-none focus:outline-none">
                    View all Contacts
                  </button>
                </Link>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetail;
