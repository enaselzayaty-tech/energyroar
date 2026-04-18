import Link from "next/link";

const RESOURCES = [
{
title: "Energy",
slug: "energy",
description: "Oil, gas, renewables, and power assets",
},
{
title: "Metals",
slug: "metals",
description: "Precious and base metal resources",
},
{
title: "Critical Minerals",
slug: "critical-minerals",
description: "Lithium, rare earths, and strategic minerals",
},
{
title: "Industrial Minerals",
slug: "industrial-grind-rocks",
description: "Limestone, potash, aggregates, and inputs",
},
{
title: "Water",
slug: "water",
description: "Water rights and infrastructure",
},
{
title: "Agriculture",
slug: "agriculture",
description: "Farmland and agri-resources",
},
];

export default function ResourcesPage() {
return (
<main className="min-h-screen px-6 py-20 max-w-7xl mx-auto text-white">
<h1 className="text-4xl font-bold mb-10">Resources</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{RESOURCES.map((r) => (
<Link
key={r.slug}
href={`/resources/${r.slug}`}
className="block border border-[#c9a24d]/40 rounded-xl p-6 hover:bg-[#c9a24d]/10 transition"
>
<h2 className="text-xl font-semibold text-[#c9a24d] mb-2">
{r.title}
</h2>
<p className="text-gray-400 text-sm">{r.description}</p>
</Link>
))}
</div>
</main>
);
}