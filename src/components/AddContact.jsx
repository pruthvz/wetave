import React from "react";
import { Link } from "react-router-dom";

// CLASS METHOD
class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields need to be filled");
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/wetave/");
  };

  render() {
    return (
      <div className="ui main" style={{ minHeight: "70vh" }}>
        <div class="flex flex-col h-screen bg-gray-200 dark:bg-gray-700 transiton duration-200">
          <div class="grid place-items-center mx-2 my-20 sm:my-auto">
            <div
              class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg dark:bg-gray-800"
            >
              <h2 class="text-center font-semibold text-3xl lg:text-4xl text-gray-800 dark:text-gray-300">
                Add New Contact
              </h2>

              <form class="mt-10" onSubmit={this.add}>
                {/* NAME */}
                <label
                  for="name"
                  class="block mt-2 text-xs font-semibold text-gray-600 uppercase dark:text-gray-400"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="name"
                  name="name"
                  placeholder="name"
                  autocomplete="current-name"
                  class="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200 dark:bg-gray-800 dark:text-gray-300"
                  required
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                />

                {/* EMAIL */}
                <label
                  for="email"
                  class="block text-xs font-semibold text-gray-600 uppercase dark:text-gray-400"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="e-mail address"
                  autocomplete="email"
                  class="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200 dark:bg-gray-800 dark:text-gray-300"
                  required
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />

                <button
                  // type="submit"
                  class="w-full py-3 mt-10 bg-purple-600 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-purple-800 hover:shadow-none dark:bg-gray-600 dark:hover:bg-gray-700 transtion duration-200"
                >
                  Add Contact
                </button>

                <div class="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                  <Link to="/wetave/">
                    <a class="flex-2 underline dark:text-white">
                      View Contacts
                    </a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddContact;
