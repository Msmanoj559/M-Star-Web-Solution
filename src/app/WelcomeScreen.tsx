import React from 'react'

const WelcomeScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container container">
          <div className="logo">
            <svg
              width="24"
              height="24"
              className="fill-black"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <span className="logo-text">M-Star</span>
          </div>
          <div className="nav-links">
            <a href="/" className="nav-link">Product</a>
            <a href="/merchant" className="nav-link">Pricing</a>
            <a href="#" className="nav-link">About</a>
          </div>
          <div className="nav-actions">
            <a href="#" className="text-link">Log in</a>
            <a
              href="/merchant"
              className="btn-primary"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container container">
          <span className="hero-badge">White-Label SaaS Platform</span>

          <h1 className="hero-title">
            One Platform.<br />
            <span className="block">Multiple Businesses.<br />Unlimited Possibilities.</span>
          </h1>

          <p className="hero-subtitle">
            Build and manage branded digital platforms for your business. From business websites to complete online operations,
            everything starts in one place.
          </p>

          <div className="hero-actions">
            <a
              href="/merchant"
              className="btn-primary"
            >
              Get Started
            </a>
            <a
              href="#categories"
              className="btn-secondary"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </section>

      {/* Business Category Section */}
      <section id="categories" className="categories-section">
        <div className="categories-container container">
          <div className="categories-header">
            <h2 className="category-heading">Powering Every Business Model</h2>
            <p className="category-description">
              Choose the right solution for your industry. M-Star Web Solution supports diverse business categories with
              dedicated features and workflows.
            </p>
          </div>

          <div className="categories-grid">
            <div className="category-card">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7v2h7v10h3a2 2 0 0 1 2 2z" />
              </svg>
              <h3 className="category-title">Bakery &amp; Food</h3>
              <p className="category-text">
                Manage orders, inventory and customer preferences for food businesses.
              </p>
            </div>

            <div className="category-card">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <h3 className="category-title">E-commerce</h3>
              <p className="category-text">
                Build online stores with product catalogues and payment integrations.
              </p>
            </div>

            <div className="category-card">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M2 4v2h20v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6h2v2zM8 2a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H8z" />
              </svg>
              <h3 className="category-title">Delivery</h3>
              <p className="category-text">
                Coordinate deliveries and track work in real time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Categories Section */}
      <section className="supported-section">
        <div className="supported-container container">
          <div className="supported-header">
            <h2 className="category-heading">Supported Business Categories</h2>
            <p className="category-description">
              M-Star Web Solution is designed to support diverse industries. Select your business type to get started.
            </p>
          </div>

          <div className="supported-grid">
            <div className="supported-item">
              <span>Business &amp; Cafe</span>
            </div>
            <div className="supported-item">
              <span>E-commerce Stores</span>
            </div>
            <div className="supported-item">
              <span>Service Businesses</span>
            </div>
            <div className="supported-item">
              <span>Appointment Services</span>
            </div>
            <div className="supported-item">
              <span>Travel Agencies</span>
            </div>
            <div className="supported-item">
              <span>Multi-vendor Marketplaces</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-container container">
          <div className="footer-logo">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <span className="logo-text">M-Star Web Solution</span>
          </div>
          <div className="footer-links">
            <a href="#" className="footer-link">Product</a>
            <a href="#" className="footer-link">Pricing</a>
            <a href="#" className="footer-link">About</a>
            <a href="#" className="footer-link">Terms</a>
            <a href="#" className="footer-link">Privacy</a>
          </div>
          <div className="footer-copyright">
            &copy; 2026 M-Star Web Solution. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default WelcomeScreen