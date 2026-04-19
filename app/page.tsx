export default function Home() {
return (
<div style={styles.page}>
<div style={styles.nav}>
<div style={styles.logo}>EnergyROAR</div>

<div style={styles.links}>
<a href="/" style={styles.link}>Home</a>
<a href="/about" style={styles.link}>About</a>
<a href="/buyer/map" style={styles.link}>Buyer</a>
<a href="/seller" style={styles.link}>Seller</a>
<a href="/contact" style={styles.link}>Contact</a>
</div>
</div>

<div style={styles.hero}>
<h1 style={styles.title}>EnergyROAR</h1>
<p style={styles.subtitle}>
Return On Asset Resources — where natural resources become transactions.
</p>

<div style={styles.buttons}>
<a href="/seller" style={styles.primary}>I am a Seller</a>
<a href="/buyer/map" style={styles.secondary}>I am a Buyer</a>
</div>
</div>

<section style={styles.section}>
<h2 style={styles.sectionTitle}>What We Do</h2>
<p style={styles.sectionText}>
EnergyROAR is a marketplace for resource-based trade. Sellers can publish natural
resource listings, and buyers can explore opportunities through a live map,
filters, and direct contact details.
</p>

<div style={styles.cardGrid}>
<div style={styles.card}>
<h3 style={styles.cardTitle}>For Sellers</h3>
<p style={styles.cardText}>
Publish your resource with category, subcategory, location, services,
and seller contact information.
</p>
<a href="/seller" style={styles.cardButton}>Go to Seller Page</a>
</div>

<div style={styles.card}>
<h3 style={styles.cardTitle}>For Buyers</h3>
<p style={styles.cardText}>
Filter by resource, country, city, and services, then explore listings
directly on the buyer map.
</p>
<a href="/buyer/map" style={styles.cardButton}>Open Buyer Map</a>
</div>
</div>
</section>

<section style={styles.section}>
<h2 style={styles.sectionTitle}>Why EnergyROAR</h2>

<div style={styles.cardGrid}>
<div style={styles.card}>
<h3 style={styles.cardTitle}>Structured Listings</h3>
<p style={styles.cardText}>
Organized by resource type, subcategory, country, city, and support services.
</p>
</div>

<div style={styles.card}>
<h3 style={styles.cardTitle}>Map-Based Discovery</h3>
<p style={styles.cardText}>
Buyers can visually explore supply opportunities across regions.
</p>
</div>

<div style={styles.card}>
<h3 style={styles.cardTitle}>Direct Contact</h3>
<p style={styles.cardText}>
Each listing includes seller details so buyers can move quickly.
</p>
</div>
</div>
</section>

<div style={styles.footer}>
<div>EnergyROAR Ltd.</div>
<div>Calgary, Alberta, Canada</div>
<div style={{ marginTop: 10 }}>© 2026 EnergyROAR Ltd. All rights reserved.</div>
<div style={{ marginTop: 10 }}>
<a href="/terms" style={styles.footerLink}>Terms</a>
<span style={{ margin: '0 8px' }}>|</span>
<a href="/privacy" style={styles.footerLink}>Privacy</a>
</div>
</div>
</div>
);
}

const gold = '#d4af37';

const styles: Record<string, React.CSSProperties> = {
page: {
background: 'black',
color: gold,
minHeight: '100vh',
fontFamily: 'Arial, sans-serif',
},
nav: {
display: 'flex',
justifyContent: 'space-between',
alignItems: 'center',
padding: '20px 30px',
borderBottom: `1px solid ${gold}`,
background: 'black',
flexWrap: 'wrap',
rowGap: '12px',
},
logo: {
color: gold,
fontSize: 22,
fontWeight: 'bold',
},
links: {
display: 'flex',
gap: 18,
flexWrap: 'wrap',
},
link: {
color: gold,
textDecoration: 'none',
fontWeight: 'bold',
},
hero: {
textAlign: 'center',
padding: '90px 20px 70px',
},
title: {
fontSize: 64,
marginBottom: 12,
fontWeight: 'bold',
},
subtitle: {
color: '#f5e6a3',
fontSize: 22,
marginBottom: 28,
},
buttons: {
display: 'flex',
justifyContent: 'center',
gap: 14,
flexWrap: 'wrap',
},
primary: {
background: gold,
color: 'black',
padding: '12px 22px',
textDecoration: 'none',
fontWeight: 'bold',
border: `1px solid ${gold}`,
},
secondary: {
border: `1px solid ${gold}`,
color: gold,
padding: '12px 22px',
textDecoration: 'none',
fontWeight: 'bold',
},
section: {
padding: '40px 30px',
maxWidth: 1200,
margin: '0 auto',
},
sectionTitle: {
fontSize: 46,
marginBottom: 18,
fontWeight: 'bold',
},
sectionText: {
color: '#f5e6a3',
fontSize: 18,
lineHeight: 1.7,
marginBottom: 28,
},
cardGrid: {
display: 'grid',
gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
gap: 20,
},
card: {
border: `1px solid ${gold}`,
padding: 24,
borderRadius: 10,
},
cardTitle: {
fontSize: 22,
marginBottom: 10,
fontWeight: 'bold',
},
cardText: {
color: '#f5e6a3',
lineHeight: 1.6,
marginBottom: 18,
},
cardButton: {
display: 'inline-block',
background: gold,
color: 'black',
padding: '10px 16px',
textDecoration: 'none',
fontWeight: 'bold',
borderRadius: 6,
},
footer: {
textAlign: 'center',
padding: 30,
borderTop: `1px solid ${gold}`,
marginTop: 40,
},
footerLink: {
color: gold,
textDecoration: 'none',
},
};