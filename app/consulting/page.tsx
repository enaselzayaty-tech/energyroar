'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../lib/supabase'

export default function ConsultingPage() {
const router = useRouter()
const [loading, setLoading] = useState(true)
const [userEmail, setUserEmail] = useState('')

useEffect(() => {
const checkUser = async () => {
const {
data: { user },
} = await supabase.auth.getUser()


setUserEmail(user?.email || '')
setLoading(false)
}

checkUser()
}, [router])

async function handleLogout() {
await supabase.auth.signOut()
router.push('/login')
}

if (loading) {
return (
<div style={styles.loadingPage}>
<div style={styles.loadingCard}>
<h2 style={styles.loadingTitle}>Loading consulting portal...</h2>
<p style={styles.loadingText}>Please wait a moment.</p>
</div>
</div>
)
}

return (
<main style={styles.page}>
<div style={styles.watermark}>UNDER CONSTRUCTION</div>

<header style={styles.topBar}>
<div>
<div style={styles.brand}>EnergyROAR</div>
<div style={styles.brandSub}>Consulting Portal</div>
</div>

<div style={styles.topBarRight}>
<div style={styles.userBox}>
<span style={styles.userLabel}>Signed in as</span>
<span style={styles.userEmail}>{userEmail || 'Authenticated user'}</span>
</div>

<button style={styles.logoutButton} onClick={handleLogout}>
Logout
</button>
</div>
</header>

<section style={styles.hero}>
<div style={styles.heroLeft}>
<div style={styles.badge}>Strategic Advisory • Subsurface • Energy Transition</div>
<h1 style={styles.heroTitle}>
High-impact consulting for subsurface, field development, and integrated energy decision-making.
</h1>
<p style={styles.heroText}>
EnergyROAR Consulting supports operators, investors, and technical teams with integrated subsurface
interpretation, field development strategy, reserves-focused analysis, digital transformation planning,
and energy transition opportunity assessment.
</p>

<div style={styles.heroButtons}>
<a href="mailto:info@energyroar.ca" style={styles.primaryButton}>
Contact Consulting Team
</a>
<a href="#services" style={styles.secondaryButton}>
Explore Services
</a>
</div>
</div>

<div style={styles.heroRight}>
<div style={styles.heroPanel}>
<div style={styles.heroPanelTitle}>Advisory Focus</div>
<div style={styles.heroList}>
<div style={styles.heroListItem}>Integrated asset evaluation</div>
<div style={styles.heroListItem}>Field development planning</div>
<div style={styles.heroListItem}>Reservoir modeling and characterization</div>
<div style={styles.heroListItem}>Digital subsurface transformation</div>
<div style={styles.heroListItem}>Low-carbon strategy and value creation</div>
</div>
</div>
</div>
</section>

<section style={styles.statsSection}>
<div style={styles.statCard}>
<div style={styles.statNumber}>20+</div>
<div style={styles.statLabel}>Years of technical depth reflected in service positioning</div>
</div>
<div style={styles.statCard}>
<div style={styles.statNumber}>15+</div>
<div style={styles.statLabel}>Regional and international project environments</div>
</div>
<div style={styles.statCard}>
<div style={styles.statNumber}>End-to-End</div>
<div style={styles.statLabel}>From seismic and static models to strategy and economics</div>
</div>
<div style={styles.statCard}>
<div style={styles.statNumber}>Future-Ready</div>
<div style={styles.statLabel}>Energy transition, digitalization, and asset value focus</div>
</div>
</section>

<section style={styles.section} id="services">
<div style={styles.sectionHeader}>
<p style={styles.sectionEyebrow}>Core Services</p>
<h2 style={styles.sectionTitle}>What this consulting platform is built to deliver</h2>
<p style={styles.sectionText}>
The consulting offering is structured for clients who need technically strong, commercially aware, and
decision-ready input across subsurface, development, and strategic energy themes.
</p>
</div>

<div style={styles.cardGrid}>
<div style={styles.serviceCard}>
<h3 style={styles.cardTitle}>Integrated Asset Evaluation</h3>
<p style={styles.cardText}>
Integrated review of subsurface opportunity, uncertainty, production potential, and development pathways
to support investment and operational decisions.
</p>
</div>

<div style={styles.serviceCard}>
<h3 style={styles.cardTitle}>Field Development Planning</h3>
<p style={styles.cardText}>
Structuring development concepts, long-range scenarios, reservoir support studies, and implementation
logic to optimize value creation over the life of field assets.
</p>
</div>

<div style={styles.serviceCard}>
<h3 style={styles.cardTitle}>Reservoir Characterization</h3>
<p style={styles.cardText}>
Advanced interpretation across carbonate and clastic systems, with emphasis on structural behavior,
fractures, property modeling, and uncertainty-aware characterization.
</p>
</div>

<div style={styles.serviceCard}>
<h3 style={styles.cardTitle}>Static and Dynamic Model Support</h3>
<p style={styles.cardText}>
Practical support spanning geomodeling, subsurface integration, simulation-ready frameworks, and model
quality review for development and reserves workflows.
</p>
</div>

<div style={styles.serviceCard}>
<h3 style={styles.cardTitle}>Digital Subsurface Strategy</h3>
<p style={styles.cardText}>
Guidance on digital workflows, process improvement, integration architecture, and value capture from
subsurface technology implementation.
</p>
</div>

<div style={styles.serviceCard}>
<h3 style={styles.cardTitle}>Energy Transition Advisory</h3>
<p style={styles.cardText}>
Support for carbon utilization, geothermal opportunity framing, lower-emission planning, and broader
transition-aligned technical strategy.
</p>
</div>
</div>
</section>

<section style={styles.sectionAlt}>
<div style={styles.sectionHeader}>
<p style={styles.sectionEyebrow}>Capability Areas</p>
<h2 style={styles.sectionTitle}>Technical and strategic strengths</h2>
</div>

<div style={styles.twoCol}>
<div style={styles.panel}>
<h3 style={styles.panelTitle}>Subsurface & Development</h3>
<ul style={styles.list}>
<li>Reservoir modeling and geomodeling workflows</li>
<li>Fractured carbonate and clastic system evaluation</li>
<li>Static-to-dynamic integration support</li>
<li>Well planning input for development optimization</li>
<li>Reserves-oriented subsurface interpretation</li>
<li>Field development and scenario planning</li>
</ul>
</div>

<div style={styles.panel}>
<h3 style={styles.panelTitle}>Business & Transformation</h3>
<ul style={styles.list}>
<li>Project leadership across multidisciplinary teams</li>
<li>Digital transformation and process modeling</li>
<li>Stakeholder communication and executive presentation</li>
<li>Technology adoption and workflow improvement</li>
<li>Energy transition positioning and opportunity framing</li>
<li>Commercially aware technical decision support</li>
</ul>
</div>
</div>
</section>

<section style={styles.section}>
<div style={styles.sectionHeader}>
<p style={styles.sectionEyebrow}>Illustrative Impact</p>
<h2 style={styles.sectionTitle}>Sample consulting outcomes this portal is designed to support</h2>
</div>

<div style={styles.impactGrid}>
<div style={styles.impactCard}>
<div style={styles.impactBar}>
<div style={{ ...styles.impactFill, width: '88%' }} />
</div>
<h3 style={styles.cardTitle}>Development Readiness</h3>
<p style={styles.cardText}>
Turning fragmented technical inputs into coherent development concepts and clearer execution plans.
</p>
</div>

<div style={styles.impactCard}>
<div style={styles.impactBar}>
<div style={{ ...styles.impactFill, width: '78%' }} />
</div>
<h3 style={styles.cardTitle}>Value Clarity</h3>
<p style={styles.cardText}>
Helping clients compare upside, risk, uncertainty, and implementation effort in decision-ready form.
</p>
</div>

<div style={styles.impactCard}>
<div style={styles.impactBar}>
<div style={{ ...styles.impactFill, width: '84%' }} />
</div>
<h3 style={styles.cardTitle}>Workflow Efficiency</h3>
<p style={styles.cardText}>
Streamlining technical workflows so teams spend less time reconciling data and more time making progress.
</p>
</div>

<div style={styles.impactCard}>
<div style={styles.impactBar}>
<div style={{ ...styles.impactFill, width: '74%' }} />
</div>
<h3 style={styles.cardTitle}>Transition Alignment</h3>
<p style={styles.cardText}>
Positioning asset and portfolio thinking for a lower-carbon, digitally enabled future.
</p>
</div>
</div>
</section>

<section style={styles.sectionAlt}>
<div style={styles.sectionHeader}>
<p style={styles.sectionEyebrow}>Engagement Model</p>
<h2 style={styles.sectionTitle}>How clients can work with EnergyROAR Consulting</h2>
</div>

<div style={styles.cardGrid}>
<div style={styles.serviceCard}>
<h3 style={styles.cardTitle}>Technical Review Engagements</h3>
<p style={styles.cardText}>
Focused reviews of assets, models, development plans, subsurface risks, or technical submissions.
</p>
</div>

<div style={styles.serviceCard}>
<h3 style={styles.cardTitle}>Strategic Advisory Support</h3>
<p style={styles.cardText}>
Leadership-level input for project framing, capability building, or complex development decision-making.
</p>
</div>

<div style={styles.serviceCard}>
<h3 style={styles.cardTitle}>Project-Based Delivery</h3>
<p style={styles.cardText}>
Defined-scope consulting assignments with structured outputs, milestone reviews, and actionable conclusions.
</p>
</div>

<div style={styles.serviceCard}>
<h3 style={styles.cardTitle}>Ongoing Advisory Retainers</h3>
<p style={styles.cardText}>
Flexible support for teams who need recurring access to integrated subsurface and strategic guidance.
</p>
</div>
</div>
</section>

<section style={styles.section}>
<div style={styles.ctaBox}>
<div>
<p style={styles.sectionEyebrow}>Contact</p>
<h2 style={styles.ctaTitle}>Ready to discuss a consulting engagement?</h2>
<p style={styles.ctaText}>
This portal is being actively expanded. During this stage, direct inquiries can be sent by email for
consulting discussions, strategic advisory requests, or early collaboration conversations.
</p>
</div>

<div style={styles.ctaActions}>
<a href="mailto:info@energyroar.ca" style={styles.primaryButton}>
info@energyroar.ca
</a>
</div>
</div>
</section>
</main>
)
}

