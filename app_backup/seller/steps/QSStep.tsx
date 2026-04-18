"use client";

export default function QSStep({ onNext, onBack }: any) {
return (
<div>
<h2>QS</h2>
<button onClick={onBack}>Back</button>
<button onClick={() => onNext({})}>Next</button>
</div>
);
}