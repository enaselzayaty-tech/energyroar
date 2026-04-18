'use client'

import Link from 'next/link'

export default function Navbar() {
return (
<div style={styles.nav}>
<div style={styles.logo}>EnergyROAR</div>

<div style={styles.links}>
<Link href="/" style={styles.link}>Home</Link>
<Link href="/seller" style={styles.link}>Seller</Link>
<Link href="/buyer/map" style={styles.link}>Buyer Map</Link>
<Link href="/about" style={styles.link}>About</Link>
</div>
</div>
)
}

const styles = {
nav: {
display: 'flex',
justifyContent: 'space-between',
padding: '20px 40px',
borderBottom: '1px solid gold',
background: 'black',
},
logo: { color: 'gold', fontWeight: 'bold', fontSize: 20 },
links: { display: 'flex', gap: '25px' },
link: { color: 'gold', textDecoration: 'none', fontWeight: 'bold' },
}