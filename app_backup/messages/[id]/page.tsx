"use client";

import { useParams } from "next/navigation";
import { useConversationStore } from "@/app/store/conversationStore";
import { useState } from "react";

export default function ChatPage() {
const { id } = useParams();
const conversation = useConversationStore(s =>
s.conversations.find(c => c.id === id)
);

const [messages, setMessages] = useState<string[]>([]);
const [input, setInput] = useState("");

if (!conversation) {
return <p>Conversation not found</p>;
}

return (
<div style={{ padding: 24 }}>
<h2>{conversation.resourceName}</h2>

<div
style={{
border: "1px solid #333",
padding: 12,
minHeight: 200,
marginBottom: 12,
}}
>
{messages.length === 0 && <p>No messages yet</p>}
{messages.map((m, i) => (
<div key={i}>{m}</div>
))}
</div>

<input
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder="Type message"
style={{ width: "100%", marginBottom: 8 }}
/>

<button
onClick={() => {
if (!input.trim()) return;
setMessages([...messages, input]);
setInput("");
}}
>
Send
</button>
</div>
);
}