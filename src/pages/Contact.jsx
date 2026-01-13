import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SEO from '../components/SEO'

const services = [
  'Artificial Intelligence',
  'Blockchain Development',
  'FinTech Solutions',
  'Cloud Platforms',
  'Mobile Development',
  'Digital Strategy',
  'Other'
]

const budgets = [
  'Under £25,000',
  '£25,000 - £50,000',
  '£50,000 - £100,000',
  '£100,000 - £250,000',
  '£250,000+'
]

export default function Contact() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', company: '', phone: '', service: '', budget: '', message: '' })
    }, 1500)
  }

  return (
    <>
      <SEO 
        title="Contact Us - Start Your Technology Project | London, Monaco, Lugano"
        description="Contact Errakui Holding for AI, blockchain, and software development projects. Free consultation. Headquarters London, offices Monaco Montecarlo and Lugano Switzerland."
        canonical="/contact"
        keywords="contact technology company London, AI consultation Monaco, blockchain consultation Lugano, contatti software house London, preventivo AI Monaco, consulenza blockchain Lugano, free tech consultation UK, richiesta preventivo Monaco, software development quote Lugano, contact AI experts London"
      />

      {/* Hero */}
      <section className="page-hero" ref={heroRef}>
        <div className="page-hero-bg">CONTACT</div>
        <motion.div 
          className="page-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="page-hero-label">Get in Touch</p>
          <h1 className="page-hero-title">
            Let's start<br />
            <span className="accent">something</span><br />
            great
          </h1>
          <p className="page-hero-desc">
            Ready to transform your business with cutting-edge technology? Tell us about 
            your project and we'll get back to you within 24 hours with insights and 
            next steps for your digital journey.
          </p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="contact-section">
        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-block">
              <h3>Headquarters</h3>
              <p className="info-text">
                Errakui Holding LTD<br />
                71-75 Shelton Street<br />
                Covent Garden<br />
                London WC2H 9JQ<br />
                United Kingdom
              </p>
            </div>
            
            <div className="info-block">
              <h3>Email</h3>
              <a href="mailto:info@errakuiholding.uk" className="info-link">
                info@errakuiholding.uk
              </a>
              <p className="info-note">We respond within 24 hours</p>
            </div>
            
            <div className="info-block">
              <h3>Business Hours</h3>
              <p className="info-text">
                Monday - Friday<br />
                9:00 AM - 6:00 PM GMT
              </p>
            </div>
            
            <div className="info-block">
              <h3>European Offices</h3>
              <p className="info-text">
                <strong>Zurich, Switzerland</strong><br />
                Bahnhofstrasse
              </p>
              <p className="info-text">
                <strong>Milan, Italy</strong><br />
                Via Montenapoleone
              </p>
            </div>
            
            <div className="info-block">
              <h3>Quick Response</h3>
              <p className="info-text">
                For urgent inquiries, we offer priority response for enterprise clients. 
                Include "URGENT" in your subject line for faster processing.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h2>Start a Conversation</h2>
            <p className="form-intro">
              Tell us about your project and we'll provide a free initial consultation 
              with insights on approach, timeline, and investment.
            </p>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Ltd"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+44 20 1234 5678"
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="service">Service Interest *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((service, i) => (
                      <option key={i} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="budget">Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select budget range</option>
                    {budgets.map((budget, i) => (
                      <option key={i} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="form-group full">
                <label htmlFor="message">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us about your project, challenges, and goals. The more detail you provide, the better we can assist you."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`submit-button ${status}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <span>Sending...</span>
                ) : status === 'success' ? (
                  <span>Message Sent ✓</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </>
                )}
              </button>
              
              <p className="form-privacy">
                By submitting this form, you agree to our <a href="/privacy">Privacy Policy</a>. 
                We'll never share your information with third parties.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-desc">
            Common questions about working with Errakui Holding.
          </p>
        </div>
        
        <div className="faq-grid">
          <div className="faq-item">
            <h3>What's your typical project timeline?</h3>
            <p>
              Project timelines vary based on scope and complexity. A typical MVP takes 
              8-12 weeks, while enterprise platforms may span 6-12 months. We'll provide 
              a detailed timeline during our initial consultation.
            </p>
          </div>
          <div className="faq-item">
            <h3>Do you work with startups or only enterprises?</h3>
            <p>
              We work with organizations of all sizes—from funded startups to Fortune 500 
              companies. Our approach scales to match your needs, budget, and growth trajectory.
            </p>
          </div>
          <div className="faq-item">
            <h3>What industries do you specialize in?</h3>
            <p>
              We have deep expertise in financial services, healthcare, retail, and technology 
              sectors. However, our core capabilities in AI, blockchain, and enterprise software 
              apply across industries.
            </p>
          </div>
          <div className="faq-item">
            <h3>Do you offer ongoing support and maintenance?</h3>
            <p>
              Yes, we provide comprehensive support packages including 24/7 monitoring, 
              security updates, performance optimization, and feature development. Most 
              clients continue with us for ongoing partnership.
            </p>
          </div>
          <div className="faq-item">
            <h3>What's your development methodology?</h3>
            <p>
              We follow Agile methodology with 2-week sprints, regular demos, and continuous 
              deployment. This ensures transparency, flexibility, and consistent progress 
              throughout your project.
            </p>
          </div>
          <div className="faq-item">
            <h3>Can you work with our existing technology stack?</h3>
            <p>
              Absolutely. We're experienced in integrating with legacy systems and diverse 
              technology stacks. We'll assess your current infrastructure and recommend the 
              best approach for seamless integration.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

