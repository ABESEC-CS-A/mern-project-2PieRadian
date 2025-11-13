import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters!");
      setLoading(false);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSuccess(true);
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (err) {
      setError(err.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="signup-container">
        <div className="scanline"></div>
        <div className="success-box">
          <div className="success-icon">✓</div>
          <div className="success-badge">SUCCESS</div>
          <h1>ACCOUNT CREATED!</h1>
          <p>Redirecting to login...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="signup-container">
      <div className="scanline"></div>

      <div className="signup-wrapper">
        <div className="signup-left">
          <div className="signup-badge">JOIN THE ARENA</div>
          <h1 className="signup-title">
            <span>CREATE</span>
            <span className="title-accent">ACCOUNT</span>
          </h1>
          <div className="signup-subtitle">
            Become a legend. Start your journey today.
          </div>
          <div className="signup-features">
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <span>Access to 500+ games</span>
            </div>
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <span>Join tournaments</span>
            </div>
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <span>Connect with players</span>
            </div>
          </div>
        </div>

        <div className="signup-right">
          <div className="signup-box">
            <div className="box-header">
              <div className="header-number">02</div>
              <h2>SIGN UP</h2>
            </div>

            <form onSubmit={handleSubmit} className="signup-form">
              <div className="input-wrapper">
                <label htmlFor="username">USERNAME</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Choose a username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                <div className="input-border"></div>
              </div>

              <div className="input-wrapper">
                <label htmlFor="email">EMAIL</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <div className="input-border"></div>
              </div>

              <div className="input-wrapper">
                <label htmlFor="password">PASSWORD</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <div className="input-border"></div>
              </div>

              <div className="input-wrapper">
                <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Re-enter your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <div className="input-border"></div>
              </div>

              {error && <div className="error-message">{error}</div>}

              <button
                type="submit"
                className="signup-button"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    <span>CREATING...</span>
                  </>
                ) : (
                  <>
                    <span>SIGN UP</span>
                    <span className="btn-arrow">▶</span>
                  </>
                )}
              </button>
            </form>

            <div className="signup-footer">
              <p>Already have an account?</p>
              <Link to="/login" className="login-link">
                LOGIN HERE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
