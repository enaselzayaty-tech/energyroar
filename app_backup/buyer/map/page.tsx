'use client';

import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { useEffect, useMemo, useState } from 'react';
import { Country, City } from 'country-state-city';

const MapContainer = dynamic(
() => import('react-leaflet').then((m) => m.MapContainer),
{ ssr: false }
);
const TileLayer = dynamic(
() => import('react-leaflet').then((m) => m.TileLayer),
{ ssr: false }
);
const Marker = dynamic(
() => import('react-leaflet').then((m) => m.Marker),
{ ssr: false }
);
const Popup = dynamic(
() => import('react-leaflet').then((m) => m.Popup),
{ ssr: false }
);

const gold = '#d4af37';

const RESOURCE_MAP: Record<string, string[]> = {
Energy: ['Oil', 'Gas', 'LNG', 'Coal', 'Hydrogen'],
Metals: ['Gold', 'Copper', 'Iron Ore', 'Lithium', 'Aluminum'],
Agriculture: ['Wheat', 'Corn', 'Rice', 'Soybeans', 'Sugar'],
Minerals: ['Phosphate', 'Potash', 'Silica', 'Gypsum'],
};

const SERVICES = [
'Logistics',
'Financing',
'Legal',
'Certification',
'Consulting',
];

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

export default function BuyerMapPage() {
const [allResources, setAllResources] = useState<Resource[]>([]);
const [category, setCategory] = useState('');
const [subcategory, setSubcategory] = useState('');
const [countryCode, setCountryCode] = useState('');
const [city, setCity] = useState('');
const [selectedServices, setSelectedServices] = useState<string[]>([]);

useEffect(() => {
try {
const stored = JSON.parse(localStorage.getItem('resources') || '[]');
setAllResources(Array.isArray(stored) ? stored : []);
} catch {
setAllResources([]);
}
}, []);

const countries = Country.getAllCountries();

const rawCities = useMemo(() => {
if (!countryCode) return [];
return City.getCitiesOfCountry(countryCode) ?? [];
}, [countryCode]);

const uniqueCities = useMemo(() => {
const seen = new Set<string>();
return rawCities.filter((ct) => {
const key = `${ct.countryCode}-${ct.name}`;
if (seen.has(key)) return false;
seen.add(key);
return true;
});
}, [rawCities]);

const subcategories = category ? RESOURCE_MAP[category] : [];

const toggleService = (service: string) => {
setSelectedServices((prev) =>
prev.includes(service)
? prev.filter((s) => s !== service)
: [...prev, service]
);
};

const filteredResources = allResources.filter((r) => {
const categoryMatch = !category || r.category === category;
const subcategoryMatch = !subcategory || r.subcategory === subcategory;
const countryMatch = !countryCode || r.countryCode === countryCode;
const cityMatch = !city || r.city === city;
const servicesMatch =
selectedServices.length === 0 ||
selectedServices.every((s) => (r.services || []).includes(s));

return (
categoryMatch &&
subcategoryMatch &&
countryMatch &&
cityMatch &&
servicesMatch
);
});

const mapResources = filteredResources.filter((r) => {
const lat = Number(r.lat);
const lng = Number(r.lng);
return Number.isFinite(lat) && Number.isFinite(lng);
});

const handleContactSeller = (resource: Resource) => {
const sellerName = resource.seller?.company || 'Seller';
const email = resource.seller?.email || '';
const phone = resource.seller?.phone || '';
const message =
`Contact ${sellerName}\n\n` +
`Resource: ${resource.category} / ${resource.subcategory}\n` +
`Location: ${resource.city || '-'}, ${resource.countryName || '-'}\n` +
`Email: ${email || '-'}\n` +
`Phone: ${phone || '-'}`;

alert(message);
};

return (
<div style={styles.page}>
<h1 style={styles.title}>Buyer — Resource Map</h1>

<div style={styles.filtersBox}>
<div style={styles.row}>
<select
style={styles.input}
value={category}
onChange={(e) => {
setCategory(e.target.value);
setSubcategory('');
}}
>
<option value="">All Resources</option>
{Object.keys(RESOURCE_MAP).map((c) => (
<option key={c} value={c}>
{c}
</option>
))}
</select>

<select
style={styles.input}
value={subcategory}
disabled={!category}
onChange={(e) => setSubcategory(e.target.value)}
>
<option value="">All Sub-categories</option>
{subcategories.map((s) => (
<option key={s} value={s}>
{s}
</option>
))}
</select>
</div>

<div style={styles.row}>
<select
style={styles.input}
value={countryCode}
onChange={(e) => {
setCountryCode(e.target.value);
setCity('');
}}
>
<option value="">All Countries</option>
{countries.map((c) => (
<option key={c.isoCode} value={c.isoCode}>
{c.name}
</option>
))}
</select>

<select
style={styles.input}
value={city}
disabled={!countryCode}
onChange={(e) => setCity(e.target.value)}
>
<option value="">All Cities</option>
{uniqueCities.map((ct, index) => (
<option
key={`${ct.countryCode}-${ct.name}-${index}`}
value={ct.name}
>
{ct.name}
</option>
))}
</select>
</div>

<div style={styles.servicesBox}>
{SERVICES.map((s) => (
<label key={s} style={styles.checkbox}>
<input
type="checkbox"
checked={selectedServices.includes(s)}
onChange={() => toggleService(s)}
/>{' '}
{s}
</label>
))}
</div>
</div>

<div style={styles.resultsBar}>
<span>{filteredResources.length} result(s)</span>
</div>

<div style={styles.mapWrapper}>
<MapContainer center={[20, 0]} zoom={2} style={styles.map}>
<TileLayer
attribution="© OpenStreetMap contributors"
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>

{mapResources.map((r) => (
<Marker key={r.id} position={[Number(r.lat), Number(r.lng)]}>
<Popup>
<div style={styles.popupBox}>
<strong>
{r.category} / {r.subcategory}
</strong>
<br />
{r.city || '-'}, {r.countryName || '-'}
<br />
{r.quantityUnit ? `Unit: ${r.quantityUnit}` : 'Unit: -'}
<br />
{r.currency ? `Currency: ${r.currency}` : 'Currency: -'}
<br />
Services: {r.services && r.services.length ? r.services.join(', ') : 'None'}
<br />
Seller: {r.seller?.company || '-'} — {r.seller?.contact || '-'}
<br />
<div style={styles.buttonRow}>
<a href={`/resource/${r.id}`} style={styles.detailsButton}>
View Details
</a>
<button
style={styles.contactButton}
onClick={() => handleContactSeller(r)}
>
Contact Seller
</button>
</div>
</div>
</Popup>
</Marker>
))}
</MapContainer>
</div>
</div>
);
}

