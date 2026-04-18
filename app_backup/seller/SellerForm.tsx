"use client";

import { useState } from "react";

type Role = "seller" | "buyer";

export default function SellerForm({ role = "seller" }: { role?: Role }) {
const [services, setServices] = useState({
logistics: false,
finance: false,
legal: false,
certification: false,
consulting: false,
});

const toggle = (key: keyof typeof services) =>
setServices((s) => ({ ...s, [key]: !s[key] }));

return (
<div style={styles.page}>
<h1 style={styles.title}>List a Resource</h1>
<p style={styles.subtitle}>
Provide accurate information to publish a transaction-ready natural resource.
</p>

{/* SERVICES */}
<section style={styles.card}>
<h3 style={styles.sectionTitle}>Services</h3>

{/* BUYER SERVICES */}
{role === "buyer" && (
<>
<Service label="Logistics" checked={services.logistics} onClick={() => toggle("logistics")} />
<Service label="Finance" checked={services.finance} onClick={() => toggle("finance")} />
<Service label="Legal" checked={services.legal} onClick={() => toggle("legal")} />
<Service
label="Certification"
checked={services.certification}
onClick={() => toggle("certification")}
/>
</>
)}

{/* CONSULTING (BOTH) */}
<Service
label="Consulting"
checked={services.consulting}
onClick={() => toggle("consulting")}
/>
</section>
</div>
);
}

function Service({
label,
checked,
onClick,
}: {
label: string;
checked: boolean;
onClick: () => void;
}) {
return (
<label style={styles.service}>
<input type="checkbox" checked={checked} onChange={onClick} />
{label}
</label>
);
}

/* ================= STYLES ================= */

const styles: Record<string, React.CSSProperties> = {
page: {
minHeight: "100vh",
background: "#0b0b0b",
color: "#f5f5f5",
padding: "40px",
fontFamily: "Inter, sans-serif",
},
title: {
color: "#d4af37",
fontSize: "32px",
marginBottom: "8px",
},
subtitle: {
opacity: 0.8,
marginBottom: "30px",
},
card: {
background: "#111",
border: "1px solid #1f1f1f",
borderRadius: "12px",
padding: "20px",
maxWidth: "420px",
},
sectionTitle: {
marginBottom: "12px",
color: "#d4af37",
},
service: {
display: "flex",
alignItems: "center",
gap: "10px",
marginBottom: "10px",
},
};
