export default function ConsultancyPage() {
const services = [
{
title: 'Market Entry Strategy',
text: 'Support for energy and resource companies entering new regions, building commercial presence, and identifying serious market opportunities.',
},
{
title: 'Commercial Structuring',
text: 'Advisory on how to position supply, present opportunities, and structure commercial discussions with clarity and confidence.',
},
{
title: 'Cross-Border Trade Support',
text: 'Guidance for navigating international trade conversations, regional market access, and cross-border business development.',
},
{
title: 'Seller Positioning',
text: 'We help sellers present projects, resources, and available supply in a way that attracts credible buyers and partners.',
},
{
title: 'Buyer Advisory',
text: 'Consulting support for buyers looking to source strategically, assess opportunities, and connect with the right counterparties.',
},
{
title: 'Partnership Development',
text: 'Advisory for companies seeking stronger alliances, investor visibility, and long-term commercial relationships.',
},
]

const industries = [
'Energy',
'Oil & Gas',
'Metals',
'Minerals',
'Agriculture',
'Global Trade',
]

const strengths = [
'Premium market positioning',
'Serious global business focus',
'Strategic commercial thinking',
'Clean, high-trust presentation',
]

const process = [
{
step: '01',
title: 'Understand the opportunity',
text: 'We start by understanding what you are offering, seeking, or building and what commercial outcome you want to achieve.',
},
{
step: '02',
title: 'Shape the strategy',
text: 'We refine your positioning, clarify the message, and organize the opportunity into a stronger market-facing format.',
},
{
step: '03',
title: 'Support market engagement',
text: 'We help prepare you for stronger outreach, better conversations, and more credible visibility in the market.',
},
]

return (
<div style={styles.page}>
<nav style={styles.nav}>
<div style={styles.logo}>EnergyROAR</div>
<div style={styles.navLinks}>
<a href="/" style={styles.link}>Home</a>
<a href="/seller" style={styles.link}>Seller</a>
<a href="/buyer/map" style={styles.link}>Buyer Map</a>
<a href="/about" style={styles.link}>About</a>
<a href="/consultancy" style={styles.link}>Consultancy</a>
</div>
</nav>

<section style={styles.hero}>
<div style={styles.heroInner}>
<div style={styles.heroBadge}>EnergyROAR Advisory</div>

<h1 style={styles.heroTitle}>
Consultancy for energy, commodities, and resource growth
</h1>

<p style={styles.heroText}>
EnergyROAR provides strategic consultancy for companies operating across
energy and natural resource markets. We help businesses strengthen
positioning, improve visibility, and approach commercial opportunities
with greater credibility and direction.
</p>

<div style={styles.heroButtons}>
<a href="#contact" style={styles.primaryButton}>Request Consultancy</a>
<a href="#services" style={styles.secondaryButton}>Explore Services</a>
</div>
</div>
</section>

<section style={styles.lightSection}>
<div style={styles.container}>
<div style={styles.twoColumn}>
<div>
<h2 style={styles.sectionTitle}>Why EnergyROAR Consultancy</h2>
<p style={styles.paragraph}>
Our consultancy approach is built for serious market participants.
We combine strategic thinking with a premium-facing platform designed
for energy and resource visibility. That means clients receive more
than ideas. They receive guidance that is commercial, practical, and
focused on real positioning in the market.
</p>
<p style={styles.paragraph}>
Whether you are a seller seeking exposure, a buyer evaluating options,
or a company expanding into new markets, EnergyROAR helps you present
your opportunity more clearly and engage with greater confidence.
</p>
</div>

<div style={styles.highlightBox}>
<div style={styles.highlightTitle}>What sets us apart</div>
{strengths.map((item) => (
<div key={item} style={styles.highlightItem}>
<span style={styles.highlightDot}>•</span>
<span>{item}</span>
</div>
))}
</div>
</div>
</div>
</section>

<section id="services" style={styles.darkSection}>
<div style={styles.container}>
<div style={styles.sectionHeadingWrap}>
<p style={styles.sectionEyebrow}>Services</p>
<h2 style={styles.sectionTitleDark}>Consultancy Services</h2>
<p style={styles.sectionTextDark}>
Tailored support for companies navigating modern resource markets.
</p>
</div>

<div style={styles.cardGrid}>
{services.map((service) => (
<div key={service.title} style={styles.serviceCard}>
<h3 style={styles.cardTitle}>{service.title}</h3>
<p style={styles.cardText}>{service.text}</p>
</div>
))}
</div>
</div>
</section>

<section style={styles.lightSection}>
<div style={styles.container}>
<div style={styles.statementBox}>
<p style={styles.statementEyebrow}>Leadership Perspective</p>
<h2 style={styles.sectionTitle}>Built around credibility, clarity, and execution</h2>
<p style={styles.paragraph}>
Strong opportunities deserve strong presentation. EnergyROAR supports
clients with consultancy that is globally minded, commercially aware,
and designed to improve how opportunities are understood by the market.
</p>
<p style={styles.paragraph}>
We do not just help describe value. We help shape how that value is
positioned, communicated, and taken forward.
</p>
</div>
</div>
</section>

<section style={styles.darkSection}>
<div style={styles.container}>
<div style={styles.sectionHeadingWrap}>
<p style={styles.sectionEyebrow}>Approach</p>
<h2 style={styles.sectionTitleDark}>How we work</h2>
</div>

<div style={styles.processGrid}>
{process.map((item) => (
<div key={item.step} style={styles.processCard}>
<div style={styles.stepNumber}>{item.step}</div>
<h3 style={styles.cardTitle}>{item.title}</h3>
<p style={styles.cardText}>{item.text}</p>
</div>
))}
</div>
</div>
</section>

<section style={styles.lightSection}>
<div style={styles.container}>
<div style={styles.sectionHeadingWrapLight}>
<p style={styles.sectionEyebrowLight}>Focus Areas</p>
<h2 style={styles.sectionTitle}>Industries We Support</h2>
</div>

<div style={styles.pillWrap}>
{industries.map((industry) => (
<div key={industry} style={styles.pill}>
{industry}
</div>
))}
</div>
</div>
</section>

<section id="contact" style={styles.contactSection}>
<div style={styles.contactContainer}>
<p style={styles.sectionEyebrowLight}>Get in touch</p>
<h2 style={styles.contactTitle}>Request a consultancy conversation</h2>
<p style={styles.contactText}>
Tell us what you are offering, sourcing, developing, or exploring.
We will review your needs and help you understand how EnergyROAR
consultancy can support your next move.
</p>
<p style={styles.email}>
Or contact us directly at <a href="mailto:info@energyroar.ca" style={styles.emailLink}>info@energyroar.ca</a>
</p>
<form style={styles.form}>
<input type="text" placeholder="Name" style={styles.input} />
<input type="email" placeholder="Email" style={styles.input} />
<input type="text" placeholder="Company" style={styles.input} />

<select style={styles.input} defaultValue="">
<option value="" disabled>
Area of Interest
</option>
<option>Market Entry Strategy</option>
<option>Commercial Structuring</option>
<option>Cross-Border Trade Support</option>
<option>Seller Positioning</option>
<option>Buyer Advisory</option>
<option>Partnership Development</option>
</select>

<textarea
placeholder="Briefly describe your consultancy needs"
rows={6}
style={styles.textarea}
/>

<button type="submit" style={styles.submitButton}>
Send Inquiry
</button>
</form>
</div>
</section>
</div>
)
}

