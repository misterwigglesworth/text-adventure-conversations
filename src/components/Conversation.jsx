// src/components/Conversation.jsx
import { conversation } from "../data/conversation";
import "./conversation.css";

const interactableWords = {
  examinable: [
    "sensor",
    "switch",
    "lights",
    "drawers",
    "batteries",
    "appliances",
    "note",
    "center",
    "flashlight",
    "electrical panel",
    "workbench",
    "tools",
  ],
  useable: ["sensor", "switch", "drawers", "batteries", "flashlight"],
  takeable: ["batteries", "flashlight"],
};

const Conversation = () => {
  const formatText = (text, messageType) => {
    // First handle XML tags
    const parts = text
      .split(/(<[^>]+>|Congratulations!)/)
      .map((part, index) => {
        if (part.startsWith("<") && part.endsWith(">")) {
          return (
            <span key={`xml-${index}`} className="xml-tag">
              {part}
            </span>
          );
        }
        if (part === "Congratulations!") {
          return (
            <span key={`celebration-${index}`} className="celebration">
              {part}
            </span>
          );
        }

        // Only process interactable words for narration messages
        if (messageType === "narration" || messageType === "command") {
          const words = part.split(/(\s+)/);
          return words.map((word, wordIndex) => {
            const lowerWord = word.toLowerCase();
            const interactions = [];

            if (interactableWords.examinable.includes(lowerWord))
              interactions.push("examinable");
            if (interactableWords.useable.includes(lowerWord))
              interactions.push("useable");
            if (interactableWords.takeable.includes(lowerWord))
              interactions.push("takeable");

            if (interactions.length > 0) {
              return (
                <span
                  key={`word-${index}-${wordIndex}`}
                  className={`interactive ${interactions.join(" ")}`}
                  data-interactions={interactions.join(", ")}
                >
                  {word}
                </span>
              );
            }
            return word;
          });
        }

        // For non-narration messages, return the text as-is
        return part;
      });

    return parts;
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
          <pre className="text">{formatText(entry.text, entry.type)}</pre>
        </div>
      ))}
    </div>
  );
};

export default Conversation;
