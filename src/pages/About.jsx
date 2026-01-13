import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import SEO from '../components/SEO'

const timeline = [
  { year: '2015', title: 'First Steps in Digital', desc: 'The founder takes his first steps in the online software sales industry, gaining experience in digital products and e-commerce platforms.' },
  { year: '2018', title: 'Blockchain Exploration', desc: 'Early involvement in blockchain technology and cryptocurrency markets, building expertise in decentralized systems.' },
  { year: '2021', title: 'AI & Machine Learning Focus', desc: 'Deep dive into artificial intelligence and machine learning, developing skills in automation and predictive analytics.' },
  { year: '2024', title: 'Errakui Holding Founded', desc: 'Errakui Holding LTD officially established in Covent Garden, London, bringing together years of experience into a structured company.' },
  { year: '2025', title: '30 SaaS Products Launched', desc: 'Milestone year with the launch of 30 SaaS products across AI automation, blockchain tools, and enterprise solutions.' },
  { year: '2026', title: 'Continued Growth', desc: 'Expanding client base across UK, Switzerland, and Italy. Focus on delivering quality solutions and building long-term partnerships.' }
]

const values = [
  { 
    title: 'Excellence', 
    desc: 'We pursue excellence in every line of code, every design decision, and every client interaction.' 
  },
  { 
    title: 'Innovation', 
    desc: 'We stay at the forefront of technology, continuously learning and experimenting to bring cutting-edge solutions.' 
  },
  { 
    title: 'Integrity', 
    desc: 'We build trust through transparency, honest communication, and delivering on our commitments.' 
  },
  { 
    title: 'Impact', 
    desc: 'We measure success by the tangible value we create. Every project must deliver real business outcomes.' 
  }
]

const departments = [
  { name: 'Rachel', role: 'Ghostwriting Department — Manager', desc: 'Professional writer leading the content team. Expert in technical writing, brand voice, and editorial strategy.' },
  { name: 'Luca', role: 'Blockchain & New Technologies', desc: 'Smart contracts, DeFi protocols, and Web3 infrastructure.' },
  { name: 'Andrea', role: 'Blockchain & New Technologies', desc: 'Cryptocurrency integrations and decentralized applications.' },
  { name: 'Hans', role: 'Graphic Development', desc: 'UI/UX design, brand identity, and visual systems.' },
  { name: 'Emma', role: 'Graphic Development', desc: 'Digital product design and user experience research.' },
  { name: 'James', role: 'Research & Development', desc: 'AI research, experimental projects, and innovation labs.' },
  { name: 'Marco', role: 'Software Development', desc: 'Full-stack development, APIs, and system architecture.' },
  { name: 'Sofia', role: 'Software Development', desc: 'Backend systems, cloud architecture, and database design.' }
]

const locations = [
  { city: 'London', country: 'United Kingdom', type: 'Headquarters', address: '71-75 Shelton Street, Covent Garden, WC2H 9JQ' },
  { city: 'Monaco', country: 'Monte Carlo', type: 'By Appointment', address: 'Available on request' },
  { city: 'Lugano', country: 'Switzerland', type: 'By Appointment', address: 'Available on request' }
]

