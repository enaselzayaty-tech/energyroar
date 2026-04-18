export default function AssetsPage() {
return (
<main className="px-10 py-16">
<h1 className="text-4xl font-bold">Explore Assets</h1>

<p className="mt-4 text-gray-600">
Browse listed resources across the global value chain.
</p>

<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="border rounded-xl p-6">
<h2 className="font-semibold text-lg">Oil & Gas</h2>
<p className="text-sm text-gray-600 mt-2">
Upstream and midstream opportunities.
</p>
</div>

<div className="border rounded-xl p-6">
<h2 className="font-semibold text-lg">Mining</h2>
<p className="text-sm text-gray-600 mt-2">
Mineral and metal assets worldwide.
</p>
</div>

<div className="border rounded-xl p-6">
<h2 className="font-semibold text-lg">Chemicals</h2>
<p className="text-sm text-gray-600 mt-2">
Industrial and specialty chemical resources.
</p>
</div>
</div>
</main>
);
}