const gold = '#d4af37'
const goldSoft = 'rgba(212, 175, 55, 0.18)'
const bg = '#070707'
const panel = '#111111'
const text = '#f5f1e8'
const muted = '#cfc7b8'

const styles: Record<string, React.CSSProperties> = {
page: {
minHeight: '100vh',
background: 'linear-gradient(180deg, #050505 0%, #0a0a0a 100%)',
color: text,
padding: '28px',
fontFamily: 'Arial, sans-serif',
position: 'relative',
overflow: 'hidden',
},
loadingPage: {
minHeight: '100vh',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
backgroundColor: bg,
padding: '24px',
},
loadingCard: {
backgroundColor: panel,
border: `1px solid ${goldSoft}`,
borderRadius: '20px',
padding: '32px',
color: text,
width: '100%',
maxWidth: '520px',
textAlign: 'center',
},
loadingTitle: {
margin: 0,
marginBottom: '8px',
color: gold,
},
loadingText: {
margin: 0,
color: muted,
},
watermark: {
position: 'fixed',
top: '50%',
left: '50%',
transform: 'translate(-50%, -50%) rotate(-20deg)',
fontSize: '72px',
fontWeight: 800,
letterSpacing: '0.14em',
color: 'rgba(212, 175, 55, 0.05)',
pointerEvents: 'none',
zIndex: 0,
whiteSpace: 'nowrap',
},
topBar: {
position: 'relative',
zIndex: 1,
display: 'flex',
justifyContent: 'space-between',
alignItems: 'center',
gap: '20px',
flexWrap: 'wrap',
marginBottom: '28px',
padding: '18px 20px',
border: `1px solid ${goldSoft}`,
borderRadius: '18px',
backgroundColor: 'rgba(17,17,17,0.82)',
backdropFilter: 'blur(8px)',
},
brand: {
fontSize: '1.6rem',
fontWeight: 800,
color: gold,
},
brandSub: {
marginTop: '4px',
color: muted,
fontSize: '0.95rem',
},
topBarRight: {
display: 'flex',
alignItems: 'center',
gap: '14px',
flexWrap: 'wrap',
},
userBox: {
display: 'flex',
flexDirection: 'column',
gap: '4px',
},
userLabel: {
color: '#b8b0a2',
fontSize: '0.8rem',
},
userEmail: {
color: text,
fontWeight: 700,
fontSize: '0.95rem',
},
logoutButton: {
border: `1px solid ${gold}`,
background: 'transparent',
color: gold,
borderRadius: '999px',
padding: '12px 18px',
fontWeight: 700,
cursor: 'pointer',
},
hero: {
position: 'relative',
zIndex: 1,
display: 'grid',
gridTemplateColumns: '1.5fr 1fr',
gap: '24px',
alignItems: 'stretch',
marginBottom: '24px',
},
heroLeft: {
backgroundColor: panel,
border: `1px solid ${goldSoft}`,
borderRadius: '24px',
padding: '34px',
},
heroRight: {
display: 'flex',
},
badge: {
display: 'inline-block',
backgroundColor: 'rgba(212, 175, 55, 0.1)',
color: gold,
border: `1px solid ${goldSoft}`,
borderRadius: '999px',
padding: '8px 14px',
fontWeight: 700,
marginBottom: '18px',
},
heroTitle: {
margin: 0,
fontSize: '3rem',
lineHeight: 1.08,
marginBottom: '18px',
},
heroText: {
color: muted,
fontSize: '1.08rem',
lineHeight: 1.8,
maxWidth: '840px',
marginBottom: '24px',
},
heroButtons: {
display: 'flex',
gap: '14px',
flexWrap: 'wrap',
},
primaryButton: {
textDecoration: 'none',
backgroundColor: gold,
color: '#000',
padding: '14px 20px',
borderRadius: '999px',
fontWeight: 800,
display: 'inline-block',
},
secondaryButton: {
textDecoration: 'none',
border: `1px solid ${gold}`,
color: gold,
padding: '14px 20px',
borderRadius: '999px',
fontWeight: 800,
display: 'inline-block',
},
heroPanel: {
width: '100%',
backgroundColor: panel,
border: `1px solid ${goldSoft}`,
borderRadius: '24px',
padding: '28px',
display: 'flex',
flexDirection: 'column',
justifyContent: 'center',
},
heroPanelTitle: {
fontSize: '1.2rem',
fontWeight: 800,
color: gold,
marginBottom: '16px',
},
heroList: {
display: 'grid',
gap: '12px',
},
heroListItem: {
padding: '14px 16px',
borderRadius: '14px',
border: `1px solid rgba(255,255,255,0.06)`,
backgroundColor: '#151515',
color: text,
},
statsSection: {
position: 'relative',
zIndex: 1,
display: 'grid',
gridTemplateColumns: 'repeat(4, 1fr)',
gap: '18px',
marginBottom: '24px',
},
statCard: {
backgroundColor: panel,
border: `1px solid ${goldSoft}`,
borderRadius: '20px',
padding: '24px',
},
statNumber: {
fontSize: '1.8rem',
fontWeight: 800,
color: gold,
marginBottom: '10px',
},
statLabel: {
color: muted,
lineHeight: 1.6,
},
section: {
position: 'relative',
zIndex: 1,
marginBottom: '24px',
backgroundColor: panel,
border: `1px solid ${goldSoft}`,
borderRadius: '24px',
padding: '34px',
},
sectionAlt: {
position: 'relative',
zIndex: 1,
marginBottom: '24px',
backgroundColor: '#0d0d0d',
border: `1px solid ${goldSoft}`,
borderRadius: '24px',
padding: '34px',
},
sectionHeader: {
marginBottom: '24px',
},
sectionEyebrow: {
color: gold,
fontWeight: 800,
textTransform: 'uppercase',
letterSpacing: '0.08em',
fontSize: '0.82rem',
margin: 0,
marginBottom: '10px',
},
sectionTitle: {
margin: 0,
marginBottom: '12px',
fontSize: '2rem',
},
sectionText: {
margin: 0,
color: muted,
lineHeight: 1.8,
maxWidth: '900px',
},
cardGrid: {
display: 'grid',
gridTemplateColumns: 'repeat(3, 1fr)',
gap: '18px',
},
serviceCard: {
backgroundColor: '#151515',
border: `1px solid rgba(255,255,255,0.06)`,
borderRadius: '20px',
padding: '22px',
},
cardTitle: {
margin: 0,
marginBottom: '10px',
color: text,
fontSize: '1.15rem',
},
cardText: {
margin: 0,
color: muted,
lineHeight: 1.75,
},
twoCol: {
display: 'grid',
gridTemplateColumns: '1fr 1fr',
gap: '18px',
},
panel: {
backgroundColor: '#151515',
border: `1px solid rgba(255,255,255,0.06)`,
borderRadius: '20px',
padding: '24px',
},
panelTitle: {
margin: 0,
marginBottom: '14px',
color: gold,
fontSize: '1.15rem',
},
list: {
margin: 0,
paddingLeft: '18px',
color: muted,
lineHeight: 2,
},
impactGrid: {
display: 'grid',
gridTemplateColumns: 'repeat(4, 1fr)',
gap: '18px',
},
impactCard: {
backgroundColor: '#151515',
border: `1px solid rgba(255,255,255,0.06)`,
borderRadius: '20px',
padding: '20px',
},
impactBar: {
width: '100%',
height: '12px',
borderRadius: '999px',
backgroundColor: '#242424',
overflow: 'hidden',
marginBottom: '16px',
},
impactFill: {
height: '100%',
borderRadius: '999px',
background: 'linear-gradient(90deg, #8f6a12 0%, #d4af37 100%)',
},
ctaBox: {
display: 'flex',
justifyContent: 'space-between',
alignItems: 'center',
gap: '20px',
flexWrap: 'wrap',
},
ctaTitle: {
margin: 0,
marginBottom: '10px',
fontSize: '2rem',
},
ctaText: {
margin: 0,
color: muted,
lineHeight: 1.8,
maxWidth: '860px',
},
ctaActions: {
display: 'flex',
alignItems: 'center',
},
}