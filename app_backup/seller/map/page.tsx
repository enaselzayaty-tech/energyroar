// app/seller/map/page.tsx
"use client";

import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker, Popup, NavigationControl } from "react-map-gl";
import { useMemo, useState } from "react";

type SellerResource = {
id: string;
name: string;
resource: string;
lat: number;
lng: number;
status: "Active" | "Paused" | "In Negotiation";
};

const sellerResources: SellerResource[] = [
{
id: "oil-001",
name: "Crude Oil – Alberta",
resource: "Crude Oil",
lat: 51.0447,
lng: -114.0719,
status: "Active",
},
{
id: "gas-002",
name: "Natural Gas – Texas",
resource: "Natural Gas",
lat: 31.9686,
lng: -99.9018,
status: "In Negotiation",
},
{
id: "salt-003",
name: "Industrial Salt – Egypt",
resource: "Salt",
lat: 29.2108,
lng: 25.5195,
status: "Active",
},
];

export default function SellerMapPage() {
const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const [selectedId, setSelectedId] = useState<string | null>(null);
const [hidePaused, setHidePaused] = useState(false);

const pins = useMemo(() => {
const base = sellerResources.filter((r) => Number.isFinite(r.lat) && Number.isFinite(r.lng));
return hidePaused ? base.filter((r) => r.status !== "Paused") : base;
}, [hidePaused]);

const selected = useMemo(
() => pins.find((p) => p.id === selectedId) ?? null,
[pins, selectedId]
);

const initialView = useMemo(() => {
// Center on first pin, otherwise fallback.
const first = pins[0];
return {
longitude: first ? first.lng : -100,
latitude: first ? first.lat : 40,
zoom: first ? 3.2 : 2.5,
};
}, [pins]);

if (!token) {
return (
<div className="min-h-screen bg-black text-yellow-500 p-8">
<h1 className="text-2xl font-bold mb-2">Seller Resource Map</h1>
<p className="text-yellow-200">
Missing Mapbox token. Add <b>NEXT_PUBLIC_MAPBOX_TOKEN</b> in <b>.env.local</b>,
then restart <b>npm run dev</b>.
</p>
</div>
);
}

return (
<div className="min-h-screen bg-black text-yellow-500 p-6">
<div className="max-w-6xl mx-auto">
<div className="flex flex-wrap items-center justify-between gap-4 mb-4">
<h1 className="text-3xl font-bold">Seller Resource Map</h1>

<label className="flex items-center gap-2 text-sm border border-yellow-600 rounded px-3 py-2">
<input
type="checkbox"
checked={hidePaused}
onChange={(e) => setHidePaused(e.target.checked)}
/>
Hide paused listings
</label>
</div>

<div className="border border-yellow-600 rounded-lg overflow-hidden">
<div style={{ height: 520 }}>
<Map
mapboxAccessToken={token}
initialViewState={initialView}
mapStyle="mapbox://styles/mapbox/dark-v11"
attributionControl={true}
onClick={() => setSelectedId(null)}
>
<NavigationControl position="top-right" />

{pins.map((p) => (
<Marker
key={p.id}
longitude={p.lng}
latitude={p.lat}
anchor="bottom"
onClick={(e) => {
e.originalEvent.stopPropagation();
setSelectedId(p.id);
}}
>
<div
title={`${p.name} (${p.status})`}
style={{
width: 14,
height: 14,
borderRadius: 999,
background: "#facc15", // gold
boxShadow: "0 0 0 2px rgba(0,0,0,0.6)",
cursor: "pointer",
}}
/>
</Marker>
))}

{selected && (
<Popup
longitude={selected.lng}
latitude={selected.lat}
anchor="top"
closeButton={true}
closeOnClick={false}
onClose={() => setSelectedId(null)}
>
<div style={{ minWidth: 220 }}>
<div style={{ fontWeight: 700, marginBottom: 4 }}>{selected.name}</div>
<div style={{ fontSize: 12, opacity: 0.8 }}>
Resource: {selected.resource}
</div>
<div style={{ fontSize: 12, opacity: 0.8 }}>
Status: {selected.status}
</div>
<div style={{ fontSize: 12, opacity: 0.8 }}>
Lat/Lng: {selected.lat.toFixed(5)}, {selected.lng.toFixed(5)}
</div>
</div>
</Popup>
)}
</Map>
</div>
</div>

<div className="mt-4 text-sm opacity-80">
Gold pins are your resources. Click a pin for details.
</div>
</div>
</div>
);
}