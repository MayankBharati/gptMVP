import { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setError(null);

    try {
      // Add user message to chat history
      setChatHistory((prev) => [...prev, { type: "user", message: input }]);

      // Simulate an API call
      const mockResponse = await new Promise((resolve) =>
        setTimeout(() => resolve("This is the AI's response."), 1000)
      );

      // Add AI response to chat history
      setChatHistory((prev) => [...prev, { type: "ai", message: mockResponse }]);
    } catch (e) {
      setError("An error occurred. Please try again.",e.message);
    } finally {
      setLoading(false);
    }

    // Clear input field after submitting
    setInput("");
  };

  return (
    <div className={`app ${sidebarOpen ? "sidebar-open" : ""}`}>
      <div className="sidebar">
        <div className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
          &#9776;
        </div>
        <div className="sidebar-content">
          <h2>Questions</h2>
          <ul>
            {chatHistory
              .filter((msg) => msg.type === "user")
              .map((msg, index) => (
                <li key={index}>{msg.message}</li>
              ))}
          </ul>
        </div>
      </div>

      <div className="chat-container">
        <form onSubmit={handleSubmit} className="input-form">
          <input
            type="text"
            className="text-input"
            placeholder="Type your query..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="submit-button"
            disabled={!input || loading}
          >
            {loading ? "Loading..." : "Send"}
          </button>
        </form>

        <div className="output-area">
          {error && <p className="error-message">{error}</p>}
          <div className="chat-history">
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${msg.type === "user" ? "user-message" : "ai-message"}`}
              >
                <p>{msg.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
