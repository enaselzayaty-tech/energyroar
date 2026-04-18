'use client';

import { useMemo, useState } from 'react';

const gold = '#d4af37';

const RESOURCE_MAP: Record<string, string[]> = {
Energy: ['Oil', 'Gas', 'LNG', 'Coal', 'Hydrogen'],
Metals: ['Gold', 'Copper', 'Iron Ore', 'Lithium', 'Aluminum'],
Agriculture: ['Wheat', 'Corn', 'Rice', 'Soybeans', 'Sugar'],
Minerals: ['Phosphate', 'Potash', 'Silica', 'Gypsum'],
};

const QUANTITY_UNITS = [
'Barrels',
'Metric Tons',
'Kilograms',
'Liters',
'Cubic Meters',
'Bushels',
];

const CURRENCIES = ['USD', 'EUR', 'GBP', 'CAD', 'AED', 'SAR', 'EGP', 'CNY'];

const COUNTRIES = [
'Canada',
'United States',
'Kuwait',
'Saudi Arabia',
'UAE',
'Egypt',
'Qatar',
'Nigeria',
'South Africa',
'India',
'China',
'Australia',
];

const SERVICES = [
'Logistics',
'Financing',
'Legal',
'Certification',
'Consulting',
];

export default function SellerPage() {
const [category, setCategory] = useState('');
const [subcategory, setSubcategory] = useState('');
const [quantityUnit, setQuantityUnit] = useState('');
const [currency, setCurrency] = useState('');
const [countryName, setCountryName] = useState('');
const [city, setCity] = useState('');
const [lat, setLat] = useState('');
const [lng, setLng] = useState('');
const [description, setDescription] = useState('');
const [services, setServices] = useState<string[]>([]);
const [company, setCompany] = useState('');
const [contact, setContact] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');

const subcategories = useMemo(() => {
return category ? RESOURCE_MAP[category] : [];
}, [category]);

const toggleService = (service: string) => {
setServices((prev) =>
prev.includes(service)
? prev.filter((s) => s !== service)
: [...prev, service]
);
};

const resetForm = () => {
setCategory('');
setSubcategory('');
setQuantityUnit('');
setCurrency('');
setCountryName('');
setCity('');
setLat('');
setLng('');
setDescription('');
setServices([]);
setCompany('');
setContact('');
setEmail('');
setPhone('');
};

const handlePublish = () => {
if (!category || !subcategory || !countryName || !city || !company || !contact) {
alert('Please complete category, subcategory, country, city, company, and contact person.');
return;
}

const parsedLat = lat.trim() === '' ? null : Number(lat);
const parsedLng = lng.trim() === '' ? null : Number(lng);

if (lat.trim() !== '' && !Number.isFinite(parsedLat)) {
alert('Latitude must be a valid number.');
return;
}

if (lng.trim() !== '' && !Number.isFinite(parsedLng)) {
alert('Longitude must be a valid number.');
return;
}

const resource = {
id: Date.now(),
category,
subcategory,
quantityUnit,
currency,
countryCode: '',
countryName,
city,
lat: parsedLat,
lng: parsedLng,
description,
services,
seller: {
company,
contact,
email,
phone,
},
status: 'published',
createdAt: new Date().toISOString(),
};

try {
const existing = JSON.parse(localStorage.getItem('resources') || '[]');
const safeExisting = Array.isArray(existing) ? existing : [];
localStorage.setItem('resources', JSON.stringify([...safeExisting, resource]));
alert('Resource published successfully.');
resetForm();
} catch {
alert('Could not save the resource. Please try again.');
}
};

return (
<div style={styles.page}>
<div style={styles.nav}>
<div style={styles.logo}>EnergyROAR</div>

<div style={styles.links}>
<a href="/" style={styles.link}>Home</a>
<a href="/about" style={styles.link}>About</a>
<a href="/buyer/map" style={styles.link}>Buyer</a>
<a href="/seller" style={styles.active}>Seller</a>
</div>
</div>

<div style={styles.hero}>
<h1 style={styles.heroTitle}>Seller Portal</h1>
<p style={styles.heroSubtitle}>
List your resources and connect with global buyers instantly.
</p>
</div>

<div style={styles.formSection}>
<h2 style={styles.sectionTitle}>List Your Resource</h2>

<div style={styles.row}>
<select
style={styles.input}
value={category}
onChange={(e) => {
setCategory(e.target.value);
setSubcategory('');
}}
>
<option value="">Select Resource Category</option>
{Object.keys(RESOURCE_MAP).map((item) => (
<option key={item} value={item}>
{item}
</option>
))}
</select>

<select
style={styles.input}
value={subcategory}
disabled={!category}
onChange={(e) => setSubcategory(e.target.value)}
>
<option value="">Select Subcategory</option>
{subcategories.map((item) => (
<option key={item} value={item}>
{item}
</option>
))}
</select>
</div>

<div style={styles.row}>
<select
style={styles.input}
value={quantityUnit}
onChange={(e) => setQuantityUnit(e.target.value)}
>
<option value="">Quantity Unit</option>
{QUANTITY_UNITS.map((item) => (
<option key={item} value={item}>
{item}
</option>
))}
</select>

<select
style={styles.input}
value={currency}
onChange={(e) => setCurrency(e.target.value)}
>
<option value="">Currency</option>
{CURRENCIES.map((item) => (
<option key={item} value={item}>
{item}
</option>
))}
</select>
</div>

<div style={styles.row}>
<select
style={styles.input}
value={countryName}
onChange={(e) => setCountryName(e.target.value)}
>
<option value="">Select Country</option>
{COUNTRIES.map((item) => (
<option key={item} value={item}>
{item}
</option>
))}
</select>

<input
style={styles.input}
placeholder="City / Region"
value={city}
onChange={(e) => setCity(e.target.value)}
/>
</div>

<div style={styles.row}>
<input
style={styles.input}
placeholder="Latitude (optional, for map)"
value={lat}
onChange={(e) => setLat(e.target.value)}
/>

<input
style={styles.input}
placeholder="Longitude (optional, for map)"
value={lng}
onChange={(e) => setLng(e.target.value)}
/>
</div>

<textarea
style={styles.textarea}
placeholder="Description, quality, quantity, delivery terms, certifications..."
value={description}
onChange={(e) => setDescription(e.target.value)}
/>

<div style={styles.servicesBox}>
<h3 style={styles.smallTitle}>Services</h3>
<div style={styles.servicesGrid}>
{SERVICES.map((service) => (
<label key={service} style={styles.checkboxLabel}>
<input
type="checkbox"
checked={services.includes(service)}
onChange={() => toggleService(service)}
/>{' '}
{service}
</label>
))}
</div>
</div>

<div style={styles.contactSection}>
<h3 style={styles.smallTitle}>Seller Contact Information</h3>

<div style={styles.row}>
<input
style={styles.input}
placeholder="Company / Seller Name"
value={company}
onChange={(e) => setCompany(e.target.value)}
/>
<input
style={styles.input}
placeholder="Contact Person"
value={contact}
onChange={(e) => setContact(e.target.value)}
/>
</div>

<div style={styles.row}>
<input
style={styles.input}
placeholder="Email Address"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
<input
style={styles.input}
placeholder="Phone Number"
value={phone}
onChange={(e) => setPhone(e.target.value)}
/>
</div>
</div>

<button style={styles.button} onClick={handlePublish}>
Publish Resource
</button>
</div>

<div style={styles.infoSection}>
<h2 style={styles.sectionTitle}>Why Sell on ROAR</h2>
<p style={styles.infoText}>
Reach international buyers, streamline negotiations, and manage your
resource listings in one platform.
</p>
</div>

<div style={styles.footer}>
© 2026 EnergyROAR Ltd.
<br />
<a href="/terms" style={styles.footerLink}>Terms</a>
<span style={{ margin: '0 8px' }}>|</span>
<a href="/privacy" style={styles.footerLink}>Privacy</a>
</div>
</div>
);
}

