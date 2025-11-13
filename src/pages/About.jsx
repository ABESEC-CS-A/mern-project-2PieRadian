import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="scanline"></div>

      <div className="about-hero">
        <div className="hero-badge">ABOUT US</div>
        <h1 className="about-title">
          <span>GAME</span>
          <span className="title-accent">HUB</span>
        </h1>
        <div className="title-underline"></div>
      </div>

      <section className="about-content-section">
        <div className="content-block block-1">
          <div className="block-number">01</div>
          <div className="block-content">
            <h2>OUR MISSION</h2>
            <p>
              At GameHub, we're building the ultimate gaming platform where
              players can compete, connect, and conquer. We believe gaming is
              more than entertainment—it's a way to push boundaries, build
              communities, and achieve greatness.
            </p>
            <p>
              Our mission is to create an arena where every gamer can find their
              place, whether you're a casual player or a competitive champion.
              We're here to fuel your passion and elevate your gaming
              experience.
            </p>
          </div>
          <div className="block-visual visual-1"></div>
        </div>

        <div className="content-block block-2">
          <div className="block-visual visual-2"></div>
          <div className="block-number">02</div>
          <div className="block-content">
            <h2>THE COMMUNITY</h2>
            <p>
              With over 10,000 active players, GameHub has become a powerhouse
              in the gaming world. Our community is diverse, passionate, and
              always ready for the next challenge.
            </p>
            <p>
              We host regular tournaments, game nights, and special events that
              bring our community together. Our platform is built on respect,
              competition, and the shared love of gaming.
            </p>
          </div>
        </div>

        <div className="content-block block-3">
          <div className="block-number">03</div>
          <div className="block-content">
            <h2>WHAT WE OFFER</h2>
            <div className="offer-list">
              <div className="offer-item">
                <span className="offer-bullet">▶</span>
                <div>
                  <h3>MASSIVE GAME LIBRARY</h3>
                  <p>500+ games across all genres and platforms</p>
                </div>
              </div>
              <div className="offer-item">
                <span className="offer-bullet">▶</span>
                <div>
                  <h3>ELITE TOURNAMENTS</h3>
                  <p>Compete in high-stakes tournaments with amazing prizes</p>
                </div>
              </div>
              <div className="offer-item">
                <span className="offer-bullet">▶</span>
                <div>
                  <h3>SOCIAL NETWORK</h3>
                  <p>Connect with friends, join clans, and build your team</p>
                </div>
              </div>
              <div className="offer-item">
                <span className="offer-bullet">▶</span>
                <div>
                  <h3>24/7 SUPPORT</h3>
                  <p>Our dedicated team is always here to help you win</p>
                </div>
              </div>
            </div>
          </div>
          <div className="block-visual visual-3"></div>
        </div>
      </section>

      <section className="team-section">
        <div className="section-header">
          <h2 className="section-title">THE TEAM</h2>
          <div className="title-underline"></div>
        </div>
        <div className="team-grid">
          <div className="team-card">
            <div className="card-border"></div>
            <div className="card-number">01</div>
            <div className="card-icon">👨‍💻</div>
            <h3>ALEX CHEN</h3>
            <p className="card-role">FOUNDER & CEO</p>
            <p className="card-bio">15+ years of gaming expertise</p>
          </div>
          <div className="team-card">
            <div className="card-border"></div>
            <div className="card-number">02</div>
            <div className="card-icon">👩‍🎮</div>
            <h3>SARAH JOHNSON</h3>
            <p className="card-role">COMMUNITY MANAGER</p>
            <p className="card-bio">Building amazing communities</p>
          </div>
          <div className="team-card">
            <div className="card-border"></div>
            <div className="card-number">03</div>
            <div className="card-icon">👨‍🔧</div>
            <h3>MIKE RODRIGUEZ</h3>
            <p className="card-role">LEAD DEVELOPER</p>
            <p className="card-bio">Crafting the future of gaming</p>
          </div>
          <div className="team-card">
            <div className="card-border"></div>
            <div className="card-number">04</div>
            <div className="card-icon">👩‍🎨</div>
            <h3>EMMA WILSON</h3>
            <p className="card-role">DESIGN DIRECTOR</p>
            <p className="card-bio">Creating epic experiences</p>
          </div>
        </div>
      </section>

      <section className="cta-about">
        <div className="cta-box">
          <div className="cta-badge">JOIN US</div>
          <h2>READY TO DOMINATE?</h2>
          <p>Start your journey and become a legend</p>
          <div className="cta-buttons">
            <a href="/signup" className="btn btn-primary">
              <span>SIGN UP</span>
              <span className="btn-corner top-left"></span>
              <span className="btn-corner top-right"></span>
              <span className="btn-corner bottom-left"></span>
              <span className="btn-corner bottom-right"></span>
            </a>
            <a href="/login" className="btn btn-secondary">
              <span>LOGIN</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
