export default function ContractorStep({
onBack,
}: {
onBack: () => void;
}) {
return (
<div>
<h2>Contractor</h2>
<button onClick={onBack}>Back</button>
</div>
);
}