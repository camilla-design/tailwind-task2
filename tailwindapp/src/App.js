import React from "react";
import "./tailwind.css";

function App() {
  return (
    <div className="card-wrapper">
      <div className="mt-2">
        <p className="text-2xl text-card-heading font-bold">
          Becoming a full-stack developer
        </p>
        <p className="mt-2 text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
          enim reprehenderit nisi totam aspernatur expedita dicta!
        </p>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <img
            className="mr-4 w-10 h-10 object-cover rounded-full"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
            alt="avatar"
          />
          <p className="text-gray-700 font-bold">John Doe</p>
        </div>
        <a
          href="/"
          className="px-4 py-2 bg-gray-800 hover:bg-gray-600 text-white text-sm rounded"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default App;
