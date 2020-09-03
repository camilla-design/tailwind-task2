import React from "react";
import "./tailwind.css";

function App() {
  return (
    <div className="container card-header">
      <header className="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-0 relative z-10">
        <div className="flex-1 flex justify-between items-center">
          <a href="/" className="text-xl font-bold">Logo</a>
        </div>

        <label for="menu-toggle" className="pointer-crusor lg:hidden block text-lg">
          menu
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

          <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
            <nav>
              <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                <li><a className="lg:p-4 py-3 px-0 block hover:dark" href="/">Register</a></li>
                <li><a className="lg:p-4 py-3 px-0 block hover:dark" href="/">Login</a></li>
              </ul>
            </nav>
          </div>
      </header>

      <main>
        <div className="lg:px-16 px-6 bg-white flex flex-wrap items-center absolute inset-0">
          <div className="content text-center flex-1">
          <h1 className="text-4xl">Build the <span class="span-color text-indigo-600">future</span></h1>
          <p className="text-sm font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat.</p>
            <button className="bg-black hover:bg-blue-700 text-white py-2 px-4 rounded ">
            Get Started
</button>
<button className="bg-gray-400 hover:bg-blue-700 text-black py-2 px-4 rounded m-4">
Learn More
</button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:w-auto w-full flex-1" >
          <div class="h-48">
          <img class="h-48 w-full object-cover" src="image.png" alt="computer" />
        </div>
        </div>
        </div>
      </main>


    </div>
  );
}

export default App;
