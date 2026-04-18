"use client";

import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function LeafletMap() {
// Example data (replace later with DB)
const sellers = [
{ id: 1, name: "Seller Calgary", lat: 51.0447, lng: -114.0719 },
{ id: 2, name: "Seller Toronto", lat: 43.6532, lng: -79.3832 },
];

const buyers = [
{ id: 1, name: "Buyer Ottawa", lat: 45.4215, lng: -75.6972 },
];

return (
<MapContainer
center={[56.1304, -106.3468]} // Canada center
zoom={4}
style={{ height: "500px", width: "100%" }}
>
<TileLayer
attribution="© OpenStreetMap"
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>

{/* Sellers = RED */}
{sellers.map((s) => (
<CircleMarker
key={`seller-${s.id}`}
center={[s.lat, s.lng]}
radius={10}
pathOptions={{ color: "red", fillColor: "red", fillOpacity: 0.8 }}
>
<Popup>
<strong>{s.name}</strong>
<br />
Seller
</Popup>
</CircleMarker>
))}

{/* Buyers = BLUE */}
{buyers.map((b) => (
<CircleMarker
key={`buyer-${b.id}`}
center={[b.lat, b.lng]}
radius={10}
pathOptions={{ color: "blue", fillColor: "blue", fillOpacity: 0.8 }}
>
<Popup>
<strong>{b.name}</strong>
<br />
Buyer
</Popup>
</CircleMarker>
))}
</MapContainer>
);
}