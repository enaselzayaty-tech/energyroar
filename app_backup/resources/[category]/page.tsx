import { notFound } from "next/navigation";

type ResourceCategory = {
title: string;
assets: string[];
};

const RESOURCE_DATA: Record<string, ResourceCategory> = {
energy: {
title: "Energy",
assets: ["Oil", "Gas", "Hydrogen", "Solar", "Wind"],
},

metals: {
title: "Metals",
assets: ["Gold", "Copper", "Iron", "Aluminum"],
},

"critical-minerals": {
title: "Critical Minerals",
assets: ["Lithium", "Cobalt", "Nickel", "Rare Earths"],
},

"industrial-grind-rocks": {
title: "Industrial Grind Rocks",
assets: ["Salt", "Limestone", "Gypsum", "Silica", "Dolomite"],
},

water: {
title: "Water",
assets: ["Freshwater", "Desalination", "Recycling"],
},
};

export default async function CategoryPage({
params,
}: {
params: Promise<{ category: string }>;
}) {
const { category } = await params;

const data = RESOURCE_DATA[category];

if (!data) {
notFound();
}

return (
<main style={{ padding: "40px" }}>
<h1>{data.title}</h1>

<ul>
{data.assets.map((asset) => (
<li key={asset}>{asset}</li>
))}
</ul>
</main>
);
}