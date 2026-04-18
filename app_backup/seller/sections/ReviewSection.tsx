"use client";

type Props = {
data: any;
onPublish: () => void;
};

export default function ReviewSection({ data, onPublish }: Props) {
const {
category,
type,
description,
quantity,
unit,
priceMin,
priceMax,
currency,
negotiable,
country,
city,
services,
} = data;

return (
<section className="space-y-6 border-t border-gray-700 pt-6">
<h2 className="text-xl font-semibold text-yellow-400">
Review & Publish
</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
<Item label="Category" value={category} />
<Item label="Resource Type" value={type} />
<Item label="Description" value={description || "—"} />

<Item
label="Quantity"
value={quantity ? `${quantity} ${unit || ""}` : "—"}
/>

<Item
label="Price"
value={
negotiable
? "Negotiable"
: priceMin || priceMax
? `${priceMin || "—"} – ${priceMax || "—"} ${currency || ""}`
: "—"
}
/>

<Item
label="Location"
value={[city, country].filter(Boolean).join(", ") || "—"}
/>

<div className="md:col-span-2">
<p className="text-gray-400 mb-2">Requested Services</p>
<div className="flex flex-wrap gap-2">
{services &&
Object.entries(services)
.filter(([, v]) => v)
.map(([k]) => (
<span
key={k}
className="px-3 py-1 rounded bg-yellow-400/10 border border-yellow-400 text-yellow-300 text-xs"
>
{k.toUpperCase()}
</span>
))}
{services &&
Object.values(services).every((v) => !v) && (
<span className="text-gray-500 text-xs">None</span>
)}
</div>
</div>
</div>

<button
onClick={onPublish}
className="mt-6 px-6 py-3 bg-yellow-400 text-black rounded hover:bg-yellow-300"
>
Publish Resource
</button>

<p className="text-xs text-gray-500">
Publishing creates a marketplace listing visible to buyers.
</p>
</section>
);
}

function Item({ label, value }: { label: string; value: string }) {
return (
<div className="border border-gray-700 rounded p-3">
<p className="text-gray-400">{label}</p>
<p className="text-gray-100">{value}</p>
</div>
);
}