import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SEO from '../components/SEO'

export default function Terms() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <>
      <SEO 
        title="Terms of Service"
        description="Terms of Service for Errakui Holding LTD. Read our terms and conditions governing the use of our website and services."
        canonical="/terms"
      />

      <section className="page-hero" ref={heroRef}>
        <div className="page-hero-bg">TERMS</div>
        <motion.div 
          className="page-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="page-hero-label">Legal</p>
          <h1 className="page-hero-title">Terms of Service</h1>
          <p className="page-hero-desc">
            Last updated: January 2026
          </p>
        </motion.div>
      </section>

      <section className="legal-content">
        <div className="legal-container">
          <div className="legal-section">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using the website errakuiholding.uk ("Website") operated by 
              Errakui Holding LTD ("Company", "we", "our", "us"), you agree to be bound by 
              these Terms of Service ("Terms"). If you do not agree to these Terms, please 
              do not use our Website or services.
            </p>
          </div>

          <div className="legal-section">
            <h2>2. Company Information</h2>
            <p>
              Errakui Holding LTD is a company registered in England and Wales.<br />
              Registered Office: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom<br />
              Email: info@errakuiholding.uk
            </p>
          </div>

          <div className="legal-section">
            <h2>3. Use of Website</h2>
            <p>You agree to use our Website only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul>
              <li>Use the Website in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorised access to any part of the Website</li>
              <li>Interfere with or disrupt the Website or servers</li>
              <li>Transmit any malicious code or harmful data</li>
              <li>Collect or harvest any information from the Website without permission</li>
              <li>Use the Website to send unsolicited communications</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>4. Intellectual Property</h2>
            <p>
              All content on this Website, including but not limited to text, graphics, logos, 
              images, software, and design, is the property of Errakui Holding LTD or its 
              licensors and is protected by intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works of, publicly 
              display, or exploit any content without our prior written consent.
            </p>
          </div>

          <div className="legal-section">
            <h2>5. Services</h2>
            <p>
              We provide technology consulting, software development, and related services as 
              described on our Website. Specific terms for individual projects or services will 
              be set out in separate agreements or statements of work.
            </p>
            <p>
              We reserve the right to modify, suspend, or discontinue any service at any time 
              without prior notice.
            </p>
          </div>

          <div className="legal-section">
            <h2>6. User Submissions</h2>
            <p>
              When you submit information through our contact forms or other means, you grant 
              us a non-exclusive, royalty-free licence to use that information for the purpose 
              of responding to your inquiry and providing our services.
            </p>
            <p>
              You represent that any information you submit is accurate and does not violate 
              any third-party rights.
            </p>
          </div>

          <div className="legal-section">
            <h2>7. Third-Party Links</h2>
            <p>
              Our Website may contain links to third-party websites or services. We are not 
              responsible for the content, privacy policies, or practices of any third-party 
              sites. Your use of third-party websites is at your own risk.
            </p>
          </div>

          <div className="legal-section">
            <h2>8. Disclaimers</h2>
            <p>
              THE WEBSITE AND ITS CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT 
              WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE 
              WEBSITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL 
              COMPONENTS.
            </p>
            <p>
              Information on this Website is for general purposes only and does not constitute 
              professional advice. You should seek appropriate professional advice before making 
              any decisions based on information from this Website.
            </p>
          </div>

          <div className="legal-section">
            <h2>9. Limitation of Liability</h2>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, ERRAKUI HOLDING LTD SHALL NOT BE LIABLE 
              FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING 
              FROM YOUR USE OF THE WEBSITE OR SERVICES.
            </p>
            <p>
              Our total liability for any claims arising from these Terms or your use of the 
              Website shall not exceed £100 or the amount you have paid us in the past 12 months, 
              whichever is greater.
            </p>
          </div>

          <div className="legal-section">
            <h2>10. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Errakui Holding LTD and its officers, 
              directors, employees, and agents from any claims, damages, losses, or expenses 
              arising from your use of the Website or violation of these Terms.
            </p>
          </div>

          <div className="legal-section">
            <h2>11. Confidentiality</h2>
            <p>
              Any confidential information shared between parties in connection with potential 
              or actual business relationships shall be kept confidential and not disclosed to 
              third parties without prior written consent.
            </p>
          </div>

          <div className="legal-section">
            <h2>12. Termination</h2>
            <p>
              We may terminate or suspend your access to the Website at any time, without prior 
              notice, for any reason, including breach of these Terms. Upon termination, your 
              right to use the Website will immediately cease.
            </p>
          </div>

          <div className="legal-section">
            <h2>13. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of 
              England and Wales. Any disputes arising from these Terms shall be subject to the 
              exclusive jurisdiction of the courts of England and Wales.
            </p>
          </div>

          <div className="legal-section">
            <h2>14. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective 
              immediately upon posting on this page. Your continued use of the Website after 
              changes constitutes acceptance of the modified Terms.
            </p>
          </div>

          <div className="legal-section">
            <h2>15. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable, the remaining 
              provisions shall continue in full force and effect.
            </p>
          </div>

          <div className="legal-section">
            <h2>16. Contact</h2>
            <p>
              For questions about these Terms, please contact us at:
            </p>
            <p>
              <strong>Errakui Holding LTD</strong><br />
              71-75 Shelton Street<br />
              Covent Garden<br />
              London WC2H 9JQ<br />
              United Kingdom<br /><br />
              Email: legal@errakuiholding.uk
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

