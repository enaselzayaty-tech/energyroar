export default function ContractorsPage() {
return (
<main style={{ padding: "80px 24px", maxWidth: "1100px", margin: "0 auto" }}>
{/* HEADER */}
<section className="section">
<h1>Contractor Services</h1>
<p style={{ marginTop: "16px" }}>
Connect with verified professionals supporting the resource value
chain.
</p>
</section>

{/* CONTRACTOR TYPES */}
<section className="section">
<h2>Service Category</h2>

<div className="button-row">
<button className="gold-button">Logistics</button>
<button className="gold-button">Financing</button>
<button className="gold-button">Legal</button>
<button className="gold-button">Quality Control</button>
<button className="gold-button">Environmental</button>
<button className="gold-button">Engineering</button>
<button className="gold-button">Other</button>
</div>
</section>

{/* SERVICE DETAILS */}
<section className="section">
<h2>Describe Your Service</h2>

<div className="form-grid">
<input
type="text"
placeholder="Company or individual name"
/>

<input
type="text"
placeholder="Primary expertise (e.g. drilling logistics, trade finance)"
/>

<input
type="text"
placeholder="Regions served (countries or regions)"
/>

<textarea
placeholder="Additional details (experience, certifications, availability)"
rows={4}
/>
</div>
</section>

{/* RESOURCE ALIGNMENT */}
<section className="section">
<h2>Resources You Support</h2>

<div className="button-row">
<button className="gold-button">Oil & Gas</button>
<button className="gold-button">Minerals & Mining</button>
<button className="gold-button">Industrial Materials</button>
<button className="gold-button">Infrastructure</button>
<button className="gold-button">Agriculture</button>
<button className="gold-button">Other</button>
</div>
</section>

{/* VISIBILITY */}
<section className="section">
<h2>Visibility</h2>
<p style={{ marginBottom: "12px" }}>
Your services will be discoverable by sellers and buyers based on
location and resource type.
</p>
</section>

{/* SUBMIT */}
<section style={{ marginTop: "48px" }}>
<button className="gold-button large">Publish Service</button>
</section>
</main>
);
}