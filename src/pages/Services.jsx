import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import SEO from '../components/SEO'

const services = [
  {
    id: 'ai',
    icon: '◈',
    number: '01',
    title: 'Artificial Intelligence & Machine Learning',
    subtitle: 'Intelligent automation that transforms operations',
    description: `Our AI solutions leverage cutting-edge machine learning algorithms to automate complex business processes, 
    extract insights from unstructured data, and create intelligent systems that learn and improve over time. 
    We specialize in natural language processing, computer vision, predictive analytics, and custom AI model development.`,
    capabilities: [
      'Custom Machine Learning Models',
      'Natural Language Processing (NLP)',
      'Computer Vision & Image Recognition',
      'Predictive Analytics & Forecasting',
      'Conversational AI & Chatbots',
      'Recommendation Engines',
      'Process Automation (RPA)',
      'Anomaly Detection Systems'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'AWS SageMaker', 'Hugging Face'],
    caseStudy: {
      title: 'E-commerce AI Platform',
      result: 'Reduced order processing time by 75% and increased conversion rates by 40% through AI-powered personalization.',
      metrics: ['75% faster processing', '40% conversion increase', '60% cost reduction']
    }
  },
  {
    id: 'blockchain',
    icon: '◇',
    number: '02',
    title: 'Blockchain & Web3 Development',
    subtitle: 'Decentralized solutions for the new digital economy',
    description: `We build secure, transparent blockchain solutions that enable trustless transactions, 
    decentralized governance, and tokenized economies. From smart contract development to full-scale 
    DeFi platforms, our blockchain expertise spans the entire Web3 ecosystem including Ethereum, 
    Solana, Polygon, and enterprise blockchain solutions.`,
    capabilities: [
      'Smart Contract Development & Auditing',
      'Decentralized Finance (DeFi) Platforms',
      'NFT Marketplaces & Minting Solutions',
      'Tokenization & ICO/STO Launches',
      'Decentralized Applications (dApps)',
      'Cross-Chain Bridge Development',
      'DAO Governance Systems',
      'Blockchain Integration Services'
    ],
    technologies: ['Solidity', 'Ethereum', 'Solana', 'Polygon', 'Web3.js', 'Hardhat'],
    caseStudy: {
      title: 'DeFi Lending Protocol',
      result: 'Launched a decentralized lending platform processing $50M+ in digital assets with zero security incidents.',
      metrics: ['$50M+ TVL', 'Zero security breaches', '10,000+ active users']
    }
  },
  {
    id: 'fintech',
    icon: '○',
    number: '03',
    title: 'FinTech Solutions',
    subtitle: 'Revolutionary financial technology at enterprise scale',
    description: `We develop sophisticated financial technology solutions that power modern banking, 
    payments, and investment platforms. Our FinTech expertise encompasses digital banking systems, 
    payment processing, regulatory compliance (PCI-DSS, PSD2, FCA), wealth management platforms, 
    and innovative insurance technology solutions.`,
    capabilities: [
      'Digital Banking Platforms',
      'Payment Processing Systems',
      'Digital Wallet Development',
      'Regulatory Compliance Tools',
      'Fraud Detection & Prevention',
      'KYC/AML Automation',
      'Investment & Trading Platforms',
      'Insurance Technology (InsurTech)'
    ],
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Stripe', 'Plaid', 'Open Banking APIs'],
    caseStudy: {
      title: 'Payment Gateway Platform',
      result: 'Built a PCI-compliant payment system handling 1M+ monthly transactions with 99.99% uptime.',
      metrics: ['1M+ transactions/month', '99.99% uptime', '50ms response time']
    }
  },
  {
    id: 'cloud',
    icon: '□',
    number: '04',
    title: 'Cloud & Enterprise Platforms',
    subtitle: 'Scalable infrastructure for global operations',
    description: `We architect and deploy cloud-native enterprise solutions that scale seamlessly 
    from startup to Fortune 500. Our cloud expertise spans multi-cloud strategies, microservices 
    architecture, containerization, and DevOps automation, ensuring your infrastructure is 
    resilient, secure, and optimized for performance.`,
    capabilities: [
      'Cloud Migration & Modernization',
      'Microservices Architecture',
      'Container Orchestration (Kubernetes)',
      'Serverless Application Development',
      'API Design & Development',
      'DevOps & CI/CD Pipelines',
      'Infrastructure as Code',
      'Multi-Cloud Strategy & Management'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'],
    caseStudy: {
      title: 'Enterprise SaaS Platform',
      result: 'Deployed a multi-tenant SaaS platform serving 500K+ users across 50+ countries with auto-scaling.',
      metrics: ['500K+ users', '50+ countries', '99.9% availability']
    }
  },
  {
    id: 'mobile',
    icon: '△',
    number: '05',
    title: 'Mobile Application Development',
    subtitle: 'Exceptional experiences on every device',
    description: `We create beautiful, high-performance mobile applications for iOS and Android 
    that users love. Our mobile development combines stunning UI/UX design with robust engineering, 
    delivering apps that are fast, reliable, and engaging. From native development to cross-platform 
    solutions, we build mobile experiences that drive engagement and revenue.`,
    capabilities: [
      'Native iOS Development (Swift)',
      'Native Android Development (Kotlin)',
      'Cross-Platform Development',
      'Mobile UI/UX Design',
      'App Performance Optimization',
      'Push Notifications & Engagement',
      'Offline-First Architecture',
      'App Store Optimization (ASO)'
    ],
    technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'GraphQL'],
    caseStudy: {
      title: 'HealthTech Mobile App',
      result: 'Developed an award-winning health tracking app with 4.8★ rating and 2M+ downloads globally.',
      metrics: ['4.8★ App Store rating', '2M+ downloads', '45% DAU retention']
    }
  },
  {
    id: 'consulting',
    icon: '◎',
    number: '06',
    title: 'Digital Transformation Consulting',
    subtitle: 'Strategic guidance for technology modernization',
    description: `We help organizations navigate complex digital transformation journeys with 
    strategic consulting, technology audits, and implementation roadmaps. Our consultants bring 
    decades of combined experience across industries, helping you make informed technology 
    decisions that align with business objectives and deliver measurable ROI.`,
    capabilities: [
      'Digital Strategy Development',
      'Technology Landscape Assessment',
      'Enterprise Architecture Planning',
      'Process Optimization & Automation',
      'Change Management',
      'Technology Due Diligence',
      'Vendor Selection & Management',
      'Innovation Workshops & Sprints'
    ],
    technologies: ['Strategic Planning', 'Agile', 'Design Thinking', 'TOGAF', 'SAFe', 'Lean'],
    caseStudy: {
      title: 'Fortune 500 Transformation',
      result: 'Guided a multinational corporation through digital transformation, increasing operational efficiency by 45%.',
      metrics: ['45% efficiency increase', '£12M annual savings', '18-month timeline']
    }
  }
]

