// src/components/ConversationSelector.jsx
import { useState } from "react";
import "./conversationSelector.css";

const ConversationSelector = ({ conversations, onSelect }) => {
  const [selected, setSelected] = useState(Object.keys(conversations)[0]);

  const handleChange = (e) => {
    const newSelection = e.target.value;
    setSelected(newSelection);
    onSelect(newSelection);
  };

  return (
    <div className="conversation-selector">
      <select value={selected} onChange={handleChange}>
        {Object.entries(conversations).map(([key, data]) => (
          <option key={key} value={key}>
            {data.title} - {data.model}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ConversationSelector;