const styles: Record<string, React.CSSProperties> = {
page: {
backgroundColor: '#000000',
color: '#f5f0e6',
minHeight: '100vh',
fontFamily: 'Arial, sans-serif',
},

nav: {
display: 'flex',
justifyContent: 'space-between',
alignItems: 'center',
padding: '22px 40px',
borderBottom: '1px solid rgba(212, 175, 55, 0.18)',
backgroundColor: 'rgba(0, 0, 0, 0.96)',
position: 'sticky',
top: 0,
zIndex: 20,
},

logo: {
color: '#d4af37',
fontSize: '1.4rem',
fontWeight: 700,
letterSpacing: '0.04em',
},

navLinks: {
display: 'flex',
gap: '20px',
flexWrap: 'wrap',
},

link: {
color: '#f5f0e6',
textDecoration: 'none',
fontSize: '0.98rem',
},

hero: {
padding: '100px 24px 80px',
background: 'linear-gradient(135deg, #050505 0%, #111111 55%, rgba(212, 175, 55, 0.10) 100%)',
},

heroInner: {
maxWidth: '1050px',
margin: '0 auto',
},

heroBadge: {
display: 'inline-block',
color: '#d4af37',
border: '1px solid rgba(212, 175, 55, 0.25)',
padding: '8px 14px',
borderRadius: '999px',
fontSize: '0.9rem',
marginBottom: '18px',
letterSpacing: '0.08em',
textTransform: 'uppercase',
},

heroTitle: {
fontSize: '3.4rem',
lineHeight: 1.1,
color: '#fff7e3',
maxWidth: '850px',
margin: '0 0 20px 0',
},

heroText: {
fontSize: '1.08rem',
lineHeight: 1.8,
color: '#ddd4c3',
maxWidth: '760px',
marginBottom: '32px',
},

heroButtons: {
display: 'flex',
gap: '16px',
flexWrap: 'wrap',
},

primaryButton: {
backgroundColor: '#d4af37',
color: '#000000',
padding: '14px 24px',
borderRadius: '999px',
textDecoration: 'none',
fontWeight: 700,
},

secondaryButton: {
border: '1px solid #d4af37',
color: '#d4af37',
padding: '14px 24px',
borderRadius: '999px',
textDecoration: 'none',
fontWeight: 700,
},

lightSection: {
backgroundColor: '#f7f2e8',
color: '#161616',
padding: '75px 24px',
},

darkSection: {
backgroundColor: '#050505',
color: '#f5f0e6',
padding: '75px 24px',
},

contactSection: {
backgroundColor: '#f7f2e8',
color: '#161616',
padding: '80px 24px 100px',
},

container: {
maxWidth: '1100px',
margin: '0 auto',
},

contactContainer: {
maxWidth: '760px',
margin: '0 auto',
},

twoColumn: {
display: 'grid',
gridTemplateColumns: '1.5fr 1fr',
gap: '34px',
alignItems: 'start',
},

sectionHeadingWrap: {
marginBottom: '28px',
},

sectionHeadingWrapLight: {
marginBottom: '24px',
textAlign: 'center',
},

sectionEyebrow: {
color: '#d4af37',
textTransform: 'uppercase',
letterSpacing: '0.1em',
fontSize: '0.9rem',
marginBottom: '10px',
},

sectionEyebrowLight: {
color: '#8a6a14',
textTransform: 'uppercase',
letterSpacing: '0.1em',
fontSize: '0.9rem',
marginBottom: '10px',
textAlign: 'center',
},

sectionTitle: {
fontSize: '2.2rem',
color: '#171717',
margin: '0 0 18px 0',
},

sectionTitleDark: {
fontSize: '2.2rem',
color: '#d4af37',
margin: '0 0 12px 0',
},

sectionTextDark: {
color: '#d8cfbd',
lineHeight: 1.8,
maxWidth: '720px',
},

paragraph: {
fontSize: '1.02rem',
lineHeight: 1.85,
color: '#353535',
},

highlightBox: {
backgroundColor: '#ffffff',
borderRadius: '24px',
padding: '28px',
border: '1px solid rgba(0, 0, 0, 0.08)',
boxShadow: '0 12px 28px rgba(0, 0, 0, 0.06)',
},

highlightTitle: {
fontSize: '1.1rem',
color: '#8a6a14',
fontWeight: 700,
marginBottom: '16px',
},

highlightItem: {
display: 'flex',
alignItems: 'center',
gap: '10px',
color: '#333333',
marginBottom: '12px',
lineHeight: 1.7,
},

highlightDot: {
color: '#d4af37',
fontSize: '1.2rem',
lineHeight: 1,
},

cardGrid: {
display: 'grid',
gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
gap: '20px',
},

serviceCard: {
backgroundColor: '#111111',
border: '1px solid rgba(212, 175, 55, 0.16)',
borderRadius: '22px',
padding: '24px',
},

cardTitle: {
fontSize: '1.12rem',
color: '#fff3d1',
margin: '0 0 12px 0',
},

cardText: {
color: '#d3cab8',
lineHeight: 1.75,
margin: 0,
},

statementBox: {
background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.10), rgba(255, 255, 255, 0.95))',
borderRadius: '28px',
padding: '36px',
border: '1px solid rgba(212, 175, 55, 0.18)',
},

