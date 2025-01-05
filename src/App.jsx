// src/App.jsx
import { useState } from "react";
import Conversation from "./components/Conversation";
import ConversationSelector from "./components/ConversationSelector";
import "./App.css";

// Import all conversation files
import { conversation as sonnetConversation } from "./data/sonnet-3.5";
import { conversation as llamaConversation } from "./data/llama-3.3-70b";

function App() {
  const conversations = {
    "sonnet-3.5": {
      title: "Power Outage Adventure",
      model: "Sonnet 3.5",
      data: sonnetConversation,
    },
    "llama-3.3-70b": {
      title: "Power Outage Adventure",
      model: "LLaMA 3.3 70B",
      data: llamaConversation,
    },
  };

  const [selectedConversation, setSelectedConversation] = useState(
    Object.keys(conversations)[0]
  );

  return (
    <div className="app">
      <h1>Power Outage Text Adventure</h1>
      <ConversationSelector
        conversations={conversations}
        onSelect={setSelectedConversation}
      />
      <Conversation conversation={conversations[selectedConversation].data} />
    </div>
  );
}

export default App;
