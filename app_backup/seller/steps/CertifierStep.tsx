"use client";

export default function CertifierStep({ onNext, onBack }: any) {
return (
<div>
<h2>Certifier</h2>
<button onClick={onBack}>Back</button>
<button onClick={() => onNext({})}>Next</button>
</div>
);
}