const styles: Record<string, any> = {
page: {
background: 'black',
color: gold,
minHeight: '100vh',
fontFamily: 'Arial, sans-serif',
},
nav: {
display: 'flex',
justifyContent: 'space-between',
padding: '20px',
borderBottom: `1px solid ${gold}`,
},
logo: {
fontWeight: 'bold',
fontSize: '20px',
},
links: {
display: 'flex',
gap: '20px',
flexWrap: 'wrap',
},
link: {
color: gold,
textDecoration: 'none',
},
active: {
color: 'white',
textDecoration: 'none',
},
hero: {
textAlign: 'center',
padding: '60px 20px',
borderBottom: `1px solid ${gold}`,
},
heroTitle: {
fontSize: '42px',
marginBottom: '10px',
},
heroSubtitle: {
fontSize: '20px',
},
formSection: {
padding: '40px',
borderBottom: `1px solid ${gold}`,
},
sectionTitle: {
fontSize: '30px',
marginBottom: '20px',
},
smallTitle: {
fontSize: '22px',
marginBottom: '14px',
},
row: {
display: 'flex',
gap: '15px',
flexWrap: 'wrap',
marginBottom: '15px',
},
input: {
flex: 1,
minWidth: '260px',
padding: '12px',
background: 'black',
color: gold,
border: `1px solid ${gold}`,
},
textarea: {
width: '100%',
minHeight: '130px',
padding: '12px',
background: 'black',
color: gold,
border: `1px solid ${gold}`,
marginBottom: '20px',
resize: 'vertical',
},
servicesBox: {
marginBottom: '25px',
},
servicesGrid: {
display: 'flex',
flexWrap: 'wrap',
gap: '16px',
},
checkboxLabel: {
color: gold,
},
contactSection: {
marginBottom: '20px',
},
button: {
padding: '12px 22px',
background: gold,
color: 'black',
border: 'none',
cursor: 'pointer',
fontWeight: 'bold',
fontSize: '16px',
},
infoSection: {
padding: '50px 40px',
borderBottom: `1px solid ${gold}`,
},
infoText: {
fontSize: '20px',
lineHeight: 1.6,
},
footer: {
textAlign: 'center',
padding: '30px',
},
footerLink: {
color: gold,
textDecoration: 'none',
},
};