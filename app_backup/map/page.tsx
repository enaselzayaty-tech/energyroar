import Filters from "./Filters";
import MapPageClient from "./MapPageClient";

export default function MapPage() {
return (
<div
style={{
display: "flex",
height: "100vh",
background: "#000",
}}
>
{/* LEFT FILTER PANEL */}
<div
style={{
width: 340,
padding: "1rem",
zIndex: 1000,
}}
>
<Filters />
</div>

{/* MAP */}
<div style={{ flex: 1 }}>
<MapPageClient />
</div>
</div>
);
}