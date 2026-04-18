// app/seller/location/page.tsx
"use client";

import { useState } from "react";

const countries = {
Canada: ["Alberta", "British Columbia", "Saskatchewan", "Ontario"],
USA: ["Texas", "California", "North Dakota", "Pennsylvania"],
Egypt: ["Matrouh", "Red Sea", "Aswan", "Sinai"],
Australia: ["Western Australia", "Queensland", "New South Wales"],
SaudiArabia: ["Eastern Province", "Riyadh", "Tabuk"],
};

export default function ResourceLocationPage() {
const [country, setCountry] = useState("");
const [region, setRegion] = useState("");
const [latitude, setLatitude] = useState("");
const [longitude, setLongitude] = useState("");

return (
<div className="min-h-screen bg-black text-yellow-500 p-8">
<h1 className="text-3xl font-bold mb-6">
Resource Location
</h1>

<div className="max-w-3xl border border-yellow-600 rounded-lg p-6 space-y-6">

{/* COUNTRY */}
<div>
<label className="block mb-1 font-semibold">Country</label>
<select
value={country}
onChange={(e) => {
setCountry(e.target.value);
setRegion("");
}}
className="w-full bg-black border border-yellow-600 p-2 rounded"
>
<option value="">Select country</option>
{Object.keys(countries).map((c) => (
<option key={c} value={c}>
{c}
</option>
))}
</select>
</div>

{/* REGION / CITY */}
<div>
<label className="block mb-1 font-semibold">
Region / City
</label>
<select
value={region}
onChange={(e) => setRegion(e.target.value)}
className="w-full bg-black border border-yellow-600 p-2 rounded"
disabled={!country}
>
<option value="">
{country ? "Select region" : "Select country first"}
</option>
{country &&
countries[country as keyof typeof countries].map((r) => (
<option key={r} value={r}>
{r}
</option>
))}
</select>
</div>

{/* COORDINATES */}
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block mb-1 font-semibold">Latitude</label>
<input
type="number"
step="any"
value={latitude}
onChange={(e) => setLatitude(e.target.value)}
className="w-full bg-black border border-yellow-600 p-2 rounded"
placeholder="e.g. 51.0447"
/>
</div>

<div>
<label className="block mb-1 font-semibold">Longitude</label>
<input
type="number"
step="any"
value={longitude}
onChange={(e) => setLongitude(e.target.value)}
className="w-full bg-black border border-yellow-600 p-2 rounded"
placeholder="e.g. -114.0719"
/>
</div>
</div>

{/* MAP PLACEHOLDER */}
<div>
<label className="block mb-2 font-semibold">
Map Preview
</label>
<div className="h-52 bg-gray-800 border border-yellow-600 rounded flex items-center justify-center text-sm opacity-70">
Map will appear here after coordinates are saved
</div>
</div>

{/* ACTION */}
<div className="flex justify-between">
<button className="border border-yellow-600 px-6 py-2 rounded hover:bg-yellow-900">
Back
</button>

<button className="bg-yellow-600 text-black px-6 py-2 rounded font-semibold hover:bg-yellow-500">
Save & Continue
</button>
</div>

</div>
</div>
);
}