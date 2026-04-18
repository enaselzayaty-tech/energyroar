export default function PrivacyPage() {
return (
<div style={styles.page}>
<div style={styles.container}>
<h1>Privacy Policy</h1>

<p>
This policy complies with Canada's Personal Information Protection and
Electronic Documents Act (PIPEDA) and Alberta’s Personal Information
Protection Act (PIPA).
</p>

<h2>1. Information Collected</h2>
<p>
We may collect personal and business information including name, email,
company details, and listing information.
</p>

<h2>2. Purpose</h2>
<p>
Information is used to operate the platform, connect users, and improve
services.
</p>

<h2>3. Consent</h2>
<p>
By using the platform, you consent to the collection and use of your
information.
</p>

<h2>4. Disclosure</h2>
<p>
Information may be shared when required by law or to operate the
platform. We do not sell personal data.
</p>

<h2>5. Data Protection</h2>
<p>
We use reasonable safeguards but cannot guarantee absolute security.
</p>

<h2>6. User Rights</h2>
<p>
Users may request access, correction, or deletion of their data in
accordance with Canadian law.
</p>

<h2>7. Retention</h2>
<p>
Data is retained only as long as necessary for business and legal
purposes.
</p>

<h2>8. Contact</h2>
<p>
For privacy concerns, contact EnergyROAR Ltd.
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