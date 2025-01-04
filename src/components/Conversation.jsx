// src/components/Conversation.jsx
import { conversation } from "../data/conversation";
import "./Conversation.css";
import { FaBrain, FaPlay } from "react-icons/fa"; // Import icons

const Conversation = () => {
  return (
    <div className="conversation">
      {conversation.map((entry, index) => (
        <div key={index} className={`message ${entry.type}`}>
          {entry.type === "thinking" && (
            <div className="thinking-header">
              <span className="ai-badge">
                <FaBrain style={{ marginRight: "0.3rem" }} />
                AI THINKING
              </span>
            </div>
          )}
          {entry.type === "command" && (
            <div className="command-header">
              <span className="ai-badge">
                <FaPlay style={{ marginRight: "0.3rem" }} />
                AI ACTION
              </span>
            </div>
          )}
          <pre className="text">{entry.text}</pre>
        </div>
      ))}
    </div>
  );
};

export default Conversation;
