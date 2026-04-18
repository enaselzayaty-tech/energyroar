"use client";

import { useState } from "react";
import { Country, City } from "country-state-city";

export default function LocationStep({
data,
onNext,
}: {
data: any;
onNext: (v: any) => void;
}) {
const [countryCode, setCountryCode] = useState(data?.countryCode ?? "");
const [city, setCity] = useState(data?.city ?? "");

const countries = Country.getAllCountries();
const cities = countryCode
? City.getCitiesOfCountry(countryCode)
: [];

return (
<div>
<h2>Location</h2>

<select
value={countryCode}
onChange={(e) => {
setCountryCode(e.target.value);
setCity("");
}}
>
<option value="">Select country</option>
{countries.map((c) => (
<option key={c.isoCode} value={c.isoCode}>
{c.name}
</option>
))}
</select>

<select
value={city}
onChange={(e) => setCity(e.target.value)}
disabled={!countryCode}
>
<option value="">Select city</option>
{cities.map((c) => (
<option key={`${c.name}-${c.latitude}`} value={c.name}>
{c.name}
</option>
))}
</select>

<button
onClick={() => onNext({ countryCode, city })}
disabled={!countryCode || !city}
>
Next
</button>
</div>
);
}