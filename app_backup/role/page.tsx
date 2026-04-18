"use client";

import { useRouter } from "next/navigation";

export default function RolePage() {
const router = useRouter();

return (
<div
style={{
minHeight: "100vh",
background: "#0b0b0b",
color: "#fff",
display: "flex",
justifyContent: "center",
alignItems: "center",
}}
>
<div style={{ maxWidth: 520 }}>
<h1 style={{ color: "#f5c400", marginBottom: "0.5rem" }}>
How do you want to use ROAR?
</h1>

<p style={{ marginBottom: "2rem", color: "#ccc" }}>
Choose how you want to interact with resources.
</p>

<div style={{ display: "flex", gap: "1rem" }}>
<button
onClick={() => router.push("/map")}
style={primary}
>
I’m a Buyer
<div style={sub}>Discover resources by location</div>
</button>

<button
onClick={() => router.push("/seller")}
style={secondary}
>
I’m a Seller
<div style={sub}>List a verified resource</div>
</button>
</div>
</div>
</div>
);
}

const primary = {
background: "#f5c400",
color: "#000",
padding: "1.2rem",
borderRadius: 10,
border: "none",
width: 240,
fontWeight: 700,
cursor: "pointer",
};

const secondary = {
background: "transparent",
color: "#f5c400",
padding: "1.2rem",
borderRadius: 10,
border: "2px solid #f5c400",
width: 240,
fontWeight: 700,
cursor: "pointer",
};

const sub = {
fontSize: "0.85rem",
marginTop: "0.4rem",
fontWeight: 400,
};