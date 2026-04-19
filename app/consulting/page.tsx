"use client";

export default function ConsultingPage() {
  return (
    <div style={styles.page}>
      <div style={styles.banner}>
        EnergyROAR Advisory — Launching Soon
      </div>

      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <img
            src="/energyroar-logo.png"
            alt="EnergyROAR"
            style={styles.logo}
          />
          <div style={styles.logoText}>EnergyROAR</div>
        </div>

        <a href="mailto:info@energyroar.ca" style={styles.topButton}>
          Contact
        </a>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroGlow} />

        <p style={styles.eyebrow}>Strategic Energy & Resource Advisory</p>

        <h1 style={styles.title}>
          High-impact consulting for energy, industrial, and resource-sector
          strategy.
        </h1>

        <p style={styles.subtitle}>
          EnergyROAR advises operators, investors, and technical teams on market
          positioning, project development, subsurface strategy, and
          value-focused decision-making across complex energy and resource
          opportunities.
        </p>

        <div style={styles.heroActions}>
          <a href="mailto:info@energyroar.ca" style={styles.primaryButton}>
            Request Advisory
          </a>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.sectionIntro}>
          <p style={styles.sectionEyebrow}>Who We Advise</p>
          <h2 style={styles.sectionTitle}>
            Trusted by decision-makers across technical and commercial mandates.
          </h2>
        </div>

        <div style={styles.gridFour}>
          <div style={styles.panelCard}>
            <h3 style={styles.cardTitle}>Operators</h3>
            <p style={styles.cardText}>
              Strategic support for asset planning, development pathways, and
              commercial positioning.
            </p>
          </div>

          <div style={styles.panelCard}>
            <h3 style={styles.cardTitle}>Investors</h3>
            <p style={styles.cardText}>
              Technical-commercial framing for diligence, opportunity evaluation,
              and value creation.
            </p>
          </div>

          <div style={styles.panelCard}>
            <h3 style={styles.cardTitle}>Project Developers</h3>
            <p style={styles.cardText}>
              Clear thinking around project structure, market alignment, and
              execution priorities.
            </p>
          </div>

          <div style={styles.panelCard}>
            <h3 style={styles.cardTitle}>Technical Teams</h3>
            <p style={styles.cardText}>
              Advisory that strengthens technical workstreams with commercial and
              strategic clarity.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.sectionIntro}>
          <p style={styles.sectionEyebrow}>Services</p>
          <h2 style={styles.sectionTitle}>
            Advisory built for complex projects, capital decisions, and strategic positioning.
          </h2>
        </div>

        <div style={styles.gridThree}>
          <div style={styles.panelCard}>
            <h3 style={styles.cardTitle}>Strategic Advisory</h3>
            <p style={styles.cardText}>
              Executive-level guidance on growth pathways, portfolio direction,
              market positioning, and opportunity framing.
            </p>
          </div>

          <div style={styles.panelCard}>
            <h3 style={styles.cardTitle}>Project Development Support</h3>
            <p style={styles.cardText}>
              Structured thinking for staged developments, capital-aware planning,
              and technically grounded project progression.
            </p>
          </div>

          <div style={styles.panelCard}>
            <h3 style={styles.cardTitle}>Technical-Commercial Positioning</h3>
            <p style={styles.cardText}>
              Clear presentation of technical assets for partners, stakeholders,
              and investment-facing discussions.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.sectionIntro}>
          <p style={styles.sectionEyebrow}>Expertise</p>
          <h2 style={styles.sectionTitle}>
            Sector-facing expertise across subsurface, development, and transition strategy.
          </h2>
        </div>

        <div style={styles.gridThree}>
          <div style={styles.panelCard}>
            <h3 style={styles.cardTitle}>Integrated Asset Evaluation</h3>
            <p style={styles.cardText}>
              Technical and commercial framing to support more confident capital
              and development decisions.
            </p>
          </div>

          <div style={styles.panelCard}>
            <h3 style={styles.cardTitle}>Field Development Planning</h3>
            <p style={styles.cardText}>
              Structured development thinking for assets, staged projects, and
              long-horizon opportunities.
            </p>
          </div>

          <div style={styles.panelCard}>
            <h3 style={styles.cardTitle}>Reservoir & Subsurface Strategy</h3>
            <p style={styles.cardText}>
              Reservoir-focused interpretation and subsurface-informed planning
              for technically demanding opportunities.
            </p>
          </div>

          <div style={styles.panelCard}>
            <h3 style={styles.cardTitle}>Digital Subsurface Workflows</h3>
            <p style={styles.cardText}>
              Modern digital structure, analytics support, and workflow clarity
              for technical teams.
            </p>
          </div>

          <div style={styles.panelCard}>
            <h3 style={styles.cardTitle}>Energy Transition Strategy</h3>
            <p style={styles.cardText}>
              Strategic positioning across evolving energy markets and
              transition-linked opportunities.
            </p>
          </div>

          <div style={styles.panelCard}>
            <h3 style={styles.cardTitle}>Low-Carbon Value Creation</h3>
            <p style={styles.cardText}>
              Commercially grounded support for emissions-aware growth and
              future-facing initiatives.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.contactSection}>
        <div style={styles.contactCard}>
          <p style={styles.sectionEyebrow}>Contact</p>
          <h2 style={styles.contactTitle}>Discuss a project, partnership, or advisory need.</h2>
          <p style={styles.contactText}>
            For consulting inquiries, strategic discussions, or early-stage opportunities,
            reach out directly.
          </p>

          <div style={styles.contactActions}>
            <a href="mailto:info@energyroar.ca" style={styles.primaryButton}>
              Contact EnergyROAR
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top left, rgba(245,185,66,0.08), transparent 22%), #070707",
    color: "#ffffff",
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },

  banner: {
    textAlign: "center",
    padding: "10px 16px",
    fontSize: "13px",
    color: "#111111",
    background: "linear-gradient(90deg, #f5b942, #d89c10)",
    fontWeight: 700,
    letterSpacing: "0.5px",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px 56px",
    borderBottom: "1px solid rgba(255,255,255,0.04)",
    position: "sticky",
    top: 0,
    backdropFilter: "blur(12px)",
    background: "rgba(7,7,7,0.72)",
    zIndex: 10,
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },

  logo: {
    height: "58px",
    width: "auto",
    objectFit: "contain",
  },

  logoText: {
    fontSize: "28px",
    fontWeight: 800,
    color: "#f5b942",
    letterSpacing: "0.2px",
  },

  topButton: {
    padding: "11px 18px",
    borderRadius: "999px",
    background: "#f5b942",
    color: "#111111",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: "14px",
    boxShadow: "0 8px 30px rgba(245,185,66,0.18)",
  },

  hero: {
    position: "relative",
    padding: "120px 56px 84px",
    maxWidth: "980px",
    overflow: "hidden",
  },

  heroGlow: {
    position: "absolute",
    top: "40px",
    right: "-80px",
    width: "320px",
    height: "320px",
    background: "radial-gradient(circle, rgba(245,185,66,0.12), transparent 70%)",
    pointerEvents: "none",
  },

  eyebrow: {
    color: "#d8a928",
    marginBottom: "18px",
    fontSize: "13px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontWeight: 700,
  },

  title: {
    fontSize: "56px",
    lineHeight: 1.04,
    fontWeight: 800,
    margin: "0 0 24px 0",
    maxWidth: "880px",
    letterSpacing: "-1.4px",
  },

  subtitle: {
    color: "#d2d2d2",
    fontSize: "19px",
    lineHeight: 1.8,
    marginBottom: "34px",
    maxWidth: "760px",
  },

  heroActions: {
    display: "flex",
    gap: "14px",
    alignItems: "center",
  },

  primaryButton: {
    display: "inline-block",
    background: "#f5b942",
    color: "#111111",
    padding: "14px 24px",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: "15px",
    boxShadow: "0 10px 30px rgba(245,185,66,0.18)",
  },

  section: {
    padding: "56px 56px 32px",
  },

  sectionIntro: {
    maxWidth: "860px",
    marginBottom: "28px",
  },

  sectionEyebrow: {
    color: "#d8a928",
    fontSize: "12px",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "1px",
    marginBottom: "10px",
  },

  sectionTitle: {
    fontSize: "34px",
    fontWeight: 800,
    lineHeight: 1.18,
    margin: 0,
    letterSpacing: "-0.6px",
    maxWidth: "820px",
  },

  gridFour: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "20px",
  },

  gridThree: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
  },

  panelCard: {
    background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02))",
    padding: "26px",
    borderRadius: "18px",
    border: "1px solid rgba(255,255,255,0.06)",
    boxShadow: "0 12px 30px rgba(0,0,0,0.24)",
  },

  cardTitle: {
    fontSize: "20px",
    fontWeight: 700,
    margin: "0 0 12px 0",
    letterSpacing: "-0.2px",
  },

  cardText: {
    fontSize: "15px",
    lineHeight: 1.75,
    color: "#cfcfcf",
    margin: 0,
  },

  contactSection: {
    padding: "72px 56px 110px",
  },

  contactCard: {
    maxWidth: "920px",
    background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "24px",
    padding: "40px 34px",
    boxShadow: "0 18px 40px rgba(0,0,0,0.24)",
  },

  contactTitle: {
    fontSize: "38px",
    fontWeight: 800,
    lineHeight: 1.14,
    margin: "0 0 14px 0",
    letterSpacing: "-0.6px",
    maxWidth: "720px",
  },

  contactText: {
    fontSize: "17px",
    lineHeight: 1.8,
    color: "#d0d0d0",
    margin: "0 0 24px 0",
    maxWidth: "700px",
  },

  contactActions: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
  },
};