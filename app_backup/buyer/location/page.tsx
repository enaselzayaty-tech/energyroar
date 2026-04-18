"use client";

import { MapContainer, TileLayer, CircleMarker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function LocationPicker({
setPosition,
}: {
setPosition: (pos: [number, number]) => void;
}) {
useMapEvents({
click(e) {
const coords: [number, number] = [e.latlng.lat, e.latlng.lng];
setPosition(coords);
localStorage.setItem("buyerLocation", JSON.stringify(coords));
},
});
return null;
}

export default function BuyerLocationPage() {
const router = useRouter();
const [position, setPosition] = useState<[number, number] | null>(null);

useEffect(() => {
const saved = localStorage.getItem("buyerLocation");
if (saved) setPosition(JSON.parse(saved));
}, []);

const handleNext = () => {
if (!position) return;
router.push("/confirm");
};

return (
<main className="min-h-screen bg-black text-white px-4 flex flex-col items-center justify-center">
{/* Header */}
<h1 className="text-4xl font-bold mb-4">
ROAR <span className="text-sm align-top">🇨🇦</span>
</h1>

{/* Title */}
<h2 className="text-2xl font-semibold mb-2 text-center">
Choose your preferred location
</h2>

<p className="text-gray-400 mb-6 text-center max-w-md">
Click on the map to select where you want to find assets.
</p>

{/* Map */}
<div className="w-full max-w-2xl h-[400px] mb-8 rounded-xl overflow-hidden border border-gray-700">
<MapContainer
center={[20, 0]}
zoom={2}
style={{ height: "100%", width: "100%" }}
>
<TileLayer
attribution="&copy; OpenStreetMap"
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>

<LocationPicker setPosition={setPosition} />

{position && (
<CircleMarker
center={position}
radius={8}
pathOptions={{
color: "blue",
fillColor: "blue",
fillOpacity: 0.9,
}}
/>
)}
</MapContainer>
</div>

{/* Next button */}
<button
onClick={handleNext}
disabled={!position}
className={`px-10 py-3 rounded-full font-semibold transition
${
position
? "bg-yellow-500 text-black hover:bg-yellow-400"
: "bg-gray-700 text-gray-400 cursor-not-allowed"
}`}
>
NEXT
</button>

{/* Helper */}
<p className="text-xs text-gray-500 mt-6 text-center">
Your location is used only for matching by proximity.
</p>
</main>
);
}