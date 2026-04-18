"use client";

type Props = {
data: {
services: {
financing: boolean;
logistics: boolean;
legal: boolean;
qs: boolean;
certification: boolean;
};
};
setData: (data: any) => void;
};

export default function ServicesSection({ data, setData }: Props) {
const toggle = (key: keyof typeof data.services) => {
setData({
...data,
services: {
...data.services,
[key]: !data.services[key],
},
});
};

return (
<section className="space-y-6">
<h2 className="text-xl font-semibold text-yellow-400">
Required Services (optional)
</h2>

<p className="text-sm text-gray-400">
Select services required to complete this transaction.
</p>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<ServiceToggle
label="Financing"
description="Loan, credit facility, or structured finance"
value={data.services.financing}
onClick={() => toggle("financing")}
/>

<ServiceToggle
label="Logistics"
description="Shipping, transport, storage, or handling"
value={data.services.logistics}
onClick={() => toggle("logistics")}
/>

<ServiceToggle
label="Legal"
description="Contracts, escrow, compliance, documentation"
value={data.services.legal}
onClick={() => toggle("legal")}
/>

<ServiceToggle
label="Quantity Surveyor (QS)"
description="Independent quantity verification"
value={data.services.qs}
onClick={() => toggle("qs")}
/>

<ServiceToggle
label="Certification / Quality Control"
description="Inspection, assay, SGS, Bureau Veritas, etc."
value={data.services.certification}
onClick={() => toggle("certification")}
/>
</div>
</section>
);
}

/* ---------- Small internal component ---------- */

function ServiceToggle({
label,
description,
value,
onClick,
}: {
label: string;
description: string;
value: boolean;
onClick: () => void;
}) {
return (
<div
className={`p-4 border rounded cursor-pointer transition
${value ? "border-yellow-400 bg-yellow-400/10" : "border-gray-600"}
`}
onClick={onClick}
>
<div className="flex items-center justify-between">
<div>
<h3 className="font-medium">{label}</h3>
<p className="text-xs text-gray-400">{description}</p>
</div>

<span
className={`text-sm px-3 py-1 rounded
${value ? "bg-yellow-400 text-black" : "bg-gray-700 text-gray-300"}
`}
>
{value ? "Yes" : "No"}
</span>
</div>
</div>
);
}