const styles: Record<string, any> = {
page: {
background: 'black',
minHeight: '100vh',
padding: 20,
color: gold,
},
title: {
fontSize: 28,
marginBottom: 20,
},
filtersBox: {
border: `2px solid ${gold}`,
padding: 15,
marginBottom: 16,
},
row: {
display: 'flex',
gap: 12,
marginBottom: 12,
},
input: {
flex: 1,
background: 'black',
color: gold,
border: `1px solid ${gold}`,
padding: 10,
},
servicesBox: {
display: 'flex',
flexWrap: 'wrap',
gap: 16,
marginTop: 8,
},
checkbox: {
color: gold,
},
resultsBar: {
marginBottom: 12,
color: gold,
},
mapWrapper: {
border: `2px solid ${gold}`,
},
map: {
height: '70vh',
width: '100%',
},
popupBox: {
minWidth: 220,
},
buttonRow: {
display: 'flex',
gap: 8,
marginTop: 10,
flexWrap: 'wrap',
},
detailsButton: {
padding: '8px 12px',
background: 'transparent',
color: gold,
fontWeight: 'bold',
border: `1px solid ${gold}`,
textDecoration: 'none',
},
contactButton: {
padding: '8px 12px',
background: gold,
color: 'black',
fontWeight: 'bold',
border: 'none',
cursor: 'pointer',
},
};