"use client";

import { useResourceStore } from "@/app/store/useResourceStore";

export default function SellerResourcesPage() {
const resources = useResourceStore((s) => s.resources);

return (
<div style={{ padding: 40 }}>
<h1>My Listed Resources</h1>

{resources.length === 0 && <p>No resources listed yet.</p>}

{resources.map((r) => (
<div key={r.id} style={{ border: "1px solid #ccc", padding: 16, marginBottom: 12 }}>
<strong>{r.name}</strong>
<p>Category: {r.category}</p>
<p>Quantity: {r.quantity}</p>
<p>Price: ${r.price}</p>
<p>Location: {r.city}, {r.country}</p>
<p>Services: {r.services.join(", ") || "None"}</p>
</div>
))}
</div>
);
}