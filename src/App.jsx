import { useState } from 'react'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  if (!isOpen) {
    return (
      <main className="page">
        <button
          type="button"
          className="envelope-btn"
          aria-label="Open invitation"
          onClick={() => setIsOpen(true)}
        >
          <div className="envelope" aria-hidden="true">
            {/* fold lines */}
            <svg
              className="envelope-lines"
              viewBox="0 0 300 200"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="0"   y1="0"   x2="150" y2="88" />
              <line x1="300" y1="0"   x2="150" y2="88" />
              <line x1="0"   y1="200" x2="150" y2="88" />
              <line x1="300" y1="200" x2="150" y2="88" />
            </svg>

            {/* wax seal */}
            <div className="wax-seal">
              <span className="seal-text">open me</span>
            </div>
          </div>
        </button>
      </main>
    )
  }

  return (
    <main className="page">
      <section className="details" aria-live="polite">
        <p className="eyebrow">You&apos;re invited</p>
        <h1>Sydney&apos;s Bridal Shower</h1>
        <p className="lead">Come celebrate with us before the big day.</p>

        <dl>
          <div>
            <dt>Date</dt>
            <dd>Saturday, September 20, 2026</dd>
          </div>
          <div>
            <dt>Time</dt>
            <dd>1:00 PM</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>Rose Garden Hall, Seattle</dd>
          </div>
          <div>
            <dt>RSVP</dt>
            <dd>By August 30 to Skye</dd>
          </div>
        </dl>
      </section>
    </main>
  )
}

export default App
