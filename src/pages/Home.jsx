import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import SEO from '../components/SEO'

const services = [
  {
    icon: '◈',
    title: 'Artificial Intelligence',
    desc: 'Custom AI models, automation systems, and machine learning solutions that transform business operations and drive unprecedented efficiency.',
    tags: ['Machine Learning', 'NLP', 'Computer Vision']
  },
  {
    icon: '◇',
    title: 'Blockchain Development',
    desc: 'Decentralized applications, smart contracts, and Web3 infrastructure powering the next generation of digital economies.',
    tags: ['Smart Contracts', 'DeFi', 'NFT']
  },
  {
    icon: '○',
    title: 'FinTech Solutions',
    desc: 'Payment systems, digital banking platforms, and regulatory technology built for enterprise scale and bank-grade security.',
    tags: ['Payments', 'Banking', 'RegTech']
  },
  {
    icon: '□',
    title: 'Cloud Platforms',
    desc: 'Enterprise SaaS solutions with robust microservices architecture, scalable APIs, and global infrastructure deployment.',
    tags: ['AWS', 'Azure', 'Kubernetes']
  },
  {
    icon: '△',
    title: 'Mobile Experience',
    desc: 'Native iOS and Android applications with exceptional user experience, performance optimization, and seamless integrations.',
    tags: ['iOS', 'Android', 'React Native']
  },
  {
    icon: '◎',
    title: 'Digital Strategy',
    desc: 'Technology consulting, digital transformation roadmaps, and strategic planning for enterprise modernization.',
    tags: ['Consulting', 'Architecture', 'Transformation']
  }
]

const portfolio = [
  { name: 'AI Commerce Engine', category: 'Artificial Intelligence', slug: 'ai-commerce-engine' },
  { name: 'DeFi Lending Protocol', category: 'Blockchain', slug: 'defi-protocol' },
  { name: 'Digital Banking Platform', category: 'FinTech', slug: 'banking-platform' },
  { name: 'Smart City IoT Platform', category: 'Enterprise', slug: 'iot-dashboard' }
]

const expertise = [
  { num: '01', title: 'Strategy', text: 'Technology roadmaps aligned with business objectives and market dynamics.' },
  { num: '02', title: 'Design', text: 'User-centered design creating meaningful and intuitive digital experiences.' },
  { num: '03', title: 'Engineering', text: 'Robust systems built with modern architecture, best practices, and scalability.' },
  { num: '04', title: 'Scale', text: 'Infrastructure that grows seamlessly with your business across global markets.' },
  { num: '05', title: 'Security', text: 'Enterprise-grade security and compliance integrated into every solution layer.' },
  { num: '06', title: 'Support', text: '24/7 monitoring, dedicated teams, and proactive maintenance ensuring uptime.' },
  { num: '07', title: 'Analytics', text: 'Data-driven insights powering informed decisions and measurable success.' },
  { num: '08', title: 'Innovation', text: 'Continuous R&D keeping you ahead of technological evolution and competition.' }
]

const marqueeItems = ['London', 'Monaco', 'Lugano', 'Zurich', 'Milan', 'Verona', 'Barcelona', 'Monte Carlo', 'Geneva']

