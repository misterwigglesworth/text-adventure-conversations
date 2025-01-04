// src/components/Conversation.jsx
import { conversation } from "../data/conversation";
import "./conversation.css";

const Conversation = () => {
  return (
    <div className="conversation">
      {conversation.map((entry, index) => (
        <div key={index} className={`message ${entry.type}`}>
          {entry.type === "thinking" && (
            <div className="thinking-header">
              <span className="ai-badge">
                <span>🤖</span>
                <span>AI THINKING</span>
              </span>
            </div>
          )}
          {entry.type === "command" && (
            <div className="command-header">
              <span className="ai-badge">
                <span>⚡</span>
                <span>AI ACTION</span>
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
