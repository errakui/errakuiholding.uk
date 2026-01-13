import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import SEO from '../components/SEO'

const posts = [
  {
    slug: 'future-of-ai-enterprise-2026',
    title: 'The Future of AI in Enterprise: What to Expect in 2026',
    excerpt: 'Artificial intelligence continues to reshape enterprise operations. From advanced LLMs to autonomous agents, we explore the key trends defining AI adoption this year.',
    category: 'Artificial Intelligence',
    date: 'January 8, 2026',
    readTime: '8 min read'
  },
  {
    slug: 'blockchain-supply-chain-transparency',
    title: 'How Blockchain is Revolutionizing Supply Chain Transparency',
    excerpt: 'Discover how distributed ledger technology is creating unprecedented visibility in global supply chains, from raw materials to final delivery.',
    category: 'Blockchain',
    date: 'December 20, 2025',
    readTime: '6 min read'
  },
  {
    slug: 'open-banking-opportunities-2026',
    title: 'Open Banking in 2026: New Opportunities for FinTech Innovation',
    excerpt: 'The regulatory landscape continues to evolve, creating new opportunities for financial services innovation. Learn how to leverage Open Banking APIs.',
    category: 'FinTech',
    date: 'December 15, 2025',
    readTime: '7 min read'
  },
  {
    slug: 'kubernetes-enterprise-best-practices',
    title: 'Kubernetes in Enterprise: Best Practices for Production Deployments',
    excerpt: 'A comprehensive guide to deploying and managing Kubernetes clusters at enterprise scale, including security, monitoring, and cost optimization.',
    category: 'Cloud',
    date: 'November 28, 2025',
    readTime: '10 min read'
  },
  {
    slug: 'smart-contracts-security-audit',
    title: 'Smart Contract Security: A Complete Audit Checklist',
    excerpt: 'Security vulnerabilities in smart contracts can cost millions. Our comprehensive checklist covers the critical areas every audit should address.',
    category: 'Blockchain',
    date: 'November 15, 2025',
    readTime: '9 min read'
  },
  {
    slug: 'machine-learning-healthcare-diagnosis',
    title: 'Machine Learning in Healthcare: Transforming Diagnostic Accuracy',
    excerpt: 'How ML algorithms are helping clinicians detect diseases earlier and more accurately, from cancer screening to rare condition identification.',
    category: 'AI',
    date: 'October 30, 2025',
    readTime: '7 min read'
  },
  {
    slug: 'digital-transformation-roadmap',
    title: 'Building a Digital Transformation Roadmap: A Strategic Guide',
    excerpt: 'Step-by-step guidance for enterprises planning their digital transformation journey, from assessment to implementation and beyond.',
    category: 'Strategy',
    date: 'October 12, 2025',
    readTime: '8 min read'
  },
  {
    slug: 'saas-architecture-scalability',
    title: 'SaaS Architecture: Building for Scale from Day One',
    excerpt: 'Learn the architectural patterns and best practices that enable SaaS platforms to scale from hundreds to millions of users seamlessly.',
    category: 'Cloud',
    date: 'September 25, 2025',
    readTime: '9 min read'
  }
]

const topics = [
  { icon: '◈', name: 'Artificial Intelligence', desc: 'Machine learning, NLP, computer vision, and AI strategy.', count: '24 articles' },
  { icon: '◇', name: 'Blockchain & Web3', desc: 'Smart contracts, DeFi, NFTs, and decentralized systems.', count: '18 articles' },
  { icon: '○', name: 'FinTech', desc: 'Digital banking, payments, compliance, and financial innovation.', count: '15 articles' },
  { icon: '□', name: 'Cloud & DevOps', desc: 'Kubernetes, serverless, CI/CD, and infrastructure.', count: '12 articles' }
]

export default function Blog() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <>
      <SEO 
        title="Blog & Insights - AI, Blockchain, FinTech Trends | London, Monaco, Lugano"
        description="Expert technology insights on AI, blockchain, FinTech, and digital transformation. Guides, trends, and best practices from technology experts in London, Monaco, and Lugano."
        canonical="/blog"
        keywords="AI blog London, blockchain insights Monaco, FinTech trends Lugano, technology blog UK, AI news Montecarlo, blockchain guide Lugano Switzerland, digital transformation London, machine learning tutorials, smart contract guide Monaco, tech news Lugano, innovazione tecnologica Monaco"
      />

      {/* Hero */}
      <section className="page-hero" ref={heroRef}>
        <div className="page-hero-bg">INSIGHTS</div>
        <motion.div 
          className="page-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="page-hero-label">Blog & Insights</p>
          <h1 className="page-hero-title">
            Thoughts on <span className="accent">technology</span> & innovation
          </h1>
          <p className="page-hero-desc">
            Explore our latest thinking on artificial intelligence, blockchain, FinTech, 
            and digital transformation. Practical insights, case studies, and best practices 
            from our team of technology experts.
          </p>
        </motion.div>
      </section>

      {/* Articles List */}
      <section className="articles-section">
        <div className="section-header-left">
          <h2 className="section-title">Latest Articles</h2>
        </div>
        
        <div className="articles-list">
          {posts.map((post, i) => (
            <motion.article 
              key={post.slug}
              className="article-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="article-row-meta">
                <span className="article-category">{post.category}</span>
                <span className="article-date">{post.date}</span>
              </div>
              <h3 className="article-row-title">{post.title}</h3>
              <p className="article-row-excerpt">{post.excerpt}</p>
              <div className="article-row-footer">
                <span className="article-author">By Marketing Team</span>
                <span className="article-read">{post.readTime}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>Stay Ahead of the Curve</h2>
          <p>
            Subscribe to our newsletter for monthly insights on AI, blockchain, FinTech, 
            and digital transformation. No spam, just valuable content from our experts.
          </p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              required 
            />
            <button type="submit">Subscribe</button>
          </form>
          <p className="newsletter-note">
            Join 5,000+ technology leaders receiving our monthly insights.
          </p>
        </div>
      </section>

      {/* Topics */}
      <section className="topics-section">
        <div className="section-header-center">
          <h2 className="section-title">Explore Topics</h2>
          <p className="section-desc">
            Deep dives into the technologies and strategies shaping the future of business.
          </p>
        </div>
        
        <div className="topics-grid">
          {topics.map((topic, i) => (
            <motion.div 
              key={i} 
              className="topic-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <span className="topic-icon">{topic.icon}</span>
              <h3>{topic.name}</h3>
              <p>{topic.desc}</p>
              <span className="topic-count">{topic.count}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-bg">CONNECT</div>
        <div className="cta-content">
          <h2 className="cta-title">
            Have a topic you'd like us to <span className="accent">cover</span>?
          </h2>
          <p className="cta-text">
            We're always looking for new topics to explore. If there's something you'd 
            like us to write about, let us know.
          </p>
          <Link to="/contact" className="cta-button">
            <span>Suggest a topic</span>
            <span>→</span>
          </Link>
        </div>
      </section>
    </>
  )
}