export default function Home() {
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const portfolioRef = useRef(null)
  const ctaRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" })
  const portfolioInView = useInView(portfolioRef, { once: true, margin: "-100px" })
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" })

  return (
    <>
      <SEO 
        canonical="/"
        title="AI Development, Blockchain & Software Solutions | London, Monaco, Lugano"
        description="Leading technology company specializing in AI development, blockchain solutions, Web3, FinTech. Headquarters London, offices in Monaco Montecarlo and Lugano Switzerland. 30+ SaaS products. Enterprise software development experts."
        keywords="AI development London, blockchain developer London, AI Monaco, blockchain Monaco Montecarlo, software development Monte Carlo, AI Lugano, blockchain Lugano Switzerland, software house London, FinTech Monaco, Web3 London, smart contracts Lugano, machine learning London, enterprise software Monaco, SaaS development Lugano, tech company London UK, sviluppo software Monaco, crypto development Lugano"
      />

      {/* Hero */}
      <section className="hero" ref={heroRef}>
        <div className="hero-bg-text">HOLDING</div>
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="hero-left">
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 100 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span>We Build</span>
              <span className="outline">Digital</span>
              <span className="accent">Future</span>
            </motion.h1>
          </div>
          
          <motion.div 
            className="hero-right"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <p className="hero-intro">
              <strong>London-based technology studio</strong> crafting AI, blockchain, 
              and enterprise solutions since 2015. We transform ambitious ideas into 
              powerful digital products that drive business growth and innovation.
            </p>
            <Link to="/contact" className="hero-cta">
              <span>Start a project</span>
              <span className="hero-cta-line"></span>
            </Link>
          </motion.div>
        </motion.div>

        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee">
        <div className="marquee-content">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="marquee-item">
              <span className="marquee-dot"></span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <section className="about" id="about" ref={aboutRef}>
        <motion.div 
          className="about-left"
          initial={{ opacity: 0, x: -50 }}
          animate={aboutInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="about-label">Who we are</p>
          <h2 className="about-title">
            Technology that moves business forward
          </h2>
        </motion.div>
        
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          animate={aboutInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="about-text">
            <strong>Errakui Holding LTD</strong> is a London-based technology company 
            headquartered in Covent Garden, specializing in artificial intelligence, 
            blockchain development, and enterprise software. With over a decade of 
            experience delivering innovative solutions, we partner with forward-thinking 
            businesses across the United Kingdom, Switzerland, and Italy to create 
            technology that <strong>reduces operational costs by up to 60%</strong> and 
            accelerates digital transformation at scale.
          </p>
          
          <div className="stats-row">
            <div className="stat">
              <span className="stat-number">150+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-number">25+</span>
              <span className="stat-label">Countries</span>
            </div>
            <div className="stat">
              <span className="stat-number">98%</span>
              <span className="stat-label">Satisfaction</span>
            </div>
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section className="services" id="services" ref={servicesRef}>
        <div className="services-header">
          <h2 className="services-title">What we do</h2>
          <span className="services-count">06 Core Services</span>
        </div>
        
        <div className="services-track">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <span className="service-number">0{i + 1}</span>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <div className="service-tags">
                {service.tags.map((tag, j) => (
                  <span key={j} className="service-tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="services-cta">
          <Link to="/services" className="btn-link">
            View all services →
          </Link>
        </div>
      </section>

      {/* Portfolio */}
      <section className="portfolio" id="work" ref={portfolioRef}>
        <div className="portfolio-header">
          <motion.h2 
            className="portfolio-title"
            initial={{ opacity: 0, y: 30 }}
            animate={portfolioInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Selected Work
          </motion.h2>
          <Link to="/portfolio" className="portfolio-link">
            View all projects →
          </Link>
        </div>
        
        <div className="portfolio-list">
          {portfolio.map((project, i) => (
            <motion.div 
              key={i}
              className="portfolio-list-item"
              initial={{ opacity: 0, y: 30 }}
              animate={portfolioInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            >
              <Link to={`/portfolio/${project.slug}`}>
                <span className="portfolio-list-num">0{i + 1}</span>
                <h3 className="portfolio-list-name">{project.name}</h3>
                <span className="portfolio-list-cat">{project.category}</span>
                <span className="portfolio-list-arrow">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section className="expertise">
        <div className="expertise-header">
          <h2 className="section-title">Our Expertise</h2>
          <p className="section-desc">
            Comprehensive capabilities spanning the entire technology lifecycle, 
            from strategic planning to ongoing support and optimization.
          </p>
        </div>
        <div className="expertise-grid">
          {expertise.map((item, i) => (
            <motion.div 
              key={i}
              className="expertise-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="expertise-icon">{item.num}</div>
              <h3 className="expertise-title">{item.title}</h3>
              <p className="expertise-text">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="contact" ref={ctaRef}>
        <div className="cta-bg">LET'S TALK</div>
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 50 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="cta-title">
            Ready to build something <span className="accent">remarkable</span>?
          </h2>
          <p className="cta-text">
            Whether you're looking to automate operations with AI, launch a blockchain platform, 
            or modernize your enterprise infrastructure, we're here to help.
          </p>
          <Link to="/contact" className="cta-button">
            <span>Get in touch</span>
            <span>→</span>
          </Link>
        </motion.div>
      </section>
    </>
  )
}
