export default function ResourceStep({
onNext,
onBack,
}: {
onNext: (v?: any) => void;
onBack: () => void;
}) {
return (
<div>
<h2>Resources</h2>

<button onClick={onBack}>Back</button>
<button onClick={() => onNext({})}>Next</button>
</div>
);
}