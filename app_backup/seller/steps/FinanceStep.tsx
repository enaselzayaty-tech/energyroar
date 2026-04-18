"use client";

export default function FinanceStep({ onNext, onBack }: any) {
return (
<div>
<h2>Finance</h2>
<button onClick={onBack}>Back</button>
<button onClick={() => onNext({})}>Next</button>
</div>
);
}