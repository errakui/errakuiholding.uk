import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import SEO from '../components/SEO'

const projects = [
  {
    slug: 'ai-commerce-engine',
    title: 'AI Commerce Engine',
    category: 'Artificial Intelligence',
    client: 'Global E-commerce Retailer',
    year: '2024',
    featured: true,
    description: 'Revolutionary AI-powered e-commerce platform with intelligent personalization, automated inventory management, and predictive demand forecasting.',
    results: [
      { metric: '75%', label: 'Faster processing' },
      { metric: '40%', label: 'Sales increase' },
      { metric: '60%', label: 'Cost reduction' },
      { metric: '£12M', label: 'Added revenue' }
    ],
    technologies: ['Python', 'TensorFlow', 'React', 'AWS', 'PostgreSQL', 'Redis']
  },
  {
    slug: 'defi-protocol',
    title: 'DeFi Lending Protocol',
    category: 'Blockchain',
    client: 'FinTech Startup',
    year: '2024',
    featured: true,
    description: 'Decentralized lending platform enabling peer-to-peer cryptocurrency loans with automated collateral management and yield optimization.',
    results: [
      { metric: '$50M+', label: 'Total Value Locked' },
      { metric: '0', label: 'Security incidents' },
      { metric: '10K+', label: 'Active users' },
      { metric: '4.9★', label: 'User rating' }
    ],
    technologies: ['Solidity', 'Ethereum', 'React', 'Node.js', 'The Graph', 'IPFS']
  },
  {
    slug: 'banking-platform',
    title: 'Digital Banking Platform',
    category: 'FinTech',
    client: 'European Bank',
    year: '2023',
    featured: true,
    description: 'Complete digital banking solution with mobile and web interfaces, real-time payments, and advanced security features.',
    results: [
      { metric: '100K+', label: 'Active users' },
      { metric: '99.99%', label: 'Uptime' },
      { metric: 'PCI-DSS', label: 'Compliant' },
      { metric: '3x', label: 'Engagement' }
    ],
    technologies: ['Java', 'Spring Boot', 'React Native', 'Kubernetes', 'PostgreSQL', 'Kafka']
  },
  {
    slug: 'iot-dashboard',
    title: 'Smart City IoT Platform',
    category: 'Enterprise',
    client: 'Municipal Government',
    year: '2023',
    description: 'Comprehensive IoT management platform for urban infrastructure monitoring including traffic, utilities, and environmental sensors.',
    results: [
      { metric: '10K+', label: 'Sensors managed' },
      { metric: '25%', label: 'Energy savings' },
      { metric: 'Real-time', label: 'Monitoring' },
      { metric: '£5M', label: 'Annual savings' }
    ],
    technologies: ['Node.js', 'MQTT', 'InfluxDB', 'Grafana', 'Docker', 'AWS IoT']
  },
  {
    slug: 'healthcare-analytics',
    title: 'Healthcare Analytics Platform',
    category: 'Healthcare',
    client: 'NHS Trust',
    year: '2023',
    description: 'Advanced analytics platform for medical data processing, patient outcome prediction, and resource optimization.',
    results: [
      { metric: '50%', label: 'Faster diagnosis' },
      { metric: '99.9%', label: 'Accuracy' },
      { metric: 'HIPAA', label: 'Compliant' },
      { metric: '30%', label: 'Optimization' }
    ],
    technologies: ['Python', 'Pandas', 'TensorFlow', 'FastAPI', 'PostgreSQL', 'Docker']
  },
  {
    slug: 'crm-system',
    title: 'Enterprise CRM System',
    category: 'Enterprise',
    client: 'Fortune 500 Company',
    year: '2022',
    description: 'Custom CRM solution with advanced automation, reporting capabilities, and seamless integration with existing enterprise systems.',
    results: [
      { metric: '300%', label: 'Productivity' },
      { metric: '50+', label: 'Integrations' },
      { metric: '15K', label: 'Daily users' },
      { metric: '£8M', label: 'Savings' }
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Elasticsearch', 'AWS']
  },
  {
    slug: 'trading-bot',
    title: 'Algorithmic Trading Platform',
    category: 'FinTech',
    client: 'Investment Fund',
    year: '2022',
    description: 'Automated trading system with machine learning algorithms for cryptocurrency and forex markets.',
    results: [
      { metric: '24/7', label: 'Trading' },
      { metric: '85%', label: 'Win rate' },
      { metric: '<10ms', label: 'Latency' },
      { metric: '12', label: 'Exchanges' }
    ],
    technologies: ['Python', 'Scikit-learn', 'WebSocket', 'Docker', 'TimescaleDB', 'Redis']
  },
  {
    slug: 'supply-chain',
    title: 'Blockchain Supply Chain',
    category: 'Blockchain',
    client: 'Luxury Brand',
    year: '2022',
    description: 'Transparent supply chain management using blockchain technology for authentication and traceability of luxury goods.',
    results: [
      { metric: '100%', label: 'Traceability' },
      { metric: '30%', label: 'Fraud reduction' },
      { metric: '25%', label: 'Cost savings' },
      { metric: '4.8★', label: 'Satisfaction' }
    ],
    technologies: ['Solidity', 'Polygon', 'Node.js', 'MongoDB', 'React Native', 'IPFS']
  }
]

const industries = [
  { name: 'Financial Services', desc: 'Banks, investment funds, payment processors, and insurance companies.' },
  { name: 'Healthcare', desc: 'NHS trusts, private healthcare, pharmaceuticals, and medical devices.' },
  { name: 'Retail & E-commerce', desc: 'Online retailers, luxury brands, and omnichannel commerce platforms.' },
  { name: 'Technology', desc: 'SaaS companies, startups, and enterprise software providers.' },
  { name: 'Government', desc: 'Central and local government, public sector agencies, and smart cities.' },
  { name: 'Manufacturing', desc: 'Industrial automation, supply chain, and Industry 4.0 initiatives.' }
]

export default function Portfolio() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <>
      <SEO 
        title="Portfolio - AI, Blockchain & Software Projects | London, Monaco, Lugano"
        description="Portfolio of successful AI, blockchain, FinTech, and enterprise projects. Case studies from clients in London, Monaco Montecarlo, Lugano Switzerland. Measurable results and ROI."
        canonical="/portfolio"
        keywords="portfolio AI London, blockchain projects Monaco, software portfolio Lugano, AI case study London UK, progetti blockchain Monaco, casi studio Lugano, FinTech portfolio Montecarlo, enterprise projects London, technology case studies Monaco, realizzazioni software Lugano Switzerland"
      />

      {/* Hero */}
      <section className="page-hero" ref={heroRef}>
        <div className="page-hero-bg">WORK</div>
        <motion.div 
          className="page-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="page-hero-label">Our Work</p>
          <h1 className="page-hero-title">
            Projects that deliver <span className="accent">results</span>
          </h1>
          <p className="page-hero-desc">
            We measure success by the impact we create for our clients. Explore our portfolio 
            of AI, blockchain, FinTech, and enterprise projects that have driven real 
            business outcomes across industries.
          </p>
        </motion.div>
      </section>

      {/* Projects List */}
      <section className="projects-section">
        <div className="projects-list">
          {projects.map((project, i) => (
            <motion.article 
              key={project.slug}
              className="project-row"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <div className="project-row-header">
                <div className="project-row-meta">
                  <span className="project-row-num">0{i + 1}</span>
                  <span className="project-row-cat">{project.category}</span>
                  <span className="project-row-year">{project.year}</span>
                </div>
                <h2 className="project-row-title">{project.title}</h2>
                <p className="project-row-desc">{project.description}</p>
              </div>
              
              <div className="project-row-details">
                <div className="project-row-results">
                  {project.results.map((result, j) => (
                    <div key={j} className="result-block">
                      <span className="result-metric">{result.metric}</span>
                      <span className="result-label">{result.label}</span>
                    </div>
                  ))}
                </div>
                
                <div className="project-row-tech">
                  <span className="tech-label">Technologies:</span>
                  <div className="tech-list">
                    {project.technologies.map((tech, j) => (
                      <span key={j} className="tech-item">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="industries-section">
        <div className="section-header-center">
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-desc">
            Deep expertise across sectors that demand innovation, security, and scale.
          </p>
        </div>
        
        <div className="industries-grid">
          {industries.map((industry, i) => (
            <motion.div 
              key={i} 
              className="industry-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <h3>{industry.name}</h3>
              <p>{industry.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-bg">YOUR PROJECT</div>
        <div className="cta-content">
          <h2 className="cta-title">
            Let's create your <span className="accent">success story</span>
          </h2>
          <p className="cta-text">
            Ready to join our portfolio of successful projects? Tell us about your 
            challenge and let's explore how we can help you achieve remarkable results.
          </p>
          <Link to="/contact" className="cta-button">
            <span>Discuss your project</span>
            <span>→</span>
          </Link>
        </div>
      </section>
    </>
  )
}
