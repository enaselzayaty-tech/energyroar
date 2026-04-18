"use client";

type Props = {
data: {
country: string;
city: string;
};
setData: (data: any) => void;
};

export default function LocationSection({ data, setData }: Props) {
return (
<section>
<h2 className="section-title">Location</h2>

{/* COUNTRY */}
<label>Country</label>
<select
value={data.country}
onChange={(e) =>
setData({
...data,
country: e.target.value,
city: "",
})
}
>
<option value="">Select country</option>
<option value="Canada">Canada</option>
<option value="United States">United States</option>
<option value="Mexico">Mexico</option>
</select>

{/* CITY / REGION */}
<label>City / Region (optional)</label>
<select
value={data.city}
onChange={(e) =>
setData({
...data,
city: e.target.value,
})
}
disabled={!data.country}
>
<option value="">Select city</option>

{data.country === "Canada" && (
<></>