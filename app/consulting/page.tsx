"use client";

export default function ConsultingPage() {
  return (
    <div style={styles.page}>
      <div style={styles.banner}>EnergyROAR Advisory — Launching Soon</div>

      <header style={styles.header}>
        <div style={styles.logoWrap}>
          <img
            src="/energyroar-logo.png"
            alt="EnergyROAR"
            style={styles.logo}
          />
          <div style={styles.logoText}>EnergyROAR</div>
        </div>

        <a href="mailto:info@energyroar.ca" style={styles.headerButton}>
          Contact
        </a>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroGlow} />

        <div style={styles.heroInner}>
          <p style={styles.eyebrow}>Strategic Energy &amp; Resource Advisory</p>

          <h1 style={styles.heroTitle}>
            Strategic advisory for complex energy, industrial, and capital
            decisions.
          </h1>

          <p style={styles.heroText}>
            EnergyROAR supports operators, investors, and technical teams with
            high-impact advisory across project development, subsurface
            strategy, drilling-informed insight, and commercially grounded
            decision-making.
          </p>

          <div style={styles.heroButtons}>
            <a href="mailto:info@energyroar.ca" style={styles.primaryButton}>
              Request Advisory
            </a>
            <a href="#capabilities" style={styles.secondaryButton}>
              Explore Capabilities
            </a>
          </div>
        </div>
      </section>

      <section style={styles.metricsSection}>
        <div style={styles.metricsGrid}>
          <div style={styles.metricCard}>
            <div style={styles.metricLabel}>Focus</div>
            <div style={styles.metricValue}>Energy</div>
            <div style={styles.metricText}>Resource-sector strategy and technical-commercial advisory</div>
          </div>

          <div style={styles.metricCard}>
            <div style={styles.metricLabel}>Approach</div>
            <div style={styles.metricValue}>Field + Strategy</div>
            <div style={styles.metricText}>Practical insight shaped by operational awareness and execution thinking</div>
          </div>

          <div style={styles.metricCard}>
            <div style={styles.metricLabel}>Perspective</div>
            <div style={styles.metricValue}>Global</div>
            <div style={styles.metricText}>Experience informed by exposure across key energy regions</div>
          </div>
        </div>
      </section>

      <section id="capabilities" style={styles.section}>
        <div style={styles.sectionHeading}>
          <p style={styles.sectionEyebrow}>Capabilities</p>
          <h2 style={styles.sectionTitle}>
            Advisory built for technically demanding projects and high-value strategic decisions.
          </h2>
          <p style={styles.sectionText}>
            We bring together strategic clarity, project thinking, and
            field-informed perspective to support complex opportunities across
            the energy value chain.
          </p>
        </div>

        <div style={styles.cardsThree}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Strategic Advisory</h3>
            <p style={styles.cardBody}>
              Executive-level guidance on growth pathways, portfolio direction,
              market positioning, and opportunity framing.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Project Development Support</h3>
            <p style={styles.cardBody}>
              Structured thinking for staged developments, capital-aware
              planning, and technically grounded project progression.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Technical-Commercial Positioning</h3>
            <p style={styles.cardBody}>
              Clear presentation of technical assets for partners,
              stakeholders, and investment-facing discussions.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.splitSection}>
        <div style={styles.splitLeft}>
          <p style={styles.sectionEyebrow}>Field &amp; Drilling Exposure</p>
          <h2 style={styles.sectionTitle}>
            Grounded perspective shaped by real-world operating environments.
          </h2>
          <p style={styles.sectionText}>
            EnergyROAR integrates direct drilling and field exposure across
            multiple regions, bringing practical operational awareness to
            advisory work that involves technical complexity, execution risk,
            and strategic capital decisions.
          </p>

          <div style={styles.regionList}>
            <div style={styles.regionItem}>North America</div>
            <div style={styles.regionItem}>Middle East</div>
            <div style={styles.regionItem}>Africa</div>
            <div style={styles.regionItem}>Syria</div>
          </div>
        </div>

        <div style={styles.splitRight}>
          <div style={styles.imagePanel}>
            <img
              src="/energyroar-logo.png"
              alt="EnergyROAR"
              style={styles.panelLogo}
            />
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.sectionHeading}>
          <p style={styles.sectionEyebrow}>Expertise</p>
          <h2 style={styles.sectionTitle}>
            Sector-facing expertise across subsurface, development, and transition strategy.
          </h2>
        </div>

        <div style={styles.cardsGrid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Integrated Asset Evaluation</h3>
            <p style={styles.cardBody}>
              Technical and commercial framing to support more confident capital
              and development decisions.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Field Development Planning</h3>
            <p style={styles.cardBody}>
              Structured development thinking for assets, staged projects, and
              long-horizon opportunities.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Reservoir &amp; Subsurface Strategy</h3>
            <p style={styles.cardBody}>
              Reservoir-focused interpretation and subsurface-informed planning
              for technically demanding opportunities.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Digital Subsurface Workflows</h3>
            <p style={styles.cardBody}>
              Modern digital structure, analytics support, and workflow clarity
              for technical teams.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Energy Transition Positioning</h3>
            <p style={styles.cardBody}>
              Strategic framing of lower-carbon opportunities and evolving
              energy market exposure.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Execution-Oriented Thinking</h3>
            <p style={styles.cardBody}>
              Advisory grounded in practical constraints, strategic alignment,
              and real decision-making environments.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.darkBand}>
        <div style={styles.bandInner}>
          <div style={styles.bandLeft}>
            <p style={styles.sectionEyebrow}>Positioning</p>
            <h2 style={styles.bandTitle}>
              Technical depth. Strategic clarity. Practical impact.
            </h2>
          </div>

          <div style={styles.bandRight}>
            <p style={styles.bandText}>
              EnergyROAR operates as a focused advisory platform for select
              opportunities where technical complexity and strategic direction
              matter equally.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.contactSection}>
        <div style={styles.contactCard}>
          <p style={styles.sectionEyebrow}>Contact</p>
          <h2 style={styles.contactTitle}>
            Discuss a project, partnership, or advisory need.
          </h2>
          <p style={styles.contactText}>
            For consulting inquiries, strategic discussions, or early-stage
            opportunities, reach out directly.
          </p>

          <div style={styles.contactButtons}>
            <a href="mailto:info@energyroar.ca" style={styles.primaryButton}>
              info@energyroar.ca
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top left, rgba(245,185,66,0.08), transparent 22%), #060606",
    color: "#ffffff",
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },

  banner: {
    textAlign: "center" as const,
    padding: "10px 16px",
    fontSize: "13px",
    background: "linear-gradient(90deg, #f5b942, #d89c10)",
    color: "#111111",
    fontWeight: 700,
    letterSpacing: "0.5px",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "22px 46px",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
    background: "rgba(6,6,6,0.82)",
    backdropFilter: "blur(10px)",
    position: "sticky" as const,
    top: 0,
    zIndex: 20,
  },

  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },

  logo: {
    height: "90px",
    width: "auto",
    objectFit: "contain" as const,
  },

  logoText: {
    fontSize: "30px",
    fontWeight: 800,
    color: "#f5b942",
    letterSpacing: "-0.2px",
  },

  headerButton: {
    background: "#f5b942",
    color: "#111111",
    textDecoration: "none",
    padding: "12px 20px",
    borderRadius: "999px",
    fontWeight: 700,
    fontSize: "14px",
    boxShadow: "0 8px 30px rgba(245,185,66,0.18)",
  },

  hero: {
    position: "relative" as const,
    padding: "110px 46px 90px",
    overflow: "hidden" as const,
  },

  heroGlow: {
    position: "absolute" as const,
    top: "40px",
    right: "-120px",
    width: "420px",
    height: "420px",
    background: "radial-gradient(circle, rgba(245,185,66,0.16), transparent 70%)",
    pointerEvents: "none" as const,
  },

  heroInner: {
    maxWidth: "980px",
  },

  eyebrow: {
    fontSize: "13px",
    textTransform: "uppercase" as const,
    letterSpacing: "1px",
    color: "#d8a928",
    fontWeight: 700,
    marginBottom: "18px",
  },

  heroTitle: {
    fontSize: "68px",
    lineHeight: 1.02,
    fontWeight: 800,
    letterSpacing: "-2px",
    margin: "0 0 24px 0",
    maxWidth: "1050px",
  },

  heroText: {
    fontSize: "20px",
    lineHeight: 1.8,
    color: "#d0d0d0",
    maxWidth: "780px",
    margin: "0 0 34px 0",
  },

  heroButtons: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap" as const,
  },

  primaryButton: {
    display: "inline-block",
    background: "#f5b942",
    color: "#111111",
    textDecoration: "none",
    padding: "14px 24px",
    borderRadius: "999px",
    fontWeight: 700,
    fontSize: "15px",
    boxShadow: "0 10px 30px rgba(245,185,66,0.18)",
  },

  secondaryButton: {
    display: "inline-block",
    background: "transparent",
    color: "#ffffff",
    textDecoration: "none",
    padding: "14px 24px",
    borderRadius: "999px",
    fontWeight: 700,
    fontSize: "15px",
    border: "1px solid rgba(255,255,255,0.16)",
  },

  metricsSection: {
    padding: "0 46px 40px",
  },

  metricsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "18px",
  },

  metricCard: {
    background: "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.02))",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "20px",
    padding: "24px",
    boxShadow: "0 14px 32px rgba(0,0,0,0.22)",
  },

  metricLabel: {
    fontSize: "12px",
    textTransform: "uppercase" as const,
    color: "#d8a928",
    letterSpacing: "1px",
    fontWeight: 700,
    marginBottom: "10px",
  },

  metricValue: {
    fontSize: "28px",
    fontWeight: 800,
    marginBottom: "8px",
    letterSpacing: "-0.6px",
  },

  metricText: {
    fontSize: "15px",
    lineHeight: 1.7,
    color: "#cfcfcf",
  },

  section: {
    padding: "72px 46px 20px",
  },

  sectionHeading: {
    maxWidth: "880px",
    marginBottom: "30px",
  },

  sectionEyebrow: {
    fontSize: "12px",
    textTransform: "uppercase" as const,
    color: "#d8a928",
    letterSpacing: "1px",
    fontWeight: 700,
    marginBottom: "10px",
  },

  sectionTitle: {
    fontSize: "40px",
    lineHeight: 1.12,
    fontWeight: 800,
    letterSpacing: "-1px",
    margin: "0 0 16px 0",
    maxWidth: "900px",
  },

  sectionText: {
    fontSize: "18px",
    lineHeight: 1.8,
    color: "#cfcfcf",
    margin: 0,
    maxWidth: "760px",
  },

  cardsThree: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },

  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.02))",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "20px",
    padding: "28px",
    boxShadow: "0 14px 32px rgba(0,0,0,0.22)",
  },

  cardTitle: {
    fontSize: "24px",
    fontWeight: 700,
    margin: "0 0 12px 0",
    letterSpacing: "-0.4px",
  },

  cardBody: {
    fontSize: "16px",
    lineHeight: 1.8,
    color: "#cfcfcf",
    margin: 0,
  },

  splitSection: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: "28px",
    padding: "78px 46px 28px",
    alignItems: "stretch",
  },

  splitLeft: {
    background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "24px",
    padding: "34px",
    boxShadow: "0 16px 34px rgba(0,0,0,0.22)",
  },

  splitRight: {
    minHeight: "100%",
  },

  imagePanel: {
    height: "100%",
    minHeight: "420px",
    borderRadius: "24px",
    border: "1px solid rgba(255,255,255,0.06)",
    background:
      "radial-gradient(circle at center, rgba(245,185,66,0.16), rgba(245,185,66,0.04), rgba(255,255,255,0.02))",
    boxShadow: "0 16px 34px rgba(0,0,0,0.22)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  panelLogo: {
    width: "220px",
    height: "auto",
    objectFit: "contain" as const,
  },

  regionList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "14px",
    marginTop: "24px",
  },

  regionItem: {
    padding: "14px 16px",
    borderRadius: "14px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.06)",
    color: "#f2f2f2",
    fontWeight: 600,
  },

  darkBand: {
    padding: "80px 46px",
  },

  bandInner: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "28px",
    alignItems: "center",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    padding: "32px 0",
  },

  bandLeft: {},

  bandRight: {},

  bandTitle: {
    fontSize: "42px",
    lineHeight: 1.12,
    fontWeight: 800,
    letterSpacing: "-1px",
    margin: 0,
    maxWidth: "620px",
  },

  bandText: {
    fontSize: "18px",
    lineHeight: 1.8,
    color: "#cfcfcf",
    margin: 0,
    maxWidth: "620px",
  },

  contactSection: {
    padding: "20px 46px 110px",
  },

  contactCard: {
    background: "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.02))",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "26px",
    padding: "42px 34px",
    boxShadow: "0 18px 40px rgba(0,0,0,0.24)",
  },

  contactTitle: {
    fontSize: "42px",
    lineHeight: 1.12,
    fontWeight: 800,
    letterSpacing: "-1px",
    margin: "0 0 14px 0",
    maxWidth: "760px",
  },

  contactText: {
    fontSize: "18px",
    lineHeight: 1.8,
    color: "#d0d0d0",
    margin: "0 0 24px 0",
    maxWidth: "740px",
  },

  contactButtons: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap" as const,
  },
};