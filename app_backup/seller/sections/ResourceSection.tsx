"use client";

type Props = {
data: {
category: string;
type: string;
description: string;
};
setData: (data: any) => void;
};

const RESOURCE_CATEGORIES: Record<string, string[]> = {
Energy: [
"Crude Oil",
"Natural Gas",
"Condensate",
"LNG",
"Coal",
"Uranium",
"Geothermal Resources",
"Hydrogen (Natural)"
],

"Metals & Minerals": [
"Gold Ore",
"Silver Ore",
"Copper Ore",
"Iron Ore",
"Bauxite",
"Nickel",
"Lithium",
"Cobalt",
"Rare Earth Elements",
"Phosphate Rock",
"Potash",
"Zinc",
"Lead"
],

Agricultural: [
"Wheat",
"Corn",
"Rice",
"Barley",
"Soybeans",
"Canola",
"Coffee Beans",
"Cocoa Beans",
"Sugar",
"Cotton",
"Palm Oil"
],

Forestry: [
"Raw Timber",
"Hardwood Logs",
"Softwood Logs",
"Wood Chips",
"Pulpwood",
"Natural Rubber"
],

Water: [
"Freshwater Rights",
"Groundwater Access",
"Desalinated Water Supply"
],

Chemicals: [
"Sulfur",
"Ammonia",
"Methanol",
"Natural Bitumen",
"Natural Asphalt"
]
};

export default function ResourceSection({ data, setData }: Props) {
const resourceTypes = RESOURCE_CATEGORIES[data.category] || [];

return (
<section className="space-y-6">
<h2 className="text-xl font-semibold text-yellow-400">
Resource Information
</h2>

{/* Resource Category */}
<div>
<label className="block mb-1 text-sm text-gray-300">
Resource Category
</label>
<select
value={data.category}
onChange={(e) =>
setData({
...data,
category: e.target.value,
type: ""
})
}
className="w-full p-2 bg-black border border-gray-600 rounded"
>
<option value="">Select category</option>
{Object.keys(RESOURCE_CATEGORIES).map((cat) => (
<option key={cat} value={cat}>
{cat}
</option>
))}
</select>
</div>

{/* Resource Type */}
<div>
<label className="block mb-1 text-sm text-gray-300">
Resource Type
</label>
<select
value={data.type}
onChange={(e) =>
setData({
...data,
type: e.target.value
})
}
disabled={!data.category}
className="w-full p-2 bg-black border border-gray-600 rounded disabled:opacity-50"
>
<option value="">Select resource type</option>
{resourceTypes.map((type) => (
<option key={type} value={type}>
{type}
</option>
))}
</select>
</div>

{/* Description */}
<div>
<label className="block mb-1 text-sm text-gray-300">
Description (optional)
</label>
<textarea
value={data.description}
onChange={(e) =>
setData({
...data,
description: e.target.value
})
}
placeholder="Optional details: grade, origin, quality, extraction method, etc."
className="w-full p-2 bg-black border border-gray-600 rounded min-h-[80px]"
/>
</div>
</section>
);
}
