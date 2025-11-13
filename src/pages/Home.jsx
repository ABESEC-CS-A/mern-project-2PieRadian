import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="scanline"></div>

      {/* Hero Section with Diagonal Split */}
      <section className="hero-section">
        <div className="hero-left">
          <div className="hero-badge">NEW ARRIVAL</div>
          <h1 className="hero-title">
            <span className="title-line-1">ENTER</span>
            <span className="title-line-2">THE</span>
            <span className="title-line-3">ARENA</span>
          </h1>
          <div className="hero-stats">
            <div className="stat-box">
              <div className="stat-number">10K+</div>
              <div className="stat-label">PLAYERS</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">500+</div>
              <div className="stat-label">GAMES</div>
            </div>
          </div>
          <div className="hero-buttons">
            <Link to="/signup" className="btn btn-primary">
              <span>JOIN NOW</span>
              <span className="btn-corner top-left"></span>
              <span className="btn-corner top-right"></span>
              <span className="btn-corner bottom-left"></span>
              <span className="btn-corner bottom-right"></span>
            </Link>
            <Link to="/about" className="btn btn-secondary">
              <span>EXPLORE</span>
            </Link>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-grid">
            <div className="grid-item item-1">
              <div className="grid-icon">⚡</div>
              <div className="grid-text">FAST</div>
            </div>
            <div className="grid-item item-2">
              <div className="grid-icon">🏆</div>
              <div className="grid-text">COMPETE</div>
            </div>
            <div className="grid-item item-3">
              <div className="grid-icon">🎮</div>
              <div className="grid-text">PLAY</div>
            </div>
            <div className="grid-item item-4">
              <div className="grid-icon">🔥</div>
              <div className="grid-text">WIN</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Asymmetric Layout */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">FEATURES</h2>
          <div className="title-underline"></div>
        </div>
        <div className="features-grid">
          <div className="feature-card feature-1">
            <div className="feature-number">01</div>
            <div className="feature-content">
              <h3>LATEST GAMES</h3>
              <p>
                Discover the newest releases and stay ahead of the competition
              </p>
            </div>
            <div className="feature-accent"></div>
          </div>
          <div className="feature-card feature-2">
            <div className="feature-number">02</div>
            <div className="feature-content">
              <h3>TOURNAMENTS</h3>
              <p>Compete in high-stakes tournaments with amazing prizes</p>
            </div>
            <div className="feature-accent"></div>
          </div>
          <div className="feature-card feature-3">
            <div className="feature-number">03</div>
            <div className="feature-content">
              <h3>COMMUNITY</h3>
              <p>Connect with gamers worldwide and build your network</p>
            </div>
            <div className="feature-accent"></div>
          </div>
          <div className="feature-card feature-4">
            <div className="feature-number">04</div>
            <div className="feature-content">
              <h3>RANKINGS</h3>
              <p>Climb the leaderboards and prove your skills</p>
            </div>
            <div className="feature-accent"></div>
          </div>
        </div>
      </section>

      {/* CTA Section with Diagonal Design */}
      <section className="cta-section">
        <div className="cta-content">
          <div className="cta-badge">READY?</div>
          <h2>START YOUR JOURNEY</h2>
          <p>Join thousands of players and dominate the arena</p>
          <Link to="/signup" className="btn btn-cta">
            <span>GET STARTED</span>
            <span className="btn-corner top-left"></span>
            <span className="btn-corner top-right"></span>
            <span className="btn-corner bottom-left"></span>
            <span className="btn-corner bottom-right"></span>
          </Link>
        </div>
        <div className="cta-visual">
          <div className="visual-box box-1"></div>
          <div className="visual-box box-2"></div>
          <div className="visual-box box-3"></div>
        </div>
      </section>
    </div>
  );
}
