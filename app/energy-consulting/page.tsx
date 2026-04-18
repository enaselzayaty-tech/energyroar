export default function EnergyConsultingPage() {
  const services = [
    {
      title: 'Integrated Asset & Subsurface Advisory',
      text: 'Expert support for field development planning, reservoir characterization, reserves growth, reserves maturation, and integrated asset management across complex upstream systems.',
    },
    {
      title: 'Drilling & Well Engineering',
      text: 'Advisory for well planning, drilling operations, casing and cementing design, drilling fluids, directional drilling, rig execution, and operational efficiency.',
    },
    {
      title: 'Field Development Planning',
      text: 'End-to-end development planning integrating subsurface, drilling, production, facilities, economics, HSE priorities, and long-term asset performance.',
    },
    {
      title: 'Digital Energy Transformation',
      text: 'Implementation of digital subsurface workflows, integrated modeling solutions, process optimization, and value-driven technical transformation.',
    },
    {
      title: 'Energy Transition & Carbon Strategy',
      text: 'Consulting on carbon utilization, sequestration strategy, low-carbon asset planning, geothermal opportunity screening, and practical energy transition pathways.',
    },
    {
      title: 'Project & Technical Leadership',
      text: 'Senior-level support for multidisciplinary projects requiring strategic oversight, stakeholder coordination, technical governance, and execution control.',
    },
  ]

  const qualifications = [
    'Extensive experience across subsurface, drilling, field development, and integrated asset studies',
    'Project exposure spanning giant fields, mature assets, and complex reservoir systems',
    'Background in reservoir modeling, drilling operations, reserves work, and development planning',
    'Experience supporting digital transformation and integrated technical workflows',
    'Practical understanding of carbon strategy, energy transition, and lower-emission development pathways',
    'International exposure across multiple countries, basins, operating environments, and client settings',
  ]

  const sectors = [
    'Oil & Gas',
    'Subsurface Studies',
    'Reservoir Modeling',
    'Drilling Operations',
    'Field Development',
    'Integrated Asset Management',
    'Digital Energy',
    'Energy Transition',
  ]

  const approach = [
    {
      step: '01',
      title: 'Assess the opportunity',
      text: 'We begin by reviewing the technical and commercial context, identifying the asset challenge, development objective, or operational priority.',
    },
    {
      step: '02',
      title: 'Structure the technical response',
      text: 'We define the right advisory pathway, from drilling and development planning to subsurface integration, digital implementation, or transition strategy.',
    },
    {
      step: '03',
      title: 'Support execution and decisions',
      text: 'We provide practical guidance that strengthens decision quality, improves visibility, and supports real project progress.',
    },
  ]

  return (
    <div style={styles.page}>
      <div style={styles.banner}>
        EnergyROAR website currently in development. Select sections are being refined as content is added.
      </div>

      <nav style={styles.nav}>
        <div style={styles.logo}>EnergyROAR</div>

        <div style={styles.navLinks}>
          <a href="/" style={styles.link}>Home</a>
          <a href="/consultancy" style={styles.link}>Consultancy</a>
          <a href="/energy-consulting" style={styles.link}>Energy Consulting</a>
          <a href="#services" style={styles.link}>Services</a>
          <a href="#contact" style={styles.link}>Contact</a>
        </div>
      </nav>

      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.container}>
          <div style={styles.heroContent}>
            <div style={styles.heroBadge}>Specialized Energy Advisory</div>

            <h1 style={styles.heroTitle}>
              Advanced consulting for subsurface, drilling, and field development
            </h1>

            <p style={styles.heroText}>
              A specialized consulting offering within EnergyROAR, built on deep
              technical experience across subsurface systems, drilling operations,
              integrated asset development, digital transformation, and modern
              energy transition strategy.
            </p>

            <div style={styles.heroButtons}>
              <a href="#contact" style={styles.primaryButton}>Request Advisory</a>
              <a href="#services" style={styles.secondaryButton}>View Services</a>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.metricsSection}>
        <div style={styles.container}>
          <div style={styles.metricsGrid}>
            <div style={styles.metricCard}>
              <div style={styles.metricValue}>Global</div>
              <div style={styles.metricLabel}>multi-region technical and project exposure</div>
              <div style={styles.metricBar}>
                <div style={{ ...styles.metricFill, width: '88%' }} />
              </div>
            </div>

            <div style={styles.metricCard}>
              <div style={styles.metricValue}>Integrated</div>
              <div style={styles.metricLabel}>coverage across drilling, subsurface, and development</div>
              <div style={styles.metricBar}>
                <div style={{ ...styles.metricFill, width: '94%' }} />
              </div>
            </div>

            <div style={styles.metricCard}>
              <div style={styles.metricValue}>Strategic</div>
              <div style={styles.metricLabel}>support for execution, planning, and transition priorities</div>
              <div style={styles.metricBar}>
                <div style={{ ...styles.metricFill, width: '84%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.lightSection}>
        <div style={styles.container}>
          <div style={styles.twoColumn}>
            <div>
              <p style={styles.sectionEyebrowLight}>Capability Overview</p>
              <h2 style={styles.sectionTitle}>Built on real technical depth</h2>

              <p style={styles.paragraph}>
                This consulting practice is designed for operators, investors,
                and project teams requiring experienced guidance across upstream
                energy systems. It is tailored for technically demanding work,
                not generic advisory.
              </p>

              <p style={styles.paragraph}>
                With qualifications spanning giant fields, reservoir modeling,
                drilling operations, integrated field planning, and digital
                implementation, EnergyROAR provides practical, execution-aware
                consulting support.
              </p>
            </div>

            <div style={styles.summaryCard}>
              <div style={styles.summaryItem}>
                <div style={styles.summaryNumber}>Technical</div>
                <div style={styles.summaryText}>
                  subsurface, drilling, development, and integrated asset expertise
                </div>
              </div>

              <div style={styles.summaryDivider} />

              <div style={styles.summaryItem}>
                <div style={styles.summaryNumber}>International</div>
                <div style={styles.summaryText}>
                  experience across diverse countries, reservoirs, and operating contexts
                </div>
              </div>

              <div style={styles.summaryDivider} />

              <div style={styles.summaryItem}>
                <div style={styles.summaryNumber}>Strategic</div>
                <div style={styles.summaryText}>
                  support for both technical execution and long-term value creation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" style={styles.darkSection}>
        <div style={styles.container}>
          <p style={styles.sectionEyebrow}>Services</p>
          <h2 style={styles.sectionTitleGold}>Core consulting services</h2>
          <p style={styles.sectionTextDark}>
            Specialized support for upstream energy, asset performance,
            drilling delivery, digital integration, and transition planning.
          </p>

          <div style={styles.cardGrid}>
            {services.map((service) => (
              <div key={service.title} style={styles.card}>
                <h3 style={styles.cardTitle}>{service.title}</h3>
                <p style={styles.cardText}>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.visualSection}>
        <div style={styles.visualOverlay} />
        <div style={styles.container}>
          <div style={styles.visualTextWrap}>
            <p style={styles.sectionEyebrow}>Technical Focus</p>
            <h2 style={styles.sectionTitleGold}>Integrated technical thinking from reservoir to execution</h2>
            <p style={styles.sectionTextDark}>
              This advisory model supports complex decisions across subsurface systems,
              field development planning, drilling operations, and long-term asset value.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.lightSection}>
        <div style={styles.container}>
          <p style={styles.sectionEyebrowLight}>Qualifications</p>
          <h2 style={styles.sectionTitle}>Professional capability profile</h2>

          <div style={styles.qualificationsBox}>
            {qualifications.map((item) => (
              <div key={item} style={styles.qualificationItem}>
                <span style={styles.qualificationDot}>•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.darkSection}>
        <div style={styles.container}>
          <p style={styles.sectionEyebrow}>Approach</p>
          <h2 style={styles.sectionTitleGold}>How we work</h2>

          <div style={styles.timeline}>
            {approach.map((item, index) => (
              <div key={item.step} style={styles.timelineItem}>
                <div style={styles.timelineLeft}>
                  <div style={styles.stepNumber}>{item.step}</div>
                  {index !== approach.length - 1 && <div style={styles.timelineLine} />}
                </div>

                <div style={styles.timelineCard}>
                  <h3 style={styles.cardTitle}>{item.title}</h3>
                  <p style={styles.cardText}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.lightSection}>
        <div style={styles.container}>
          <p style={styles.sectionEyebrowLight}>Focus Areas</p>
          <h2 style={styles.sectionTitle}>Industries & capabilities</h2>

          <div style={styles.pillWrap}>
            {sectors.map((sector) => (
              <div key={sector} style={styles.pill}>
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={styles.contactSection}>
        <div style={styles.contactContainer}>
          <p style={styles.sectionEyebrowLight}>Contact</p>
          <h2 style={styles.contactTitle}>Request advisory support</h2>

          <p style={styles.contactText}>
            For consulting inquiries related to subsurface, drilling, field
            development, digital energy, or energy transition, contact:
          </p>

          <p style={styles.email}>
            <a href="mailto:info@energyroar.ca" style={styles.emailLink}>
              info@energyroar.ca
            </a>
          </p>

          <p style={styles.contactSubtext}>
            Additional website sections are currently being refined as EnergyROAR continues to develop.
          </p>
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
    paddingTop: '42px',
  },

  banner: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#d4af37',
    color: '#000000',
    textAlign: 'center',
    padding: '8px 12px',
    fontWeight: 700,
    fontSize: '0.9rem',
    zIndex: 999,
  },

  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '22px 40px',
    borderBottom: '1px solid rgba(212, 175, 55, 0.18)',
    backgroundColor: 'rgba(0, 0, 0, 0.96)',
    position: 'sticky',
    top: '42px',
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
    position: 'relative',
    padding: '120px 24px 100px',
    backgroundImage: "url('/energy-hero.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
  },

  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.72) 45%, rgba(212,175,55,0.16) 100%)',
  },

  heroContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '860px',
  },

  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
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
    backgroundColor: 'rgba(0,0,0,0.25)',
  },

  heroTitle: {
    fontSize: '3.5rem',
    lineHeight: 1.08,
    color: '#fff7e3',
    maxWidth: '860px',
    margin: '0 0 20px 0',
  },

  heroText: {
    fontSize: '1.08rem',
    lineHeight: 1.8,
    color: '#ede4d3',
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
    backgroundColor: 'rgba(0,0,0,0.28)',
  },

  metricsSection: {
    backgroundColor: '#080808',
    padding: '30px 24px 24px',
    borderTop: '1px solid rgba(212,175,55,0.12)',
  },

  metricsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '20px',
  },

  metricCard: {
    backgroundColor: '#111111',
    border: '1px solid rgba(212,175,55,0.14)',
    borderRadius: '22px',
    padding: '24px',
  },

  metricValue: {
    color: '#d4af37',
    fontSize: '1.4rem',
    fontWeight: 700,
    marginBottom: '8px',
  },

  metricLabel: {
    color: '#d8cfbd',
    lineHeight: 1.7,
    marginBottom: '16px',
  },

  metricBar: {
    height: '8px',
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: '999px',
    overflow: 'hidden',
  },

  metricFill: {
    height: '100%',
    backgroundColor: '#d4af37',
    borderRadius: '999px',
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

  visualSection: {
    position: 'relative',
    padding: '110px 24px',
    backgroundImage: "url('/energy-tech.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
  },

  visualOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(90deg, rgba(0,0,0,0.84) 0%, rgba(0,0,0,0.70) 55%, rgba(212,175,55,0.08) 100%)',
  },

  visualTextWrap: {
    maxWidth: '720px',
    position: 'relative',
    zIndex: 2,
  },

  contactSection: {
    backgroundColor: '#f7f2e8',
    color: '#161616',
    padding: '80px 24px 100px',
  },

  twoColumn: {
    display: 'grid',
    gridTemplateColumns: '1.35fr 1fr',
    gap: '34px',
    alignItems: 'start',
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
  },

  sectionTitle: {
    fontSize: '2.2rem',
    color: '#171717',
    margin: '0 0 18px 0',
  },

  sectionTitleGold: {
    fontSize: '2.2rem',
    color: '#d4af37',
    margin: '0 0 12px 0',
  },

  sectionTextDark: {
    color: '#d8cfbd',
    lineHeight: 1.8,
    maxWidth: '740px',
    marginBottom: '26px',
  },

  paragraph: {
    fontSize: '1.02rem',
    lineHeight: 1.85,
    color: '#353535',
  },

  summaryCard: {
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    padding: '28px',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    boxShadow: '0 12px 28px rgba(0, 0, 0, 0.06)',
  },

  summaryItem: {},

  summaryNumber: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#8a6a14',
    marginBottom: '6px',
  },

  summaryText: {
    color: '#444444',
    lineHeight: 1.7,
  },

  summaryDivider: {
    height: '1px',
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    margin: '18px 0',
  },

  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '20px',
  },

  card: {
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

  qualificationsBox: {
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    padding: '30px',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    boxShadow: '0 12px 28px rgba(0, 0, 0, 0.06)',
  },

  qualificationItem: {
    display: 'flex',
    gap: '10px',
    alignItems: 'flex-start',
    color: '#333333',
    lineHeight: 1.8,
    marginBottom: '12px',
  },

  qualificationDot: {
    color: '#d4af37',
    fontSize: '1.2rem',
    lineHeight: 1,
  },

  timeline: {
    display: 'grid',
    gap: '24px',
    maxWidth: '900px',
  },

  timelineItem: {
    display: 'grid',
    gridTemplateColumns: '70px 1fr',
    gap: '18px',
    alignItems: 'stretch',
  },

  timelineLeft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  timelineLine: {
    width: '2px',
    flex: 1,
    backgroundColor: 'rgba(212,175,55,0.25)',
    marginTop: '10px',
  },

  timelineCard: {
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
    flexShrink: 0,
  },

  pillWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '14px',
  },

  pill: {
    padding: '12px 18px',
    borderRadius: '999px',
    backgroundColor: '#ffffff',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    color: '#171717',
    fontWeight: 600,
  },

  contactContainer: {
    maxWidth: '760px',
    margin: '0 auto',
    textAlign: 'center',
  },

  contactTitle: {
    fontSize: '2.3rem',
    color: '#171717',
    margin: '0 0 14px 0',
  },

  contactText: {
    color: '#444444',
    lineHeight: 1.8,
    marginBottom: '18px',
  },

  email: {
    textAlign: 'center',
    marginBottom: '18px',
  },

  emailLink: {
    color: '#d4af37',
    textDecoration: 'none',
    fontWeight: 700,
    fontSize: '1.15rem',
  },

  contactSubtext: {
    color: '#666666',
    lineHeight: 1.7,
  },
}