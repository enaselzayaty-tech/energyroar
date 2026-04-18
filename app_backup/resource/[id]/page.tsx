'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

type Resource = {
id: number;
category: string;
subcategory: string;
quantityUnit?: string;
currency?: string;
countryCode?: string;
countryName?: string;
city?: string;
lat?: number | string;
lng?: number | string;
description?: string;
services?: string[];
seller?: {
company?: string;
contact?: string;
email?: string;
phone?: string;
};
status?: string;
createdAt?: string;
};

export default function ResourceDetailsPage() {
const params = useParams();
const id = Number(params?.id);
const [resource, setResource] = useState<Resource | null>(null);

useEffect(() => {
try {
const stored = JSON.parse(localStorage.getItem('resources') || '[]');
if (Array.isArray(stored)) {
const found = stored.find((r: Resource) => Number(r.id) === id);
setResource(found || null);
}
} catch {
setResource(null);
}
}, [id]);

if (!resource) {
return (
<div style={styles.page}>
<header style={styles.nav}>
<div style={styles.logo}>EnergyROAR</div>
<div style={styles.navLinks}>
<a href="/" style={styles.link}>Home</a>
<a href="/seller" style={styles.link}>Seller</a>
<a href="/buyer/map" style={styles.link}>Buyer Map</a>
</div>
</header>

<div style={styles.container}>
<h1 style={styles.title}>Resource Not Found</h1>
<p style={styles.text}>
This resource could not be found. It may have been removed or not published yet.
</p>
</div>
</div>
);
}

return (
<div style={styles.page}>
<header style={styles.nav}>
<div style={styles.logo}>EnergyROAR</div>
<div style={styles.navLinks}>
<a href="/" style={styles.link}>Home</a>
<a href="/seller" style={styles.link}>Seller</a>
<a href="/buyer/map" style={styles.link}>Buyer Map</a>
</div>
</header>

<div style={styles.container}>
<h1 style={styles.title}>
{resource.category} / {resource.subcategory}
</h1>

<div style={styles.card}>
<p><strong>Location:</strong> {resource.city || '-'}, {resource.countryName || '-'}</p>
<p><strong>Quantity Unit:</strong> {resource.quantityUnit || '-'}</p>
<p><strong>Currency:</strong> {resource.currency || '-'}</p>
<p><strong>Status:</strong> {resource.status || 'published'}</p>

<div style={styles.section}>
<h3 style={styles.sectionTitle}>Description</h3>
<p style={styles.text}>{resource.description || '-'}</p>
</div>

<div style={styles.section}>
<h3 style={styles.sectionTitle}>Services</h3>
<div style={styles.tags}>
{(resource.services || []).length > 0 ? (
resource.services!.map((service, index) => (
<span key={`${service}-${index}`} style={styles.tag}>
{service}
</span>
))
) : (
<p style={styles.text}>No services selected</p>
)}
</div>
</div>

<div style={styles.section}>
<h3 style={styles.sectionTitle}>Seller Contact Information</h3>
<p><strong>Company:</strong> {resource.seller?.company || '-'}</p>
<p><strong>Contact Person:</strong> {resource.seller?.contact || '-'}</p>
<p><strong>Email:</strong> {resource.seller?.email || '-'}</p>
<p><strong>Phone:</strong> {resource.seller?.phone || '-'}</p>
</div>
</div>
</div>
</div>
);
}

const gold = '#d4af37';

const styles: Record<string, any> = {
page: {
background: 'black',
minHeight: '100vh',
color: gold,
fontFamily: 'Arial, sans-serif',
},
nav: {
display: 'flex',
justifyContent: 'space-between',
padding: '20px 40px',
borderBottom: `1px solid ${gold}`,
},
logo: {
fontWeight: 'bold',
fontSize: 24,
},
navLinks: {
display: 'flex',
gap: 20,
},
link: {
color: gold,
textDecoration: 'none',
},
container: {
maxWidth: 900,
margin: '0 auto',
padding: 40,
},
title: {
fontSize: 36,
marginBottom: 24,
},
card: {
border: `1px solid ${gold}`,
padding: 30,
borderRadius: 8,
},
section: {
marginTop: 24,
},
sectionTitle: {
marginBottom: 12,
fontSize: 22,
},
text: {
color: '#f2e3a1',
lineHeight: 1.7,
},
tags: {
display: 'flex',
flexWrap: 'wrap',
gap: 10,
},
tag: {
border: `1px solid ${gold}`,
padding: '6px 12px',
borderRadius: 6,
},
};
