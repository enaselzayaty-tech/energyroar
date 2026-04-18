export default function ContractorSection() {
return (
<section
style={{
padding: "2rem",
borderTop: "1px solid #222",
background: "#0f0f0f",
}}
>
<h2 style={{ color: "#f5c400" }}>
Do you require supporting services?
</h2>

<p style={{ maxWidth: 700, opacity: 0.85 }}>
Select optional service providers to assist with verification,
logistics, financing, or compliance.
</p>

<ul style={{ marginTop: "1rem", lineHeight: 1.8 }}>
<li>Logistics & Transportation</li>
<li>Financing & Capital Structuring</li>
<li>Legal & Regulatory Support</li>
<li>Quality Control & Sampling</li>
</ul>

<h3 style={{ marginTop: "2rem", color: "#f5c400" }}>
Certifiers
</h3>

<ul style={{ lineHeight: 1.8 }}>
<li>Resource Verification Bodies</li>
<li>Geological & Engineering Auditors</li>
<li>Environmental & ESG Certifiers</li>
</ul>
</section>
);
}