export default function Services() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <>
      <SEO 
        title="Services - AI, Blockchain, FinTech & Digital Solutions | London, Monaco, Lugano"
        description="Professional technology services: AI development, blockchain solutions, Web3, FinTech platforms. Serving London UK, Monaco Montecarlo, Lugano Switzerland. Enterprise software, cloud infrastructure, mobile apps, digital transformation."
        canonical="/services"
        keywords="AI services London, blockchain development Monaco, FinTech solutions Lugano, AI consulting Montecarlo, Web3 services London UK, smart contract Monaco, machine learning Lugano, enterprise software London, cloud consulting Monaco, digital transformation Lugano, sviluppo AI Monaco, blockchain consulting London, DeFi development Monaco, crypto services Lugano"
      />

      {/* Hero */}
      <section className="page-hero" ref={heroRef}>
        <div className="page-hero-bg">SERVICES</div>
        <motion.div 
          className="page-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="page-hero-label">What we do</p>
          <h1 className="page-hero-title">
            Comprehensive<br />
            <span className="accent">technology</span><br />
            solutions
          </h1>
          <p className="page-hero-desc">
            From AI and blockchain to FinTech and cloud platforms, we deliver end-to-end 
            technology solutions that drive innovation, reduce costs, and accelerate growth. 
            Our multidisciplinary team combines deep technical expertise with strategic 
            thinking to solve complex business challenges.
          </p>
        </motion.div>
      </section>

      {/* Services List */}
      <section className="services-list">
        {services.map((service, i) => (
          <motion.div 
            key={service.id}
            id={service.id}
            className="service-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="service-section-header">
              <span className="service-section-number">{service.number}</span>
              <div className="service-section-icon">{service.icon}</div>
            </div>
            
            <div className="service-section-content">
              <div className="service-section-left">
                <h2 className="service-section-title">{service.title}</h2>
                <p className="service-section-subtitle">{service.subtitle}</p>
                <p className="service-section-desc">{service.description}</p>
                
                <div className="service-tech">
                  <h4>Technologies</h4>
                  <div className="tech-tags">
                    {service.technologies.map((tech, j) => (
                      <span key={j} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="service-section-right">
                <div className="capabilities-list">
                  <h4>Capabilities</h4>
                  <ul>
                    {service.capabilities.map((cap, j) => (
                      <li key={j}>{cap}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="case-study-card">
                  <span className="case-study-label">Case Study</span>
                  <h4>{service.caseStudy.title}</h4>
                  <p>{service.caseStudy.result}</p>
                  <div className="case-study-metrics">
                    {service.caseStudy.metrics.map((metric, j) => (
                      <span key={j} className="metric-badge">{metric}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Process */}
      <section className="process-section">
        <div className="process-header">
          <h2 className="section-title">Our Process</h2>
          <p className="section-desc">
            A proven methodology that ensures successful delivery of complex technology projects, 
            from initial discovery through deployment and beyond.
          </p>
        </div>
        
        <div className="process-steps">
          <div className="process-step">
            <span className="process-number">01</span>
            <h3>Discovery</h3>
            <p>Deep dive into your business objectives, technical requirements, and success criteria. 
            We analyse existing systems, identify opportunities, and define project scope.</p>
          </div>
          <div className="process-step">
            <span className="process-number">02</span>
            <h3>Strategy</h3>
            <p>Develop a comprehensive technology roadmap with architecture decisions, 
            timeline milestones, and resource allocation optimized for your goals.</p>
          </div>
          <div className="process-step">
            <span className="process-number">03</span>
            <h3>Design</h3>
            <p>Create detailed system designs, user experiences, and technical specifications 
            that balance innovation with practical implementation.</p>
          </div>
          <div className="process-step">
            <span className="process-number">04</span>
            <h3>Build</h3>
            <p>Agile development with iterative releases, continuous testing, and transparent 
            communication ensuring quality at every stage.</p>
          </div>
          <div className="process-step">
            <span className="process-number">05</span>
            <h3>Launch</h3>
            <p>Seamless deployment with comprehensive testing, performance optimization, 
            and go-live support ensuring successful market entry.</p>
          </div>
          <div className="process-step">
            <span className="process-number">06</span>
            <h3>Evolve</h3>
            <p>Ongoing optimization, feature development, and technical support keeping 
            your platform competitive and evolving with market demands.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-bg">LET'S BUILD</div>
        <div className="cta-content">
          <h2 className="cta-title">
            Have a project<br />
            in <span className="accent">mind</span>?
          </h2>
          <p className="cta-text">
            Tell us about your technology challenges and business objectives. 
            We'll help you identify the right solutions and create a roadmap for success.
          </p>
          <Link to="/contact" className="cta-button">
            <span>Start the conversation</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}

