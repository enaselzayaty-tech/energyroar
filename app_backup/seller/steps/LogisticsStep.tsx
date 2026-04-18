"use client";

export default function LogisticsStep({ onNext, onBack }: any) {
return (
<div>
<h2>Logistics</h2>
<button onClick={onBack}>Back</button>
<button onClick={() => onNext({})}>Next</button>
</div>
);
}