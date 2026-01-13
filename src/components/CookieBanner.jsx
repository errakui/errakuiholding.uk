import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    essential: true, // Always true, can't be changed
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      // Show banner and blur content
      setIsVisible(true)
      document.body.classList.add('cookie-blur')
    } else {
      // Load saved preferences
      try {
        const saved = JSON.parse(consent)
        setPreferences(saved)
        document.body.classList.remove('cookie-blur')
        // Initialize analytics if consented
        if (saved.analytics) {
          enableAnalytics()
        }
      } catch (e) {
        setIsVisible(true)
        document.body.classList.add('cookie-blur')
      }
    }
  }, [])

  const enableAnalytics = () => {
    // Enable Google Analytics
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      })
    }
  }

  const disableAnalytics = () => {
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      })
    }
  }

  const handleAcceptAll = () => {
    const newPreferences = {
      essential: true,
      analytics: true,
      marketing: true
    }
    setPreferences(newPreferences)
    localStorage.setItem('cookieConsent', JSON.stringify(newPreferences))
    enableAnalytics()
    document.body.classList.remove('cookie-blur')
    setIsVisible(false)
  }

  const handleRejectAll = () => {
    const newPreferences = {
      essential: true,
      analytics: false,
      marketing: false
    }
    setPreferences(newPreferences)
    localStorage.setItem('cookieConsent', JSON.stringify(newPreferences))
    disableAnalytics()
    document.body.classList.remove('cookie-blur')
    setIsVisible(false)
  }

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences))
    if (preferences.analytics) {
      enableAnalytics()
    } else {
      disableAnalytics()
    }
    document.body.classList.remove('cookie-blur')
    setIsVisible(false)
    setShowSettings(false)
  }

  const handlePreferenceChange = (key) => {
    if (key === 'essential') return // Can't change essential cookies
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  if (!isVisible) return null

  return (
    <div className="cookie-overlay">
      <div className={`cookie-banner ${showSettings ? 'expanded' : ''}`}>
        {!showSettings ? (
          <>
            <div className="cookie-content">
              <div className="cookie-icon">🍪</div>
              <div className="cookie-text">
                <h3>We value your privacy</h3>
                <p>
                  We use cookies to enhance your browsing experience, analyse site traffic, 
                  and understand where our visitors come from. By clicking "Accept All", you 
                  consent to our use of cookies. Read our{' '}
                  <Link to="/privacy" onClick={() => setIsVisible(false)}>Privacy Policy</Link> for more information.
                </p>
              </div>
            </div>
            <div className="cookie-actions">
              <button className="cookie-btn secondary" onClick={handleRejectAll}>
                Reject All
              </button>
              <button className="cookie-btn secondary" onClick={() => setShowSettings(true)}>
                Manage Preferences
              </button>
              <button className="cookie-btn primary" onClick={handleAcceptAll}>
                Accept All
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="cookie-settings-header">
              <h3>Cookie Preferences</h3>
              <button className="cookie-close" onClick={() => setShowSettings(false)}>×</button>
            </div>
            <div className="cookie-settings-content">
              <div className="cookie-option">
                <div className="cookie-option-info">
                  <h4>Essential Cookies</h4>
                  <p>Required for the website to function properly. Cannot be disabled.</p>
                </div>
                <label className="cookie-toggle disabled">
                  <input type="checkbox" checked={true} disabled />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              
              <div className="cookie-option">
                <div className="cookie-option-info">
                  <h4>Analytics Cookies</h4>
                  <p>Help us understand how visitors interact with our website by collecting anonymous data.</p>
                </div>
                <label className="cookie-toggle">
                  <input 
                    type="checkbox" 
                    checked={preferences.analytics} 
                    onChange={() => handlePreferenceChange('analytics')} 
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              
              <div className="cookie-option">
                <div className="cookie-option-info">
                  <h4>Marketing Cookies</h4>
                  <p>Used to deliver relevant advertisements and track marketing campaign effectiveness.</p>
                </div>
                <label className="cookie-toggle">
                  <input 
                    type="checkbox" 
                    checked={preferences.marketing} 
                    onChange={() => handlePreferenceChange('marketing')} 
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
            <div className="cookie-settings-actions">
              <button className="cookie-btn secondary" onClick={handleRejectAll}>
                Reject All
              </button>
              <button className="cookie-btn primary" onClick={handleSavePreferences}>
                Save Preferences
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