statementEyebrow: {
color: '#8a6a14',
textTransform: 'uppercase',
letterSpacing: '0.1em',
fontSize: '0.9rem',
marginBottom: '10px',
},

processGrid: {
display: 'grid',
gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
gap: '22px',
},

processCard: {
backgroundColor: '#111111',
border: '1px solid rgba(212, 175, 55, 0.16)',
borderRadius: '22px',
padding: '26px',
},

stepNumber: {
width: '52px',
height: '52px',
borderRadius: '50%',
backgroundColor: '#d4af37',
color: '#000000',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
fontWeight: 700,
marginBottom: '16px',
},

pillWrap: {
display: 'flex',
flexWrap: 'wrap',
gap: '14px',
justifyContent: 'center',
},

pill: {
padding: '12px 18px',
borderRadius: '999px',
backgroundColor: '#ffffff',
border: '1px solid rgba(0, 0, 0, 0.08)',
color: '#171717',
fontWeight: 600,
},

contactTitle: {
fontSize: '2.3rem',
color: '#171717',
textAlign: 'center',
margin: '0 0 14px 0',
},

contactText: {
textAlign: 'center',
color: '#444444',
lineHeight: 1.8,
marginBottom: '28px',
},

form: {
display: 'grid',
gap: '16px',
},

input: {
padding: '16px 18px',
borderRadius: '16px',
border: '1px solid #d6d0c5',
fontSize: '1rem',
outline: 'none',
backgroundColor: '#ffffff',
color: '#111111',
},

textarea: {
padding: '16px 18px',
borderRadius: '16px',
border: '1px solid #d6d0c5',
fontSize: '1rem',
outline: 'none',
resize: 'vertical',
backgroundColor: '#ffffff',
color: '#111111',
},

submitButton: {
backgroundColor: '#0b0b0b',
color: '#d4af37',
border: '1px solid #d4af37',
borderRadius: '999px',
padding: '15px 24px',
fontWeight: 700,
cursor: 'pointer',
},
}