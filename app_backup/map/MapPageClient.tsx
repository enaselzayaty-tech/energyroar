"use client";
import dynamic from "next/dynamic";

const MapClient = dynamic(
() => import("../components/MapClient").then((m) => m.default),
{ ssr: false }
);




export default function MapPageClient() {
const buyer = {
lat: 43.65,
lng: -79.38,
};

const sellers = [
{ lat: 43.7, lng: -79.4, assetType: "Solar" },
{ lat: 43.6, lng: -79.2, assetType: "Wind" },
{ lat: 43.9, lng: -79.6, assetType: "Hydro" },
];

return (
<div>
<h2 style={{ padding: "10px" }}>Marketplace Map</h2>
<MapClient buyer={buyer} sellers={sellers} />
</div>
);
}