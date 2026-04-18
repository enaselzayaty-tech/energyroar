// app/seller/transaction/[id]/page.tsx
"use client";

import { useState } from "react";

type TxStatus =
| "Inquiry Received"
| "Under Negotiation"
| "Accepted"
| "Due Diligence"
| "Ready for Settlement"
| "Closed"
| "Cancelled";

type TimelineItem = {
time: string;
note: string;
};

export default function TransactionPage({
params,
}: {
params: { id: string };
}) {
// Mock transaction (replace with backend later)
const [status, setStatus] = useState<TxStatus>("Under Negotiation");
const [timeline, setTimeline] = useState<TimelineItem[]>([
{ time: "2026-02-14 09:12", note: "Buyer inquiry received" },
{ time: "2026-02-14 11:30", note: "Seller countered price" },
]);

function advance(next: TxStatus, note: string) {
setStatus(next);
setTimeline((t) => [
...t,
{ time: new Date().toISOString(), note },
]);
}

return (
<div className="min-h-screen bg-black text-yellow-500 p-8">
<h1 className="text-3xl font-bold mb-2">Transaction #{params.id}</h1>
<p className="opacity-80 mb-6">Lifecycle & status management</p>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

{/* LEFT: SUMMARY */}
<div className="lg:col-span-2 border border-yellow-600 rounded-lg p-6 space-y-4">
<h2 className="text-xl font-semibold">Deal Summary</h2>

<Row label="Resource" value="Crude Oil – Light Sweet" />
<Row label="Quantity" value="10,000 barrels" />
<Row label="Agreed Price" value="$71 / barrel" />
<Row label="Delivery Term" value="FOB" />
<Row label="Buyer" value="Verified Buyer (USA)" />
<Row label="Current Status" value={status} />

<div className="pt-4 border-t border-yellow-700">
<h3 className="font-semibold mb-2">Actions</h3>

<div className="flex flex-wrap gap-3">
{status === "Under Negotiation" && (
<>
<Action
label="Accept Deal"
onClick={() =>
advance("Accepted", "Seller accepted buyer terms")
}
color="green"
/>
<Action
label="Cancel"
onClick={() =>
advance("Cancelled", "Seller cancelled negotiation")
}
color="red"
/>
</>
)}

{status === "Accepted" && (
<Action
label="Start Due Diligence"
onClick={() =>
advance(
"Due Diligence",
"Due diligence initiated (inspection, docs)"
)
}
color="yellow"
/>
)}

{status === "Due Diligence" && (
<Action
label="Ready for Settlement"
onClick={() =>
advance(
"Ready for Settlement",
"All checks completed"
)
}
color="yellow"
/>
)}

{status === "Ready for Settlement" && (
<Action
label="Close Transaction"
onClick={() =>
advance(
"Closed",
"Transaction settled successfully"
)
}
color="green"
/>
)}
</div>
</div>
</div>

{/* RIGHT: TIMELINE */}
<div className="border border-yellow-600 rounded-lg p-6">
<h2 className="text-xl font-semibold mb-4">Activity Timeline</h2>

<div className="space-y-3 text-sm">
{timeline.map((t, i) => (
<div
key={i}
className="border border-yellow-700 rounded p-3"
>
<div className="opacity-70">{t.time}</div>
<div className="font-semibold">{t.note}</div>
</div>
))}
</div>
</div>

</div>

<p className="mt-6 text-sm opacity-70">
All actions are logged for audit and compliance.
</p>
</div>
);
}

/* ---------- UI HELPERS ---------- */

function Row({ label, value }: { label: string; value: string }) {
return (
<div className="flex justify-between border-b border-yellow-700 pb-1">
<span className="opacity-80">{label}</span>
<span className="font-semibold">{value}</span>
</div>
);
}

function Action({
label,
onClick,
color,
}: {
label: string;
onClick: () => void;
color: "green" | "yellow" | "red";
}) {
const colors: Record<typeof color, string> = {
green: "bg-green-600 hover:bg-green-500",
yellow: "bg-yellow-600 hover:bg-yellow-500",
red: "bg-red-600 hover:bg-red-500",
};

return (
<button
onClick={onClick}
className={`${colors[color]} text-black px-5 py-2 rounded font-semibold`}
>
{label}
</button>
);
}