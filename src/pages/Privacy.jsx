import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SEO from '../components/SEO'

export default function Privacy() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <>
      <SEO 
        title="Privacy Policy"
        description="Privacy Policy for Errakui Holding LTD. Learn how we collect, use, and protect your personal data in compliance with GDPR and UK data protection laws."
        canonical="/privacy"
      />

      <section className="page-hero" ref={heroRef}>
        <div className="page-hero-bg">PRIVACY</div>
        <motion.div 
          className="page-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="page-hero-label">Legal</p>
          <h1 className="page-hero-title">Privacy Policy</h1>
          <p className="page-hero-desc">
            Last updated: January 2026
          </p>
        </motion.div>
      </section>

      <section className="legal-content">
        <div className="legal-container">
          <div className="legal-section">
            <h2>1. Introduction</h2>
            <p>
              Errakui Holding LTD ("we", "our", "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your 
              information when you visit our website errakuiholding.uk or use our services.
            </p>
            <p>
              We are registered in England and Wales (Company Number: pending) with our 
              registered office at 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, 
              United Kingdom.
            </p>
          </div>

          <div className="legal-section">
            <h2>2. Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide, including:</p>
            <ul>
              <li>Name and contact details (email address, phone number)</li>
              <li>Company name and job title</li>
              <li>Information provided through contact forms</li>
              <li>Communication preferences</li>
            </ul>
            
            <h3>Automatically Collected Information</h3>
            <p>When you visit our website, we automatically collect:</p>
            <ul>
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referral source and exit pages</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you information about our services (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Analyse website usage and trends</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraudulent or illegal activity</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>4. Legal Basis for Processing (GDPR)</h2>
            <p>Under the UK GDPR and EU GDPR, we process your data based on:</p>
            <ul>
              <li><strong>Consent:</strong> Where you have given explicit consent for specific purposes</li>
              <li><strong>Contract:</strong> Where processing is necessary to fulfil a contract with you</li>
              <li><strong>Legitimate Interests:</strong> Where we have a legitimate business interest that doesn't override your rights</li>
              <li><strong>Legal Obligation:</strong> Where we are required to process data by law</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>5. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to collect information about 
              your browsing activities. You can control cookies through your browser settings 
              and our cookie consent tool.
            </p>
            <p>Types of cookies we use:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with consent)</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>6. Data Sharing and Disclosure</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>Service providers who assist in our operations (hosting, analytics)</li>
              <li>Professional advisers (lawyers, accountants) when necessary</li>
              <li>Law enforcement or regulatory bodies when required by law</li>
            </ul>
            <p>
              We do not sell your personal information to third parties.
            </p>
          </div>

          <div className="legal-section">
            <h2>7. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries outside the UK 
              and European Economic Area. When this occurs, we ensure appropriate safeguards 
              are in place, such as Standard Contractual Clauses approved by the European Commission.
            </p>
          </div>

          <div className="legal-section">
            <h2>8. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfil the 
              purposes for which it was collected, including to satisfy legal, accounting, or 
              reporting requirements. Contact form submissions are retained for 3 years unless 
              you request earlier deletion.
            </p>
          </div>

          <div className="legal-section">
            <h2>9. Your Rights</h2>
            <p>Under data protection laws, you have the right to:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
              <li><strong>Restriction:</strong> Request restriction of processing</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent</li>
            </ul>
            <p>
              To exercise these rights, contact us at privacy@errakuiholding.uk
            </p>
          </div>

          <div className="legal-section">
            <h2>10. Data Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your 
              personal information against unauthorised access, alteration, disclosure, or 
              destruction. This includes encryption, secure servers, and access controls.
            </p>
          </div>

          <div className="legal-section">
            <h2>11. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under 18. We do not knowingly 
              collect personal information from children. If you believe we have collected 
              information from a child, please contact us immediately.
            </p>
          </div>

          <div className="legal-section">
            <h2>12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any 
              material changes by posting the new policy on this page and updating the "Last 
              updated" date.
            </p>
          </div>

          <div className="legal-section">
            <h2>13. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, contact us at:
            </p>
            <p>
              <strong>Errakui Holding LTD</strong><br />
              71-75 Shelton Street<br />
              Covent Garden<br />
              London WC2H 9JQ<br />
              United Kingdom<br /><br />
              Email: privacy@errakuiholding.uk
            </p>
          </div>

          <div className="legal-section">
            <h2>14. Supervisory Authority</h2>
            <p>
              You have the right to lodge a complaint with the Information Commissioner's 
              Office (ICO), the UK supervisory authority for data protection issues:
            </p>
            <p>
              Information Commissioner's Office<br />
              Wycliffe House, Water Lane<br />
              Wilmslow, Cheshire SK9 5AF<br />
              Website: ico.org.uk
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

