"use client";

import { useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type Location = {
lat: number;
lng: number;
};

type Props = {
buyer: Location;
sellers: Location[];
};

export default function MapClient({ buyer, sellers }: Props) {
const [visible, setVisible] = useState(true);

return (
<div style={{ height: "100vh", width: "100%" }}>
<button
onClick={() => setVisible(false)}
style={{
position: "absolute",
zIndex: 1000,
top: 10,
left: 10,
padding: "8px 12px",
background: "black",
color: "white",
borderRadius: "6px",
cursor: "pointer",
}}
>
Clear Dot History
</button>

<MapContainer
center={[buyer.lat, buyer.lng]}
zoom={6}
style={{ height: "100%", width: "100%" }}
>
<TileLayer
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
attribution="© OpenStreetMap"
/>

{visible && (
<>
{/* BUYER */}
<CircleMarker
center={[buyer.lat, buyer.lng]}
radius={10}
pathOptions={{ color: "blue", fillColor: "blue", fillOpacity: 1 }}
>
<Popup>Buyer</Popup>
</CircleMarker>

{/* SELLERS */}
{sellers.map((s, i) => (
<CircleMarker
key={i}
center={[s.lat, s.lng]}
radius={8}
pathOptions={{ color: "red", fillColor: "red", fillOpacity: 1 }}
>
<Popup>Seller {i + 1}</Popup>
</CircleMarker>
))}
</>
)}
</MapContainer>
</div>
);
}
