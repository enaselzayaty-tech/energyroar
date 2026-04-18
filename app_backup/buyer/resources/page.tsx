"use client";

import { useResourceStore } from "@/app/store/useResourceStore";

export default function BuyerResourcesPage() {
const resources = useResourceStore((s) => s.resources);

return (
<div style={{ padding: 40 }}>
<h1>Available Resources</h1>

{resources.map((r) => (
<div key={r.id} style={{ border: "1px solid #ccc", padding: 16, marginBottom: 12 }}>
<strong>{r.name}</strong>
<p>{r.city}, {r.country}</p>
<p>Price: ${r.price}</p>
<p>Services: {r.services.join(", ")}</p>
</div>
))}
</div>
);
}