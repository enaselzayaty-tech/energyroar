export default function ContractorsLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<section className="min-h-screen bg-black px-8 py-20">
{children}
</section>
);
}
