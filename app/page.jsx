'use client'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in-view'); obs.unobserve(e.target) }
      })
    }, { threshold: 0.12 })
    els.forEach(el => obs.observe(el))

    const nav = document.querySelector('nav')
    const onScroll = () => nav && nav.classList.toggle('sc', window.scrollY > 40)
    window.addEventListener('scroll', onScroll)

    document.querySelectorAll('.htab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.htab').forEach(t => t.classList.remove('on'))
        tab.classList.add('on')
      })
    })

    document.querySelectorAll('.fitem').forEach(item => {
      const btn = item.querySelector('.ftrig')
      if (btn) btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open')
        document.querySelectorAll('.fitem').forEach(f => f.classList.remove('open'))
        if (!isOpen) item.classList.add('open')
      })
    })

    const w = 'https://tally.so/widgets/embed.js'
    if (typeof window.Tally !== 'undefined') {
      window.Tally.loadEmbeds()
    } else if (!document.querySelector('script[src="' + w + '"]')) {
      const s = document.createElement('script')
      s.src = w
      s.onload = () => window.Tally && window.Tally.loadEmbeds()
      document.body.appendChild(s)
    }

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const painItems = [
    ['💸', "Paying $3,000/month to an agency and receiving a PDF report you don't understand"],
    ['🎲', 'Running ads on gut feeling instead of a structured, repeatable system'],
    ['📉', 'Revenue that fluctuates month to month with no clear diagnosis'],
    ['🔒', 'Being fully dependent on external teams who will never care as much as you do'],
    ['🕳️', 'Having no system to follow up with leads — prospects fall through the cracks and revenue is lost before it even starts'],
    ['❓', "Not knowing what's actually working — no clear data, no way to improve, just guessing and hoping next month will be better"],
  ]

  const profiles = [
    ['Profile 01', "The business owner who's never really done marketing", "You never had a marketing background. It always felt too technical, too overwhelming. You know you need it — you just never had the roadmap."],
    ['Profile 02', 'The owner paying an agency and not seeing results', "You're paying $2-5K/month to an agency. You get reports you don't understand. There's no transparency. You're not sure what you're actually getting."],
    ['Profile 03', 'The leader who wants their team to own the marketing', "You have an internal person — maybe a VA, maybe a junior hire. But there's no system. No framework. No way to train them or hold them accountable."],
  ]

  const before = ['Marketing feels like guesswork', 'Every dollar spent is a leap of faith', 'You depend on agencies for everything', "You can't diagnose why campaigns fail", 'Growth is reactive, not engineered', "You approve strategies you don't understand"]
  const after = ['Every decision is backed by a clear framework', 'You know exactly what each dollar produces', 'You control the system — anyone can execute it', 'You diagnose performance like a strategist', 'Growth is deliberate and measurable', 'You own your marketing intelligence permanently']

  const modules = [
    ['00', 'The Ownership Shift', ['The agency dependency trap', 'What internal capability means', 'Standards & commitment'], '20 min'],
    ['01', 'Marketing Foundations', ['Industry & market research', 'Positioning & offer design', 'Avatar & messaging', 'Strategic framework'], '60–75 min'],
    ['02', 'Content & Authority', ['Content structure & hooks', 'Scriptwriting', 'AI integration', 'Distribution strategy'], '60 min'],
    ['03', 'Acquisition Systems', ['Lead generation', 'Funnel architecture', 'Ads foundation & metrics', 'Conversion principles'], '75–90 min'],
    ['04', 'Systems & Optimization', ['Automation fundamentals', 'Data reading & KPIs', 'Iteration framework', 'Long-term control'], '60 min'],
  ]

  const founding = [
    ['Founding member price locked', 'Current enrollment is priced for the first cohort. The price will increase once the cohort is full and results are documented.'],
    ['Direct access to the team', 'First cohort members get closer access during the launch phase — questions answered, feedback integrated, community built from the ground up.'],
    ['Shape the program', "Founding members influence what gets added next — case studies, templates, tools. You're not just a student. You're part of building this."],
  ]

  const features = [
    '5 comprehensive modules with step-by-step lessons',
    'Lifetime access — learn at your own pace, forever',
    'Mandatory quizzes after every lesson',
    'Final certification exam (2 attempts included)',
    'Official certificate upon passing',
    'Private Telegram community access',
    'All future program updates included',
    '30-day money-back guarantee',
  ]

  const faqs = [
    ['Do I need marketing experience to take Grip?', 'No prior marketing experience is required. Grip was built specifically for business owners who have never formally studied marketing. Every concept is introduced from first principles — no jargon, no assumed knowledge.'],
    ['Who is this program for?', 'Entrepreneurs, small business owners, freelancers, and professionals who want to understand and control their own marketing — whether they plan to execute it themselves or manage external teams more strategically. No prior marketing background required.'],
    ["What's the difference between the $1,000 Founding Member price and the $1,500 launch price?", 'Founding Members who join lock in the $1,000 one-time price — before the regular launch price of $1,500. Same full program, same lifetime access, same certification. The founding price closes when enrollment officially opens.'],
    ['What exactly do I get?', 'Full access to all 5 modules (Module 0 through 4), mandatory lesson quizzes, a final certification exam with two included attempts, an official certificate upon passing, access to the private Telegram community, and all future program updates.'],
    ['What if I am a complete beginner?', 'This program was built specifically for people who are not professional marketers. The curriculum starts from the foundations — how markets work, how demand is created, how positioning affects acquisition — before moving into execution. No jargon, no assumed knowledge.'],
    ['Is there a money-back guarantee?', 'Yes. There is a 30-day satisfaction guarantee after the program launches. If you complete the first module and feel the program is not right for you, contact us within 30 days of enrollment for a full refund. No questions asked.'],
    ['How long do I have access?', 'Lifetime access. You pay once and own the program permanently — including all future updates and additions. No subscriptions, no recurring fees for the core program.'],
    ['How is this different from free content online?', 'Free content gives you tactics without architecture. You end up with disconnected information and no framework to apply it. This program provides a structured system — each module builds on the last, everything is tied together, and the certification requirement ensures you actually apply what you learn.'],
    ['What about the VIP Membership?', 'The VIP Membership ($75/month) is an optional add-on available exclusively to certified graduates. It includes advanced case studies, premium strategy templates, monthly coaching access, and priority consulting. It is not required to complete the program or receive your certification.'],
  ]

  return (
    <>
      <nav>
        <a href="/" className="logo">GRIP</a>
        <div className="nav-r">
          <div className="lang-switch">
            <a href="/" className="lang-active">EN</a>
            <span className="lang-sep">|</span>
            <a href="/fr" className="lang-inactive">FR</a>
          </div>
          <a href="#enroll" className="btn-gold">Reserve My Spot →</a>
        </div>
      </nav>

      <div className="hero">
        <p className="eyebrow fa d1">Stop Paying $3,000/Month to Agencies</p>
        <h1 className="h1 fa d2">Fire Your Agency.<em>Own Your Marketing.</em></h1>
        <p className="hero-sub fa d3">No marketing background? No problem. Paying an agency and not sure what you're getting? Grip gives any business owner a complete, structured marketing system they can build, run, and own — certified.</p>
        <div className="hook-tabs fa d4">
          <button className="htab on">Anti-Agency</button>
          <button className="htab">ROI Asset</button>
          <button className="htab">Control</button>
          <button className="htab">Beginner</button>
        </div>
        <div className="fa d6">
          <a href="#enroll" className="btn-gold lg pulse">Reserve My Spot →</a>
          <p style={{marginTop:'1rem',fontSize:'0.82rem',color:'var(--muted)'}}>Founding member price locked at <span style={{color:'var(--gold)'}}>$1,000</span> — increases to $1,500 at launch.</p>
        </div>
      </div>

      <hr className="dv" />

      <div className="sec">
        <div className="reveal">
          <p className="slabel">Sound familiar?</p>
          <h2 className="stitle">You're tired of this.</h2>
          <p className="ssub">Most business owners don't have a marketing problem. They have a clarity problem. And clarity is exactly what this program delivers.</p>
        </div>
        <div className="pain-grid reveal d2">
          {painItems.map(([icon, text], i) => (
            <div key={i} className="pcell">
              <div className="picon">{icon}</div>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="dv" />

      <div className="sec">
        <div className="reveal">
          <p className="slabel">Who Grip is built for</p>
          <h2 className="stitle">Built for Owners. Not Marketers.</h2>
        </div>
        <div className="profile-grid reveal d2">
          {profiles.map(([num, title, desc], i) => (
            <div key={i} className="profile-card">
              <p className="profile-num">{num}</p>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
        <div className="reassurance-box reveal d3">
          <p className="reassurance-num">0</p>
          <p className="reassurance-text">Prior marketing experience required — Grip was built from the ground up for business owners, not marketers. Every concept explained from first principles.</p>
        </div>
      </div>

      <hr className="dv" />

      <div className="sec">
        <div className="reveal">
          <p className="slabel">The Transformation</p>
          <h2 className="stitle">Before vs. After.</h2>
        </div>
        <div className="ba-grid reveal d2">
          <div className="bacard bef">
            <p className="balabel">Before</p>
            <ul className="balist">
              {before.map((t, i) => <li key={i} className="baitem"><span className="bax">✕</span>{t}</li>)}
            </ul>
          </div>
          <div className="bacard aft">
            <p className="balabel">After</p>
            <ul className="balist">
              {after.map((t, i) => <li key={i} className="baitem"><span className="bachk">✓</span>{t}</li>)}
            </ul>
          </div>
        </div>
      </div>

      <hr className="dv" />

      <div className="sec">
        <div className="reveal">
          <p className="slabel">The Program</p>
          <h2 className="stitle">Four Modules. Complete Mastery.</h2>
          <p className="ssub">A structured, execution-based curriculum. Not theory. Not motivation. A system you apply immediately.</p>
        </div>
        <div className="mod-grid reveal d2">
          {modules.map(([num, title, topics, time], i) => (
            <div key={i} className="mcard">
              <p className="mnum">Module {num}</p>
              <h3>{title}</h3>
              <ul className="mtopics">{topics.map((t, j) => <li key={j}>{t}</li>)}</ul>
              <span className="mtime">{time}</span>
            </div>
          ))}
        </div>
      </div>

      <hr className="dv" />

      <div className="sec">
        <div className="reveal">
          <p className="slabel">First Cohort</p>
          <h2 className="stitle">Founding Member pricing is live.</h2>
          <p className="ssub">Grip is launching its first cohort. Founding members access the full program at the current price — before it increases.</p>
        </div>
        <div className="proof-grid reveal d2">
          {founding.map(([title, desc], i) => (
            <div key={i} className="pcard">
              <p className="pcard-title">{title}</p>
              <p className="pcard-text">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="dv" />

      <div className="sec" style={{maxWidth:'680px',margin:'0 auto'}}>
        <div className="reveal" style={{textAlign:'center'}}>
          <p className="slabel">Investment</p>
          <h2 className="stitle">One Course. Complete Marketing Mastery.</h2>
        </div>
        <div className="pbox reveal d2">
          <div className="phead">
            <p className="plabel">Founding Member — Pre-Launch</p>
            <div className="price-row">
              <span className="pmain">$1,000</span>
              <span className="pcross">$1,500</span>
              <span className="pbadge">Founding Member Price</span>
            </div>
            <p className="pnote">One-time payment. Lifetime access. Price increases to $1,500 at launch.</p>
          </div>
          <div className="pbody">
            <ul className="pfeats">
              {features.map((f, i) => (
                <li key={i} className="pfeat"><span className="fcheck">✓</span>{f}</li>
              ))}
            </ul>
            <div style={{textAlign:'center'}}>
              <a href="#enroll" className="btn-gold lg pulse">Reserve My Spot →</a>
            </div>
          </div>
        </div>
      </div>

      <hr className="dv" />

      <div className="sec" style={{maxWidth:'720px',margin:'0 auto'}}>
        <div className="reveal">
          <p className="slabel">Questions</p>
          <h2 className="stitle">Frequently Asked</h2>
        </div>
        <div className="faq-list reveal d2">
          {faqs.map(([q, a], i) => (
            <div key={i} className="fitem">
              <button className="ftrig">
                <span className="fq">{q}</span>
                <span className="ficon">+</span>
              </button>
              <div className="fbody">
                <div className="finner">
                  <p className="fa-text">{a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="dv" />

      <div className="fcta reveal">
        <p className="slabel">The Decision</p>
        <h2 className="stitle" style={{fontSize:'clamp(2rem,5vw,3.2rem)'}}>Stop Guessing. <span className="gold">Start Mastering.</span></h2>
        <p style={{color:'var(--muted)',fontSize:'1rem',maxWidth:'460px',margin:'0 auto 2rem'}}>The system that drives your growth should not live outside your understanding. Lock the founding price. Take control.</p>
        <a href="#enroll" className="btn-gold lg pulse">Reserve My Spot →</a>
      </div>

      <hr className="dv" />

      <div className="sec" style={{maxWidth:'700px',margin:'0 auto'}} id="enroll">
        <div className="reveal" style={{textAlign:'center',marginBottom:'2.5rem'}}>
          <p className="slabel">Enrollment</p>
          <h2 className="stitle">Claim your founding member spot.</h2>
          <p style={{color:'var(--muted)',fontSize:'0.95rem'}}>Answer 3 quick questions to confirm Grip is the right fit — then complete your enrollment.</p>
        </div>
        <div className="reveal d2" style={{background:'rgba(201,168,76,0.04)',border:'1px solid rgba(201,168,76,0.2)',borderRadius:'4px',padding:'2rem'}}>
          <iframe
            data-tally-src="https://tally.so/embed/q4EoAY?hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="650"
            frameBorder="0"
            title="Grip - Marketing Contact Form EN"
          />
        </div>
      </div>

      <footer>
        <p className="footer-brand">GRIP</p>
        <p>© 2026 Grip : Your Marketing System — All rights reserved.</p>
      </footer>
    </>
  )
}
