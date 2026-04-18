"use client";

import { useEffect, useState } from "react";
import { Country, City } from "country-state-city";

export default function Filters() {
const [countryCode, setCountryCode] = useState("");
const [city, setCity] = useState("");

const [countries, setCountries] = useState<any[]>([]);
const [cities, setCities] = useState<any[]>([]);

// Load countries once
useEffect(() => {
setCountries(Country.getAllCountries());
}, []);

// Load cities when country changes
useEffect(() => {
if (!countryCode) {
setCities([]);
setCity("");
return;
}

const countryCities = City.getCitiesOfCountry(countryCode);
setCities(countryCities || []);
setCity("");
}, [countryCode]);

return (
<div style={container}>
<h2 style={title}>Resource Filters</h2>

{/* COUNTRY */}
<select
style={select}
value={countryCode}
onChange={(e) => setCountryCode(e.target.value)}
>
<option value="">Select country</option>
{countries.map((c) => (
<option key={c.isoCode} value={c.isoCode}>
{c.name}
</option>
))}
</select>

{/* CITY */}
<select
style={select}
value={city}
onChange={(e) => setCity(e.target.value)}
disabled={!countryCode}
>
<option value="">Select city</option>
{cities.map((c) => (
<option
key={`${c.name}-${c.latitude}-${c.longitude}`}
value={c.name}
>
{c.name}
</option>
))}
</select>
</div>
);
}

/* ---------------- STYLES ---------------- */

const container: React.CSSProperties = {
background: "#111",
padding: "20px",
borderRadius: "12px",
width: "100%",
maxWidth: "320px",
};

const title: React.CSSProperties = {
color: "#f5c400",
marginBottom: "1rem",
};

const select: React.CSSProperties = {
width: "100%",
padding: "12px",
marginBottom: "12px",
borderRadius: "8px",
border: "1px solid #333",
background: "#000",
color: "#fff",
};