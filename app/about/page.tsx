export default function AboutPage() {
return (
<div style={styles.page}>
{/* NAV */}
<div style={styles.nav}>
<div style={styles.logo}>EnergyROAR</div>
<div style={styles.links}>
<a href="/" style={styles.link}>Home</a>
<a href="/seller" style={styles.link}>Seller</a>
<a href="/buyer/map" style={styles.link}>Buyer Map</a>
<a href="/about" style={styles.link}>About</a>
</div>
</div>

{/* HERO */}
<div style={styles.hero}>
<h1 style={styles.title}>About EnergyROAR</h1>
<p style={styles.subtitle}>
A global platform transforming how natural resources are traded.
</p>
</div>

{/* SECTION 1 */}
<section style={styles.section}>
<h2 style={styles.heading}>What is EnergyROAR</h2>
<p style={styles.text}>
EnergyROAR (Return On Asset Resources) is a digital marketplace designed
to connect buyers and sellers of natural resources worldwide. The platform
focuses on energy, metals, minerals, and agricultural commodities.
</p>
</section>

{/* SECTION 2 */}
<section style={styles.section}>
<h2 style={styles.heading}>Our Mission</h2>
<p style={styles.text}>
Our mission is to create a transparent, efficient, and global trading
environment where resource owners can list assets and buyers can discover
opportunities with clarity and speed.
</p>
</section>

{/* SECTION 3 */}
<section style={styles.section}>
<h2 style={styles.heading}>What We Offer</h2>

<div style={styles.grid}>
<div style={styles.card}>
<h3>Structured Listings</h3>
<p>Organized resource data including category, location, and services.</p>
</div>

<div style={styles.card}>
<h3>Global Reach</h3>
<p>Connect with buyers and sellers across multiple regions.</p>
</div>

<div style={styles.card}>
<h3>Direct Contact</h3>
<p>Communicate directly with verified participants.</p>
</div>

<div style={styles.card}>
<h3>Map Discovery</h3>
<p>Visualize opportunities geographically through the buyer map.</p>
</div>
</div>
</section>

{/* SECTION 4 */}
<section style={styles.section}>
<h2 style={styles.heading}>Who It's For</h2>
<p style={styles.text}>
EnergyROAR is built for producers, traders, investors, and organizations
involved in resource extraction, supply chains, and global trade.
</p>
</section>

{/* SECTION 5 */}
<section style={styles.section}>
<h2 style={styles.heading}>Vision</h2>
<p style={styles.text}>
We aim to become the leading digital infrastructure for resource
transactions, simplifying global trade and increasing market accessibility.
</p>
</section>

{/* FOOTER */}
<div style={styles.footer}>
© 2026 EnergyROAR Ltd. <br />
<a href="/terms" style={styles.link}>Terms</a> |{' '}
<a href="/privacy" style={styles.link}>Privacy</a>
</div>
</div>
);
}

const gold = '#d4af37';

const styles: any = {
page: {
background: 'black',
color: gold,
minHeight: '100vh',
fontFamily: 'Arial',
},

nav: {
display: 'flex',
justifyContent: 'space-between',
padding: '20px',
borderBottom: `1px solid ${gold}`,
},

logo: { fontWeight: 'bold' },

links: { display: 'flex', gap: '20px' },

link: { color: gold, textDecoration: 'none' },

active: { color: 'white', textDecoration: 'none' },

hero: {
textAlign: 'center',
padding: '80px 20px',
},

title: { fontSize: '50px' },

subtitle: { marginTop: '10px' },

section: {
padding: '50px 40px',
borderTop: `1px solid ${gold}`,
},

heading: { fontSize: '30px', marginBottom: '10px' },

text: { color: '#f5e6a3', lineHeight: '1.6' },

grid: {
display: 'grid',
gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
gap: '20px',
},

card: {
border: `1px solid ${gold}`,
padding: '20px',
},

footer: {
textAlign: 'center',
padding: '30px',
borderTop: `1px solid ${gold}`,
},
};