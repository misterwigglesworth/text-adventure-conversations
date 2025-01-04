// src/components/Conversation.jsx
import { conversation } from "../data/conversation";
import "./conversation.css";

const Conversation = () => {
  // Helper function to format text with XML tags
  const formatText = (text) => {
    return text.split(/(<[^>]+>)/).map((part, index) => {
      if (part.startsWith("<") && part.endsWith(">")) {
        return <span key={index}>{part}</span>;
      }
      return part;
    });
  };

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
          <pre className="text">{formatText(entry.text)}</pre>
        </div>
      ))}
    </div>
  );
};

export default Conversation;
