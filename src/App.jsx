import { useState } from 'react'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  if (!isOpen) {
    return (
      <main className="page">
        <button
          type="button"
          className="envelope"
          aria-label="Open invitation"
          onClick={() => setIsOpen(true)}
        >
          <span className="envelope-flap" aria-hidden="true" />
          <span className="seal" aria-hidden="true">
            Open Me
          </span>
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
