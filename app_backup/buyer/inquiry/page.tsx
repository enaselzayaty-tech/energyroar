// app/buyer/inquiry/page.tsx
"use client";

import { useState } from "react";

export default function BuyerInquiryPage() {
const [resource, setResource] = useState("Crude Oil");
const [quantity, setQuantity] = useState("");
const [unit, setUnit] = useState("Barrels");
const [price, setPrice] = useState("");
const [currency, setCurrency] = useState("USD");
const [deliveryTerm, setDeliveryTerm] = useState("");
const [message, setMessage] = useState("");

return (
<div className="min-h-screen bg-black text-yellow-500 p-8">
<h1 className="text-3xl font-bold mb-6">
Buyer Inquiry & Offer
</h1>

<p className="opacity-80 mb-8 max-w-3xl">
Submit a formal inquiry to the seller. This information will be reviewed
before any negotiation or transaction begins.
</p>

<div className="max-w-3xl border border-yellow-600 rounded-lg p-6 space-y-6">

{/* RESOURCE */}
<div>
<label className="block mb-1 font-semibold">Resource</label>
<select
value={resource}
onChange={(e) => setResource(e.target.value)}
className="w-full bg-black border border-yellow-600 p-2 rounded"
>
<option>Crude Oil</option>
<option>Natural Gas</option>
<option>Salt</option>
<option>Lithium</option>
<option>Copper</option>
<option>Gold</option>
<option>Fresh Water</option>
</select>
</div>

{/* QUANTITY */}
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block mb-1 font-semibold">Requested Quantity</label>
<input
type="number"
value={quantity}
onChange={(e) => setQuantity(e.target.value)}
className="w-full bg-black border border-yellow-600 p-2 rounded"
placeholder="e.g. 10,000"
/>
</div>

<div>
<label className="block mb-1 font-semibold">Unit</label>
<select
value={unit}
onChange={(e) => setUnit(e.target.value)}
className="w-full bg-black border border-yellow-600 p-2 rounded"
>
<option>Barrels</option>
<option>Tons</option>
<option>Cubic meters</option>
<option>BCF</option>
<option>Liters</option>
</select>
</div>
</div>

{/* PRICE */}
<div className="grid grid-cols-3 gap-4">
<div>
<label className="block mb-1 font-semibold">Target Price</label>
<input
type="number"
value={price}
onChange={(e) => setPrice(e.target.value)}
className="w-full bg-black border border-yellow-600 p-2 rounded"
placeholder="e.g. 70"
/>
</div>

<div>
<label className="block mb-1 font-semibold">Currency</label>
<select
value={currency}
onChange={(e) => setCurrency(e.target.value)}
className="w-full bg-black border border-yellow-600 p-2 rounded"
>
<option>USD</option>
<option>CAD</option>
<option>EUR</option>
<option>GBP</option>
</select>
</div>

<div>
<label className="block mb-1 font-semibold">Delivery Term</label>
<select
value={deliveryTerm}
onChange={(e) => setDeliveryTerm(e.target.value)}
className="w-full bg-black border border-yellow-600 p-2 rounded"
>
<option value="">Select</option>
<option>FOB</option>
<option>CIF</option>
<option>EXW</option>
<option>Delivered</option>
</select>
</div>
</div>

{/* MESSAGE */}
<div>
<label className="block mb-1 font-semibold">
Message to Seller (optional)
</label>
<textarea
value={message}
onChange={(e) => setMessage(e.target.value)}
className="w-full bg-black border border-yellow-600 p-2 rounded h-28"
placeholder="Timeline, inspection requirements, preferred terms..."
/>
</div>

{/* CONFIRMATION */}
<div className="border border-yellow-700 rounded p-4 text-sm opacity-80">
By submitting this inquiry, you acknowledge that this is a non-binding
commercial expression of interest and subject to negotiation and due diligence.
</div>

{/* ACTION */}
<div className="flex justify-end">
<button className="bg-yellow-600 text-black px-8 py-3 rounded font-semibold hover:bg-yellow-500">
Submit Inquiry
</button>
</div>

</div>
</div>
);
}