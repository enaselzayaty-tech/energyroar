'use client';

import Navbar from '../components/Navbar';

export default function ContactPage() {
return (
<div style={styles.page}>
<Navbar />

<div style={styles.content}>
<h1>Contact</h1>
<p>Email: info@energyroar.ca</p>
</div>

<footer style={styles.footer}>
© 2026 EnergyROAR Ltd.
</footer>
</div>
);
}

const gold='#d4af37';

const styles:any={
page:{ background:'black', color:gold, minHeight:'100vh' },
content:{ padding:40 },
footer:{ textAlign:'center', padding:30, borderTop:`1px solid ${gold}`, marginTop:40 }
};