export default function About() {
  const heroRef = useRef(null)
  const storyRef = useRef(null)
  const valuesRef = useRef(null)
  
  const heroInView = useInView(heroRef, { once: true })
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" })
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" })

  return (
    <>
      <SEO 
        title="About Us - Technology Company | London, Monaco, Lugano"
        description="Errakui Holding LTD: Technology company founded 2024. AI, blockchain, enterprise software experts. Headquarters London, offices Monaco Montecarlo and Lugano Switzerland. 30+ SaaS products launched."
        canonical="/about"
        keywords="about Errakui Holding, technology company London, AI company Monaco, blockchain developers Lugano, software house London UK, tech company Montecarlo, azienda software Lugano, chi siamo Monaco, enterprise software London, software development Lugano Switzerland, AI consulting Monaco, blockchain experts London"
      />

      {/* Hero */}
      <section className="page-hero" ref={heroRef}>
        <div className="page-hero-bg">ABOUT</div>
        <motion.div 
          className="page-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="page-hero-label">About Us</p>
          <h1 className="page-hero-title">
            Building the <span className="accent">digital</span> future
          </h1>
          <p className="page-hero-desc">
            Errakui Holding LTD is a London-based technology company specializing in 
            artificial intelligence, blockchain, and enterprise software solutions. 
            We partner with forward-thinking organizations to create technology that 
            drives real business transformation.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="story-section" ref={storyRef}>
        <motion.div 
          className="story-content"
          initial={{ opacity: 0 }}
          animate={storyInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="story-left">
            <h2 className="section-title">Our Story</h2>
          </div>
          <div className="story-right">
            <p className="story-text large">
              Founded in the heart of London's Covent Garden in 2024, Errakui Holding emerged from 
              a decade of experience in digital technology. Our belief is simple: 
              <strong> technology should solve real problems</strong>.
            </p>
            <p className="story-text">
              The journey began back in 2015 when our founder took his first steps into 
              online software sales. Years of hands-on experience in blockchain, AI, and 
              enterprise systems laid the foundation for what would become Errakui Holding.
            </p>
            <p className="story-text">
              In 2025, we launched 30 SaaS products across AI automation, blockchain tools, 
              and enterprise solutions. Today we continue to grow, serving clients across the 
              United Kingdom, Switzerland, and Italy with quality technology solutions.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="section-header-center">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-desc">
            From early digital ventures to a growing technology company.
          </p>
        </div>
        
        <div className="timeline">
          {timeline.map((item, i) => (
            <motion.div 
              key={i}
              className="timeline-item"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <span className="timeline-year">{item.year}</span>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="values-section" ref={valuesRef}>
        <motion.div 
          className="section-header-center"
          initial={{ opacity: 0, y: 30 }}
          animate={valuesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Values</h2>
          <p className="section-desc">
            The principles that guide every decision and every project.
          </p>
        </motion.div>
        
        <div className="values-grid">
          {values.map((value, i) => (
            <motion.div 
              key={i}
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            >
              <span className="value-number">0{i + 1}</span>
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats">
        <div className="stats-grid">
          <div className="stat-block">
            <span className="stat-number">30+</span>
            <span className="stat-label">SaaS Products</span>
            <p className="stat-desc">Launched in 2025 across AI, blockchain, and enterprise solutions.</p>
          </div>
          <div className="stat-block">
            <span className="stat-number">3</span>
            <span className="stat-label">Countries</span>
            <p className="stat-desc">Operating across United Kingdom, Switzerland, and Italy.</p>
          </div>
          <div className="stat-block">
            <span className="stat-number">98%</span>
            <span className="stat-label">Client Satisfaction</span>
            <p className="stat-desc">Consistently exceeding expectations with quality delivery.</p>
          </div>
          <div className="stat-block">
            <span className="stat-number">10+</span>
            <span className="stat-label">Years Experience</span>
            <p className="stat-desc">Founder's experience in digital technology since 2015.</p>
          </div>
        </div>
      </section>

      {/* Team Departments */}
      <section className="departments-section">
        <div className="section-header-center">
          <h2 className="section-title">Our Team</h2>
          <p className="section-desc">
            Specialized departments driving innovation across every area of technology.
          </p>
        </div>
        
        <div className="departments-grid">
          {departments.map((dept, i) => (
            <motion.div 
              key={i}
              className="department-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="department-header">
                <span className="department-initial">{dept.name.charAt(0)}</span>
                <div>
                  <h3 className="department-name">{dept.name}</h3>
                  <span className="department-role">{dept.role}</span>
                </div>
              </div>
              <p className="department-desc">{dept.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Locations */}
      <section className="locations-section">
        <div className="section-header-center">
          <h2 className="section-title">Our Presence</h2>
          <p className="section-desc">
            Strategically located across Europe's major business centres.
          </p>
        </div>
        
        <div className="locations-grid">
          {locations.map((location, i) => (
            <div key={i} className="location-card">
              <span className="location-type">{location.type}</span>
              <h3>{location.city}</h3>
              <p className="location-country">{location.country}</p>
              <p className="location-address">{location.address}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-bg">JOIN US</div>
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to work <span className="accent">together</span>?
          </h2>
          <p className="cta-text">
            Whether you're looking to partner with us on a project or explore opportunities, 
            we'd love to hear from you.
          </p>
          <Link to="/contact" className="cta-button">
            <span>Start a project</span>
            <span>→</span>
          </Link>
        </div>
      </section>
    </>
  )
}
