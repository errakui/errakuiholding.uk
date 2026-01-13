import { Helmet } from 'react-helmet-async'

const BASE_URL = 'https://errakuiholding.uk'
const SITE_NAME = 'Errakui Holding LTD'

// Generate comprehensive keywords combining services with cities
const generateKeywords = (pageKeywords = '') => {
  const baseKeywords = [
    // ============================================
    // LONDON - Primary market (English)
    // ============================================
    'AI development London', 'AI company London', 'AI agency London', 'AI solutions London',
    'artificial intelligence London', 'artificial intelligence company UK', 'AI developers London',
    'machine learning London', 'machine learning company UK', 'ML developers London',
    'deep learning London', 'neural networks London', 'AI automation London',
    'ChatGPT integration London', 'OpenAI developers London', 'LLM development London',
    'AI chatbot London', 'conversational AI London', 'NLP London', 'natural language processing UK',
    
    'blockchain developer London', 'blockchain company London', 'blockchain agency London',
    'blockchain development UK', 'blockchain solutions London', 'blockchain consulting London',
    'Web3 London', 'Web3 developers London', 'Web3 agency UK', 'Web3 development London',
    'smart contracts London', 'smart contract developer London', 'smart contract audit London',
    'Ethereum developer London', 'Solidity developer London', 'Solana developer London',
    'DeFi London', 'DeFi development London', 'decentralized finance London',
    'NFT development London', 'NFT marketplace London', 'crypto development London',
    'cryptocurrency London', 'token development London', 'ICO development London',
    
    'software company London', 'software house London', 'software agency London',
    'software development London', 'software developers London', 'custom software London',
    'bespoke software London', 'enterprise software London', 'business software London',
    'SaaS development London', 'SaaS company London', 'cloud software London',
    'web development London', 'web developers London', 'web agency London',
    'app development London', 'mobile app London', 'iOS development London', 'Android development London',
    
    'FinTech London', 'FinTech company London', 'FinTech developers London',
    'financial software London', 'banking software London', 'payment solutions London',
    'trading platform London', 'investment software London',
    
    'tech company London', 'technology company London', 'IT company London',
    'digital agency London', 'digital transformation London', 'IT consulting London',
    'tech startup London', 'technology partner London', 'IT solutions London',
    
    // UK variations
    'AI development UK', 'blockchain UK', 'software company UK', 'tech company UK',
    'AI company United Kingdom', 'software house United Kingdom', 'developers UK',
    'best AI company UK', 'top blockchain company UK', 'leading software company UK',
    
    // ============================================
    // MONACO / MONTECARLO - Luxury market (English + French)
    // ============================================
    'AI development Monaco', 'AI company Monaco', 'AI solutions Monaco',
    'artificial intelligence Monaco', 'AI developers Monaco', 'AI consulting Monaco',
    'machine learning Monaco', 'AI automation Monaco', 'ChatGPT Monaco',
    
    'AI Monaco Montecarlo', 'AI Monte Carlo', 'AI development Monte Carlo',
    'artificial intelligence Montecarlo', 'tech company Montecarlo',
    
    'blockchain Monaco', 'blockchain company Monaco', 'blockchain development Monaco',
    'blockchain Montecarlo', 'blockchain Monte Carlo', 'crypto Monaco',
    'Web3 Monaco', 'Web3 Montecarlo', 'smart contracts Monaco', 'DeFi Monaco',
    'NFT Monaco', 'cryptocurrency Monaco', 'crypto development Monaco',
    
    'software company Monaco', 'software development Monaco', 'software Monaco',
    'software Monte Carlo', 'software Montecarlo', 'app development Monaco',
    'web development Monaco', 'digital agency Monaco', 'tech company Monaco',
    'FinTech Monaco', 'financial software Monaco', 'trading platform Monaco',
    
    // French keywords for Monaco
    'développement AI Monaco', 'intelligence artificielle Monaco', 'développeurs Monaco',
    'société logiciel Monaco', 'développement logiciel Monaco', 'agence digitale Monaco',
    'blockchain Monaco développement', 'entreprise tech Monaco', 'startup Monaco',
    
    // ============================================
    // LUGANO - Swiss market (English + Italian + German)
    // ============================================
    'AI development Lugano', 'AI company Lugano', 'AI Lugano', 'AI solutions Lugano',
    'artificial intelligence Lugano', 'AI developers Lugano', 'AI consulting Lugano',
    'machine learning Lugano', 'AI Lugano Switzerland', 'AI Ticino',
    
    'blockchain Lugano', 'blockchain company Lugano', 'blockchain development Lugano',
    'blockchain Lugano Switzerland', 'blockchain developer Lugano', 'blockchain Ticino',
    'Web3 Lugano', 'smart contracts Lugano', 'DeFi Lugano', 'crypto Lugano',
    'cryptocurrency Lugano', 'crypto valley', 'crypto development Switzerland',
    
    'software house Lugano', 'software company Lugano', 'software development Lugano',
    'software Lugano Svizzera', 'software Ticino', 'app development Lugano',
    'web development Lugano', 'digital agency Lugano', 'tech company Lugano',
    'FinTech Lugano', 'FinTech Switzerland', 'FinTech Svizzera',
    
    // Italian keywords for Lugano/Ticino
    'sviluppo software Lugano', 'sviluppatori Lugano', 'azienda software Lugano',
    'sviluppo AI Lugano', 'intelligenza artificiale Lugano', 'sviluppo blockchain Lugano',
    'software house Svizzera', 'sviluppatori software Svizzera', 'agenzia digitale Lugano',
    'programmatori Lugano', 'sviluppo app Lugano', 'sviluppo web Lugano',
    'azienda tech Lugano', 'startup Lugano', 'consulenza IT Lugano',
    
    // ============================================
    // ZURICH - Swiss German market
    // ============================================
    'AI development Zurich', 'AI company Zurich', 'AI Zurich', 'AI Switzerland',
    'blockchain Zurich', 'blockchain Switzerland', 'crypto Zurich',
    'software company Zurich', 'software development Zurich', 'software Switzerland',
    'FinTech Zurich', 'tech company Zurich', 'startup Zurich',
    'machine learning Zurich', 'enterprise software Zurich',
    
    // German keywords
    'Softwareentwicklung Zürich', 'KI Entwicklung Zürich', 'Blockchain Zürich',
    'Softwarefirma Schweiz', 'Tech Unternehmen Zürich',
    
    // ============================================
    // MILAN & ITALY
    // ============================================
    'AI development Milan', 'AI Milano', 'blockchain Milano', 'blockchain Milan',
    'software house Milan', 'software company Milan', 'tech company Milan',
    'sviluppo software Milano', 'sviluppatori Milano', 'azienda software Milano',
    'intelligenza artificiale Milano', 'sviluppo AI Milano', 'sviluppo blockchain Milano',
    'software house Italia', 'sviluppatori software Italia', 'agenzia digitale Milano',
    'programmatori Milano', 'sviluppo app Milano', 'startup Milano',
    
    'sviluppatori Verona', 'software Verona', 'AI Verona', 'blockchain Verona',
    'sviluppo software Verona', 'azienda tech Verona', 'programmatori Verona',
    
    // ============================================
    // BARCELONA & SPAIN
    // ============================================
    'AI development Barcelona', 'AI Barcelona', 'blockchain Barcelona',
    'software company Barcelona', 'tech company Barcelona', 'startup Barcelona',
    'desarrollo software Barcelona', 'desarrolladores Barcelona', 'empresa software Barcelona',
    'inteligencia artificial Barcelona', 'blockchain España', 'empresa tech Barcelona',
    
    // ============================================
    // SERVICE-SPECIFIC KEYWORDS
    // ============================================
    // AI & Machine Learning
    'AI development company', 'AI software development', 'AI application development',
    'custom AI solutions', 'AI integration services', 'AI implementation',
    'machine learning development', 'ML model development', 'predictive analytics',
    'computer vision development', 'image recognition AI', 'voice AI development',
    'AI for business', 'enterprise AI', 'AI automation services',
    'GPT integration', 'ChatGPT development', 'OpenAI API integration',
    'LLM fine-tuning', 'custom language models', 'AI agents development',
    'generative AI', 'AI content generation', 'AI image generation',
    
    // Blockchain & Web3
    'blockchain development company', 'blockchain software development',
    'smart contract development', 'smart contract audit', 'smart contract security',
    'DeFi development company', 'DeFi protocol development', 'DEX development',
    'NFT marketplace development', 'NFT minting', 'NFT smart contracts',
    'Web3 development company', 'dApp development', 'decentralized applications',
    'Ethereum development', 'Solidity development', 'Solana development',
    'Polygon development', 'Layer 2 development', 'cross-chain development',
    'tokenization', 'token development', 'ERC20 token', 'utility token',
    'DAO development', 'governance tokens', 'staking platform',
    'crypto wallet development', 'crypto exchange development',
    
    // Software Development
    'custom software development', 'bespoke software development',
    'enterprise software development', 'business software development',
    'SaaS development', 'SaaS platform development', 'cloud application development',
    'web application development', 'web app development', 'progressive web app',
    'mobile app development', 'iOS app development', 'Android app development',
    'cross-platform development', 'React Native development', 'Flutter development',
    'API development', 'REST API', 'GraphQL development', 'microservices',
    'cloud development', 'AWS development', 'Azure development', 'Google Cloud',
    'DevOps services', 'CI/CD pipeline', 'infrastructure as code',
    
    // FinTech
    'FinTech development', 'FinTech software', 'financial software development',
    'payment gateway development', 'payment processing', 'digital payments',
    'banking software', 'neobank development', 'digital banking',
    'trading platform development', 'investment platform', 'robo advisor',
    'RegTech', 'compliance software', 'KYC AML software',
    'InsurTech', 'insurance software', 'wealth management software',
    
    // ============================================
    // LONG-TAIL & COMMERCIAL KEYWORDS
    // ============================================
    'best AI company', 'top AI developers', 'leading AI company',
    'best blockchain developers', 'top blockchain company', 'leading blockchain',
    'best software company', 'top software developers', 'leading software house',
    'hire AI developers', 'hire blockchain developers', 'hire software developers',
    'AI development cost', 'blockchain development cost', 'software development cost',
    'AI development agency', 'blockchain development agency', 'software development agency',
    'outsource AI development', 'outsource blockchain', 'outsource software development',
    'AI startup', 'blockchain startup', 'tech startup', 'software startup',
    'AI partner', 'technology partner', 'digital transformation partner',
    'enterprise technology', 'business technology solutions', 'digital solutions',
    
    // ============================================
    // INDUSTRY KEYWORDS
    // ============================================
    'AI for healthcare', 'AI for finance', 'AI for retail', 'AI for logistics',
    'blockchain for supply chain', 'blockchain for healthcare', 'blockchain for finance',
    'software for startups', 'software for enterprise', 'software for SME',
    'digital transformation consulting', 'IT consulting', 'technology consulting',
    'innovation consulting', 'startup consulting', 'CTO as a service'
  ]
  
  // Combine base keywords with page-specific keywords
  const allKeywords = pageKeywords 
    ? `${pageKeywords}, ${baseKeywords.join(', ')}`
    : baseKeywords.join(', ')
    
  return allKeywords
}

export default function SEO({ 
  title, 
  description, 
  canonical = '/',
  keywords = '',
  type = 'website',
  image = '/og-image.png',
  noindex = false,
  schema = null
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | AI, Blockchain & Software Development | London, Monaco, Lugano`
  const fullUrl = `${BASE_URL}${canonical}`
  const fullImage = image.startsWith('http') ? image : `${BASE_URL}${image}`
  const fullKeywords = generateKeywords(keywords)
  
  // Default schema for pages
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title || SITE_NAME,
    "description": description,
    "url": fullUrl,
    "publisher": {
      "@type": "Organization",
      "name": SITE_NAME,
      "url": BASE_URL
    }
  }

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={fullKeywords} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Robots */}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />
      <meta name="googlebot" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_GB" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Additional SEO */}
      <meta name="author" content={SITE_NAME} />
      <meta name="publisher" content={SITE_NAME} />
      <meta name="copyright" content={`© ${new Date().getFullYear()} ${SITE_NAME}`} />
      
      {/* Geographic targeting */}
      <meta name="geo.region" content="GB-LND" />
      <meta name="geo.placename" content="London, Monaco, Lugano" />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
    </Helmet>
  )
}
