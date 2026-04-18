export default function PricingSection({ data, update }: any) {
return (
<section>
<h2>Pricing (optional)</h2>

<label>Quantity</label>
<input
type="number"
value={data.quantity}
onChange={(e) => update("quantity", e.target.value)}
/>

<label>Price Range (USD)</label>
<div style={{ display: "flex", gap: 10 }}>
<input
type="number"
placeholder="Min ($50)"
min={50}
max={10000000}
value={data.priceMin}
onChange={(e) => update("priceMin", e.target.value)}
/>
<input
type="number"
placeholder="Max ($10,000,000)"
min={50}
max={10000000}
value={data.priceMax}
onChange={(e) => update("priceMax", e.target.value)}
/>
</div>
</section>
);
}