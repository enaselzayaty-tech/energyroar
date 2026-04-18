// app/seller/[id]/page.tsx
import { notFound } from "next/navigation";

const resourceData: Record<string, any> = {
"oil-001": {
name: "Crude Oil – Light Sweet",
category: "Energy",
quantity: "50,000 barrels",
price: "$72 / barrel",
location: "Alberta, Canada",
status: "Active",
},
"gas-002": {
name: "Natural Gas",
category: "Energy",
quantity: "2 BCF",
price: "Negotiable",
location: "Texas, USA",
status: "In Negotiation",
},
"salt-003": {
name: "Industrial Salt",
category: "Minerals",
quantity: "100,000 tons",
price: "$40 / ton",
location: "Egypt",
status: "Active",
},
};

export default function SellerResourceDetail({
params,
}: {
params: { id: string };
}) {
const resource = resourceData[params.id];

if (!resource) return notFound();

return (
<div className="min-h-screen bg-black text-gold p-8">
{/* HEADER */}
<div className="mb-6">
<h1 className="text-3xl font-bold">{resource.name}</h1>
<p className="opacity-80">
{resource.category} • Status: {resource.status}
</p>
</div>

{/* MAIN GRID */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/* LEFT CONTENT */}
<div className="md:col-span-2 space-y-4 border border-yellow-600 p-6 rounded-lg">
<h2 className="text-xl font-semibold">Resource Details</h2>
<p><strong>Quantity:</strong> {resource.quantity}</p>
<p><strong>Price:</strong> {resource.price}</p>
<p><strong>Location:</strong> {resource.location}</p>

<div className="mt-4">
<h3 className="font-semibold">Logistics & Services</h3>
<ul className="list-disc list-inside opacity-80">
<li>Logistics: Not selected</li>
<li>Financing: Not selected</li>
<li>Certification: Pending</li>
<li>Inspection (QS): Required</li>
</ul>
</div>
</div>

{/* MAP PLACEHOLDER */}
<div className="border border-yellow-600 p-6 rounded-lg">
<h2 className="text-xl font-semibold mb-2">Location Map</h2>
<div className="h-48 bg-gray-800 flex items-center justify-center rounded">
MAP PLACEHOLDER
</div>
</div>
</div>

{/* BUYER ACTIVITY */}
<div className="mt-8 border border-yellow-600 p-6 rounded-lg">
<h2 className="text-xl font-semibold mb-2">Buyer Activity</h2>
<p className="opacity-80">No buyer inquiries yet.</p>
</div>
</div>
);
}