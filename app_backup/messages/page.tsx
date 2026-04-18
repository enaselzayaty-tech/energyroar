import Link from "next/link";

export default function MessagesInbox() {
return (
<div style={{ padding: 24 }}>
<h2>Inbox</h2>

<Link href="/messages/test-123">
Open Test Conversation
</Link>
</div>
);
}
