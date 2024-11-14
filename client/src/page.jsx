export const Page = () => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <aside className="w-full md:w-1/4 bg-gray-800 p-4 flex flex-col">
        <div className="flex items-center mb-4">
          <i className="fas fa-bars text-xl"></i>
          <i className="fas fa-pen ml-4 text-xl"></i>
        </div>
        <div className="flex items-center mb-4">
          <i className="fas fa-comments text-xl"></i>
          <span className="ml-4">ChatGPT</span>
        </div>
        <div className="flex items-center mb-4">
          <img
            src="https://placehold.co/24x24"
            alt="LinkedIn icon"
            className="rounded-full"
          />
          <span className="ml-4">Viral LinkedIn Post For...</span>
        </div>
        <div className="flex items-center mb-4">
          <img
            src="https://placehold.co/24x24"
            alt="Competitive Programming icon"
            className="rounded-full"
          />
          <span className="ml-4">Competitive Program...</span>
        </div>
        <div className="flex items-center mb-4">
          <i className="fas fa-th-large text-xl"></i>
          <span className="ml-4">Explore GPTs</span>
        </div>
        <div className="mt-4">
          <h2 className="text-gray-400 mb-2">Today</h2>
          <ul>
            <li className="mb-2">Query root error fix</li>
            <li className="mb-2">EADDRINUSE Port Conflict Fix</li>
            <li className="mb-2">Async Functions in GraphQL</li>
            <li className="mb-2">MongoDB Relationships Explained</li>
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="text-gray-400 mb-2">Previous 7 Days</h2>
          <ul>
            <li className="mb-2">JavaScript reduce explanation</li>
            <li className="mb-2">Hide Forked Repos</li>
            <li className="mb-2">Travel Assistance Flow Update</li>
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="text-gray-400 mb-2">Previous 30 Days</h2>
          <ul>
            <li className="mb-2">Events Component Code Fix</li>
            <li className="mb-2">React Component Conversion</li>
            <li className="mb-2">Framer Motion Text Animation</li>
          </ul>
        </div>
        <div className="mt-auto">
          <button className="bg-gray-700 text-white py-2 px-4 rounded-full w-full">
            Upgrade plan
          </button>
          <p className="text-gray-400 text-sm mt-2">
            More access to the best models
          </p>
        </div>
      </aside>
      <main className="w-full md:w-3/4 flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl mb-4">What can I help with?</h1>
        <div className="flex items-center bg-gray-800 rounded-full w-full md:w-3/4 p-2 mb-4">
          <i className="fas fa-paperclip text-xl ml-2"></i>
          <input
            type="text"
            placeholder="Message ChatGPT"
            className="bg-transparent text-white w-full ml-2 outline-none"
          />
          <i className="fas fa-paper-plane text-xl mr-2"></i>
        </div>
        <div className="flex flex-wrap justify-center space-x-2 md:space-x-4">
          <button className="bg-gray-700 text-white py-2 px-4 rounded-full mb-2">
            Create image
          </button>
          <button className="bg-gray-700 text-white py-2 px-4 rounded-full mb-2">
            Get advice
          </button>
          <button className="bg-gray-700 text-white py-2 px-4 rounded-full mb-2">
            Summarize text
          </button>
          <button className="bg-gray-700 text-white py-2 px-4 rounded-full mb-2">
            Analyze data
          </button>
          <button className="bg-gray-700 text-white py-2 px-4 rounded-full mb-2">
            Code
          </button>
          <button className="bg-gray-700 text-white py-2 px-4 rounded-full mb-2">
            More
          </button>
        </div>
        <p className="text-gray-400 text-sm mt-4">
          ChatGPT can make mistakes. Check important info.
        </p>
      </main>
    </div>
  );
};
