"use client";

export default function ReviewStep({ onNext, onBack }: any) {
return (
<div>
<h2>Review</h2>
<button onClick={onBack}>Back</button>
<button onClick={() => onNext({})}>Next</button>
</div>
);
}