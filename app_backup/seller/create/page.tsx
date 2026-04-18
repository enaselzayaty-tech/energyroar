"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useResourceStore } from "@/app/store/useResourceStore";

export default function CreateResourcePage() {
const addResource = useResourceStore((s) => s.addResource);
const router = useRouter();

const [form, setForm] = useState({
category: "",
name: "",
quantity: "",
price: "",
country: "",
city: "",
services: [] as string[],
});

const toggleService = (service: string) => {
setForm((f) => ({
...f,
services: f.services.includes(service)
? f.services.filter((s) => s !== service)
: [...f.services, service],
}));
};

const submit = () => {
addResource({
id: crypto.randomUUID(),
...form,
});
router.push("/seller/resources");
};

return (
<div style={{ padding: 40 }}>
<h1>Seller – List Resource</h1>

<input placeholder="Category" onChange={(e) => setForm({ ...form, category: e.target.value })} />
<input placeholder="Resource name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
<input placeholder="Quantity" onChange={(e) => setForm({ ...form, quantity: e.target.value })} />
<input placeholder="Price (USD)" onChange={(e) => setForm({ ...form, price: e.target.value })} />
<input placeholder="Country" onChange={(e) => setForm({ ...form, country: e.target.value })} />
<input placeholder="City" onChange={(e) => setForm({ ...form, city: e.target.value })} />

<h3>Services</h3>
{["Logistics", "Financing", "Legal", "Certification", "Consulting"].map((s) => (
<label key={s} style={{ display: "block" }}>
<input type="checkbox" onChange={() => toggleService(s)} /> {s}
</label>
))}

<button onClick={submit}>Publish Resource</button>
</div>
);
}
