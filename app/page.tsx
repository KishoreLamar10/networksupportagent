"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./styles.module.css";

export default function Home() {
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage() {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: input }]);
    const userText = input;
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://genai-multi-agent-support.onrender.com/support",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: userText }),
        }
      );

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.answer || "No response" },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Error connecting to server." },
      ]);
    }

    setLoading(false);
  }

  function clearChat() {
    setMessages([]);
  }

  return (
    <main className={styles.container}>
      <div className={styles.chatWrapper}>
        <div className={styles.header}>
          🛠 GenAI Support Assistant
          <button className={styles.newChatButton} onClick={clearChat}>
            New Chat
          </button>
        </div>

        <div className={styles.chatBox}>
          {messages.map((msg, i) => (
            <div
              key={i}
              className={
                msg.role === "user" ? styles.userBubble : styles.assistantBubble
              }
            >
              {msg.content}
            </div>
          ))}

          {loading && (
            <div className={styles.assistantBubble}>Assistant is typing…</div>
          )}

          <div ref={endRef} />
        </div>

        <div className={styles.inputRow}>
          <input
            className={styles.input}
            placeholder="Ask something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button className={styles.sendButton} onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </main>
  );
}
