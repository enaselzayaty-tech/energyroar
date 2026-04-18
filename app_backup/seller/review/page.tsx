// app/seller/review/page.tsx
"use client";

export default function ReviewPublishPage() {
return (
<div className="min-h-screen bg-black text-yellow-500 p-8">
<h1 className="text-3xl font-bold mb-6">
Review & Publish Resource
</h1>

<p className="opacity-80 mb-8 max-w-4xl">
Please review all information below carefully. Once published, this
resource will be visible to verified buyers.
</p>

<div className="max-w-4xl space-y-6">

{/* RESOURCE SUMMARY */}
<Section title="Resource Summary">
<Row label="Resource" value="Crude Oil – Light Sweet" />
<Row label="Category" value="Energy" />
<Row label="Quantity" value="50,000 barrels" />
<Row label="Pricing" value="$72 / barrel (Negotiable)" />
<Row label="Currency" value="USD" />
</Section>

{/* LOCATION */}
<Section title="Location">
<Row label="Country" value="Canada" />
<Row label="Region" value="Alberta" />
<Row label="Latitude" value="51.0447" />
<Row label="Longitude" value="-114.0719" />

<div className="mt-4 h-40 bg-gray-800 border border-yellow-600 rounded flex items-center justify-center text-sm opacity-70">
Map preview (final confirmation)
</div>
</Section>

{/* CONTRACTORS */}
<Section title="Contractors & Certifications">
<Row label="Logistics Required" value="Yes" />
<Row label="Financing Required" value="No" />
<Row label="Certification Required" value="Yes" />
<Row label="Inspection Required" value="Yes" />
<Row label="Quantity Surveyor (QS)" value="Yes" />
</Section>

{/* LEGAL CONFIRMATION */}
<div className="border border-yellow-600 rounded-lg p-6">
<h2 className="text-xl font-semibold mb-3">Seller Confirmation</h2>
<ul className="list-disc list-inside text-sm opacity-80 space-y-2">
<li>I confirm that I am authorized to list this resource.</li>
<li>The information provided is accurate and truthful.</li>
<li>I understand buyers may rely on this information.</li>
<li>I agree to comply with applicable laws and regulations.</li>
</ul>
</div>

{/* ACTIONS */}
<div className="flex justify-between pt-6">
<button className="border border-yellow-600 px-6 py-2 rounded hover:bg-yellow-900">
Back & Edit
</button>

<button className="bg-yellow-600 text-black px-8 py-3 rounded font-semibold hover:bg-yellow-500">
Publish Resource
</button>
</div>

</div>
</div>
);
}

/* ----------- UI HELPERS ----------- */

function Section({
title,
children,
}: {
title: string;
children: React.ReactNode;
}) {
return (
<div className="border border-yellow-600 rounded-lg p-6">
<h2 className="text-xl font-semibold mb-4">{title}</h2>
<div className="space-y-2">{children}</div>
</div>
);
}

function Row({ label, value }: { label: string; value: string }) {
return (
<div className="flex justify-between border-b border-yellow-700 pb-1">
<span className="opacity-80">{label}</span>
<span className="font-semibold">{value}</span>
</div>
);
}