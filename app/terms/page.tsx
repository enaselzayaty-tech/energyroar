export default function TermsPage() {
return (
<div style={styles.page}>
<div style={styles.container}>
<h1>Terms of Use</h1>

<p>
These Terms of Use govern access to and use of the EnergyROAR platform,
operated by EnergyROAR Ltd., based in Calgary, Alberta, Canada.
</p>

<h2>1. Acceptance</h2>
<p>
By accessing or using the platform, you agree to these terms. If you do
not agree, you must not use the platform.
</p>

<h2>2. Platform Nature</h2>
<p>
EnergyROAR is a digital marketplace that connects buyers and sellers of
natural resources. EnergyROAR does not act as a broker, agent, or
intermediary in transactions unless explicitly stated.
</p>

<h2>3. User Responsibilities</h2>
<p>
Users must provide accurate, lawful, and non-misleading information.
You are responsible for compliance with all applicable laws, including
trade, export, environmental, and financial regulations.
</p>

<h2>4. No Guarantee</h2>
<p>
EnergyROAR does not guarantee the quality, legality, availability, or
performance of any listing or transaction.
</p>

<h2>5. Prohibited Conduct</h2>
<p>
Users may not engage in fraud, misrepresentation, data scraping,
unauthorized access, or illegal activities.
</p>

<h2>6. Intellectual Property</h2>
<p>
All platform content, design, and branding are owned by EnergyROAR Ltd.
and may not be copied or reproduced without permission.
</p>

<h2>7. Limitation of Liability</h2>
<p>
To the fullest extent permitted under Canadian law, EnergyROAR shall
not be liable for indirect or consequential damages arising from use of
the platform.
</p>

<h2>8. Governing Law</h2>
<p>
These terms are governed by the laws of Alberta and applicable federal
laws of Canada.
</p>

<h2>9. Changes</h2>
<p>
EnergyROAR may update these terms at any time. Continued use indicates
acceptance.
</p>

<div style={styles.footer}>
© 2026 EnergyROAR Ltd.
</div>
</div>
</div>
)
}

const styles = {
page: { background: 'black', color: 'gold', minHeight: '100vh' },
container: { padding: '40px', maxWidth: '900px', margin: 'auto' },
footer: { marginTop: '40px' }
}