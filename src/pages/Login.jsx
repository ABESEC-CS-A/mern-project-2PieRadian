import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      window.location.href = "/";
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="scanline"></div>

      <div className="login-wrapper">
        <div className="login-left">
          <div className="login-badge">WELCOME BACK</div>
          <h1 className="login-title">
            <span>ENTER</span>
            <span className="title-accent">ARENA</span>
          </h1>
          <div className="login-subtitle">
            Ready to dominate? Login and claim your victory.
          </div>
          <div className="login-visual">
            <div className="visual-grid">
              <div className="grid-cell"></div>
              <div className="grid-cell"></div>
              <div className="grid-cell"></div>
              <div className="grid-cell"></div>
            </div>
          </div>
        </div>

        <div className="login-right">
          <div className="login-box">
            <div className="box-header">
              <div className="header-number">01</div>
              <h2>LOGIN</h2>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="input-wrapper">
                <label htmlFor="email">EMAIL</label>
                <input
                  type="email"
                  id="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="input-border"></div>
              </div>

              <div className="input-wrapper">
                <label htmlFor="password">PASSWORD</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="input-border"></div>
              </div>

              {error && <div className="error-message">{error}</div>}

              <button type="submit" className="login-button" disabled={loading}>
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    <span>LOADING...</span>
                  </>
                ) : (
                  <>
                    <span>LOGIN</span>
                    <span className="btn-arrow">▶</span>
                  </>
                )}
              </button>
            </form>

            <div className="login-footer">
              <p>New player?</p>
              <Link to="/signup" className="signup-link">
                CREATE ACCOUNT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
