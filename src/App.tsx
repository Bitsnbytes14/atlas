import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

const journeySteps = [
  '✈ Discovering hidden places...',
  '🏨 Finding remarkable hotels...',
  '🍜 Curating local restaurants...',
  '🌅 Planning unforgettable sunsets...',
  '📖 Writing your travel book...',
  '🧳 Preparing your guide...',
]

const journeySummary = {
  destination: 'Japan',
  days: '7 Days',
  budget: '₹2.4L',
  style: 'Luxury Family Escape',
  status: 'Travel Book Ready',
}

export default function App() {
  const navigate = useNavigate()
  const [transitionState, setTransitionState] = useState<'idle' | 'loading' | 'complete'>('idle')
  const [activeStep, setActiveStep] = useState(0)

  const beginJourney = () => {
    setActiveStep(0)
    setTransitionState('loading')
  }

  useEffect(() => {
    if (transitionState !== 'loading') {
      return
    }

    if (activeStep >= journeySteps.length - 1) {
      setTransitionState('complete')
      return
    }

    const timeout = window.setTimeout(() => {
      setActiveStep((current) => current + 1)
    }, 900)

    return () => {
      window.clearTimeout(timeout)
    }
  }, [activeStep, transitionState])

  useEffect(() => {
    if (transitionState !== 'complete') {
      return
    }

    const timeout = window.setTimeout(() => {
      navigate('/dashboard')
    }, 1400)

    return () => {
      window.clearTimeout(timeout)
    }
  }, [navigate, transitionState])

  return (
    <main className="atlas-landing">
      {transitionState !== 'idle' && (
        <div className={`journey-transition ${transitionState === 'complete' ? 'is-complete' : ''}`}>
          <div className="journey-panel">
            {transitionState === 'loading' ? (
              <>
                <p className="journey-kicker">atlas • crafting your journey</p>
                <h2>Preparing something remarkable.</h2>
                <p className="journey-copy">
                  The experience is being shaped into a beautifully composed travel book.
                </p>
                <div className="transition-steps" aria-live="polite">
                  {journeySteps.map((step, index) => {
                    const isActive = index === activeStep
                    const isComplete = index < activeStep

                    return (
                      <div
                        key={step}
                        className={`transition-step ${isActive ? 'is-active' : ''} ${isComplete ? 'is-complete' : ''}`}
                      >
                        <span className="transition-icon">{isComplete ? '✓' : isActive ? '•' : '○'}</span>
                        <span>{step}</span>
                      </div>
                    )
                  })}
                </div>
                <div className="transition-progress" aria-hidden="true">
                  <span style={{ width: `${((activeStep + 1) / journeySteps.length) * 100}%` }} />
                </div>
              </>
            ) : (
              <>
                <div className="journey-check">✓</div>
                <p className="journey-kicker">atlas • journey generated</p>
                <h2>Your travel book is ready.</h2>
                <div className="journey-summary-grid">
                  <div>
                    <span>Destination</span>
                    <strong>{journeySummary.destination}</strong>
                  </div>
                  <div>
                    <span>Days</span>
                    <strong>{journeySummary.days}</strong>
                  </div>
                  <div>
                    <span>Budget</span>
                    <strong>{journeySummary.budget}</strong>
                  </div>
                  <div>
                    <span>Travel Style</span>
                    <strong>{journeySummary.style}</strong>
                  </div>
                </div>
                <p className="journey-status">Status: {journeySummary.status}</p>
              </>
            )}
          </div>
        </div>
      )}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-kicker">atlas • luxury travel intelligence</p>
          <h1 className="hero-display">A trip should feel like a story worth keeping.</h1>
          <p className="hero-copy">
            Atlas is a refined travel planning experience that turns a few ideas into an
            elegant, deeply personal journey.
          </p>
          <div className="hero-input-shell">
            <div className="hero-prompt-card">
              <div className="prompt-bubble" aria-hidden="true">
                <span className="prompt-dot prompt-dot-1" />
                <span className="prompt-dot prompt-dot-2" />
                <span className="prompt-dot prompt-dot-3" />
              </div>
              <div className="prompt-copy">
                <p className="prompt-label">Describe the kind of journey you want to create.</p>
                <p className="prompt-placeholder">“7 days in Japan under ₹2 lakh...”</p>
              </div>
              <button type="button" className="hero-cta" onClick={beginJourney}>Design My Journey</button>
            </div>
            <div className="hero-trust-row">
              <span className="trust-pill">✨ Powered by Gemini AI</span>
              <span className="trust-pill">🌐 Build Once. Render Everywhere.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-width">
          <div className="section-intro">
            <p className="caption">why atlas</p>
            <h2 className="display-text">Travel planning should feel cinematic, calm, and deeply personal.</h2>
          </div>
          <div className="feature-grid">
            <article className="feature-card">
              <h3>Curated with intent</h3>
              <p>Every detail is shaped around your pace, taste, and sense of occasion.</p>
            </article>
            <article className="feature-card">
              <h3>Built for emotion</h3>
              <p>The experience feels like a luxurious guidebook, not a checklist.</p>
            </article>
            <article className="feature-card">
              <h3>One source of truth</h3>
              <p>The same Trip can later travel across web, email, and print.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-width">
          <div className="book-preview glass-surface">
            <div className="book-copy">
              <p className="caption">travel book preview</p>
              <h2 className="display-text">The trip arrives as a beautifully composed guide.</h2>
              <p className="body-copy">
                From the opening page to the final note, Atlas presents each journey as a refined narrative.
              </p>
            </div>
            <div className="book-mock" aria-hidden="true">
              <div className="book-page book-page-left">
                <div className="page-visual" />
                <div className="page-content">
                  <p className="page-eyebrow">Japan</p>
                  <h3>7-Day Journey</h3>
                  <p className="page-title">Luxury Family Escape</p>
                  <p className="page-copy">A slow, beautifully paced itinerary shaped around temples, coastlines, and evenings that linger.</p>
                  <div className="page-meta">
                    <span>Estimated Budget</span>
                    <strong>₹2.4L</strong>
                  </div>
                  <div className="page-meta">
                    <span>Best Season</span>
                    <strong>Spring</strong>
                  </div>
                  <div className="page-meta">
                    <span>Travel Style</span>
                    <strong>Private + Calm</strong>
                  </div>
                </div>
              </div>
              <div className="book-page book-page-right">
                <div className="page-topline">
                  <span>Day 1 • Arrival</span>
                  <span>Kyoto</span>
                </div>
                <div className="page-grid">
                  <div>
                    <h4>Morning</h4>
                    <p>Arrival with private transfer and a quiet check-in overlooking the garden court.</p>
                  </div>
                  <div>
                    <h4>Afternoon</h4>
                    <p>Tea service, a slow walk through temple lanes, and a long lunch at a riverside omakase.</p>
                  </div>
                  <div>
                    <h4>Evening</h4>
                    <p>Rooftop dinner with lantern light and a gentle evening stroll.</p>
                  </div>
                  <div>
                    <h4>Weather</h4>
                    <p>18°C • Light breeze • Clear skies</p>
                  </div>
                </div>
                <div className="page-footer">
                  <div>
                    <span className="footer-label">Hotel</span>
                    <strong>Garden Residence</strong>
                  </div>
                  <div>
                    <span className="footer-label">Top Restaurant</span>
                    <strong>Hana No Mai</strong>
                  </div>
                  <div>
                    <span className="footer-label">Packing</span>
                    <strong>Layered neutrals</strong>
                  </div>
                </div>
              </div>
            </div>
            <p className="book-caption">Generated once. Shared everywhere.</p>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-width">
          <div className="section-intro">
            <p className="caption">build once, render everywhere</p>
            <h2 className="display-text">One Trip object powers the web experience, the email, and the printable guide.</h2>
          </div>
          <div className="render-grid">
            <article className="render-card glass-surface">
              <h3>Web Experience</h3>
              <p>Immersive, editorial, and interactive.</p>
            </article>
            <article className="render-card glass-surface">
              <h3>Email</h3>
              <p>Elegant and structured for sharing.</p>
            </article>
            <article className="render-card glass-surface">
              <h3>Printable Travel Guide</h3>
              <p>Thoughtfully composed for print and offline use.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-width">
          <div className="section-intro">
            <p className="caption">testimonials</p>
            <h2 className="display-text">Designed for travelers who expect more than a checklist.</h2>
          </div>
          <div className="testimonial-grid">
            <article className="testimonial-card premium-card">
              <p>“Atlas feels like a personal concierge, not software.”</p>
              <span>— Elena, Milan</span>
            </article>
            <article className="testimonial-card premium-card">
              <p>“It makes planning feel calm and beautifully considered.”</p>
              <span>— Marcus, Copenhagen</span>
            </article>
          </div>
        </div>
      </section>

      <section className="section-spacing final-cta-section">
        <div className="container-width">
          <div className="final-cta glass-surface">
            <p className="caption">ready to begin</p>
            <h2 className="display-text">Create a journey that feels as elevated as the destination itself.</h2>
            <button type="button" className="hero-cta">Design My Journey</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container-width footer-inner">
          <span>Atlas</span>
          <span>Luxury travel planning, thoughtfully rendered.</span>
        </div>
      </footer>
    </main>
  )
}
