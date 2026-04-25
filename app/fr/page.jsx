'use client'
import { useEffect } from 'react'

export default function FR() {
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

    const hooks = {
      agence: {
        eyebrow: 'Arrête de payer des agences entre 3 000 et 7 000$/mois',
        h1: 'Vire ton agence.',
        em: 'Contrôle ton marketing.',
        sub: "Grip est une formation marketing complète avec des leçons structurées, des templates prêts à utiliser, des exemples concrets et une certification officielle. Tu apprends le système. Tu l'appliques. Tu le possèdes."
      },
      roi: {
        eyebrow: 'Transforme ton marketing en actif de revenus',
        h1: 'Arrête de payer.',
        em: 'Commence à contrôler.',
        sub: "Chaque dollar en agence disparaît. Grip te donne une formation concrète pour bâtir ton propre système d'acquisition que tu gardes et contrôles pour toujours."
      },
      controle: {
        eyebrow: 'Reprends le contrôle de ton marketing',
        h1: 'Reprends le contrôle.',
        em: 'Gère ton propre marketing.',
        sub: "Des fondations marketing jusqu'aux ads et à l'automatisation. Une formation complète, étape par étape. Une certification pour prouver ta maîtrise. Zéro dépendance externe."
      },
      debutant: {
        eyebrow: 'Aucune expérience en marketing requise',
        h1: 'Aucune expérience requise.',
        em: 'Apprends de zéro, étape par étape.',
        sub: "Pas de jargon. Aucune compétence minimum nécessaire. Grip a été conçu pour les propriétaires qui partent de zéro avec des leçons claires, des templates et un examen de certification."
      }
    }

    const applyHook = (hookKey) => {
      const h = hooks[hookKey]
      if (!h) return
      const eyebrow = document.getElementById('hero-eyebrow')
      const h1el = document.getElementById('hero-h1')
      const em = document.getElementById('hero-em')
      const sub = document.getElementById('hero-sub')
      if (eyebrow) eyebrow.textContent = h.eyebrow
      if (h1el) h1el.childNodes[0].textContent = h.h1
      if (em) em.textContent = h.em
      if (sub) sub.textContent = h.sub
      document.querySelectorAll('.htab').forEach(t => {
        t.classList.toggle('on', t.getAttribute('data-hook') === hookKey)
      })
    }

    const urlParams = new URLSearchParams(window.location.search)
    const hookParam = urlParams.get('hook')
    if (hookParam && hooks[hookParam]) applyHook(hookParam)

    document.querySelectorAll('.htab').forEach(tab => {
      tab.addEventListener('click', () => {
        const hook = tab.getAttribute('data-hook')
        applyHook(hook)
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
    ['💸', "Tu paies entre 3 000 et 7 000$/mois à une agence et tu reçois un rapport PDF que tu ne comprends pas"],
    ['🎲', "Tu roules des ads au feeling au lieu d'un système structuré et répétable"],
    ['📉', 'Tes revenus fluctuent de mois en mois sans diagnostic clair'],
    ['🔒', "Tu dépends totalement d'équipes externes qui ne s'investiront jamais autant que toi"],
    ['🕳️', "Tu n'as aucun système de suivi des leads les prospects disparaissent et les ventes se perdent avant même de commencer"],
    ['❓', "Tu ne sais pas ce qui fonctionne vraiment pas de données claires, pas moyen d'améliorer, juste espérer que le mois prochain sera meilleur"],
  ]

  const profiles = [
    ['Profil 01', "Le propriétaire qui n'a jamais vraiment fait de marketing", "Tu n'as jamais eu de formation en marketing. Ça t'a toujours semblé trop technique, trop écrasant. Tu sais que t'en as besoin t'as juste jamais eu la feuille de route."],
    ['Profil 02', "Le propriétaire qui paie une agence sans voir les résultats", "Tu paies 2 000–5 000$/mois à une agence. Tu reçois des rapports que tu ne comprends pas. Pas de transparence. Tu ne sais pas vraiment ce que tu obtiens."],
    ['Profil 03', "Le leader qui veut que son équipe prenne en charge le marketing", "Tu as une personne interne peut-être un VA, peut-être un junior. Mais il n'y a pas de système. Pas de framework. Pas de moyen de la former ou de la tenir responsable."],
  ]

  const before = ['Le marketing ressemble à du guessing', 'Chaque dollar dépensé est un pari', 'Tu dépends des agences pour tout', "Tu ne sais pas diagnostiquer pourquoi une campagne échoue", 'La croissance est réactive, pas planifiée', "Tu approuves des stratégies que tu ne comprends pas"]
  const after = ['Chaque décision est basée sur un framework clair', 'Tu sais exactement ce que chaque dollar produit', "Tu contrôles le système n'importe qui peut l'exécuter", 'Tu diagnostiques la performance comme un stratège', 'La croissance est délibérée et mesurable', 'Tu possèdes ton intelligence marketing en permanence']

  const modules = [
    ['00', 'The Ownership Shift', ['Le piège de la dépendance aux agences', 'Ce que la compétence interne signifie', 'Standards et engagement'], '20 min'],
    ['01', 'Fondations Marketing', ['Recherche industrie et marché', "Positionnement et design d'offre", 'Avatar et message', 'Framework stratégique'], '60–75 min'],
    ['02', 'Contenu & Autorité', ['Structure de contenu et hooks', 'Scriptwriting', 'Intégration IA', 'Stratégie de distribution'], '60 min'],
    ['03', "Systèmes d'Acquisition", ['Génération de leads', 'Architecture de funnel', 'Fondements ads et métriques', 'Principes de conversion'], '75–90 min'],
    ['04', 'Systèmes & Optimisation', ['Automatisation', 'Lecture des données et KPIs', "Framework d'itération", 'Contrôle à long terme'], '60 min'],
  ]

  const founding = [
    ['Prix membre fondateur bloqué', "L'inscription actuelle est au prix de la première cohorte. Le prix augmentera une fois la cohorte remplie et les résultats documentés."],
    ["Accès direct à l'équipe", 'Les membres de la première cohorte ont un accès plus proche pendant la phase de lancement questions répondues, feedback intégré, communauté bâtie ensemble.'],
    ['Influence le programme', "Les membres fondateurs influencent ce qui s'ajoute ensuite études de cas, templates, outils. Tu n'es pas juste un étudiant. Tu fais partie de la construction."],
  ]

  const features = [
    '5 modules complets avec leçons étape par étape',
    'Accès à vie apprends à ton rythme, pour toujours',
    'Quiz obligatoires après chaque leçon',
    'Examen final de certification (2 tentatives incluses)',
    'Certificat officiel à la réussite',
    'Accès à la communauté Telegram privée',
    'Toutes les mises à jour futures incluses',
    'Garantie satisfait ou remboursé 30 jours',
  ]

  const faqs = [
    ["Est-ce que j'ai besoin d'expérience en marketing?", "Aucune expérience préalable requise. Grip a été conçu spécifiquement pour les propriétaires d'entreprises qui n'ont jamais étudié le marketing formellement. Chaque concept est introduit à partir des principes de base pas de jargon, pas de connaissances supposées."],
    ['Pour qui est ce programme?', "Entrepreneurs, propriétaires de PME, freelances et professionnels qui veulent comprendre et contrôler leur propre marketing qu'ils planifient de l'exécuter eux-mêmes ou de gérer des équipes externes plus stratégiquement."],
    ['Quelle est la différence entre 1 000$ et 1 500$?', "Les membres fondateurs qui s'inscrivent maintenant bloquent le prix de 1 000$ avant le prix régulier de lancement à 1 500$. Même programme complet, même accès à vie, même certification."],
    ["Qu'est-ce que j'obtiens exactement?", 'Accès complet aux 5 modules (Module 0 à 4), quiz obligatoires, examen de certification final avec deux tentatives incluses, certificat officiel à la réussite, accès à la communauté Telegram privée, et toutes les mises à jour futures.'],
    ['Et si je suis un débutant complet?', "Ce programme a été bâti spécifiquement pour les gens qui ne sont pas des marketeurs professionnels. Le curriculum part des fondations comment les marchés fonctionnent, comment la demande est créée, comment le positionnement affecte l'acquisition."],
    ['Y a-t-il une garantie de remboursement?', "Oui. Garantie satisfait ou remboursé 30 jours après le lancement du programme. Si tu complètes le premier module et que tu sens que ce n'est pas le bon fit, contacte-nous dans les 30 jours pour un remboursement complet."],
    ["Combien de temps j'ai accès?", 'Accès à vie. Tu paies une fois et tu possèdes le programme en permanence incluant toutes les mises à jour et ajouts futurs. Pas d\'abonnements, pas de frais récurrents.'],
    ['En quoi est-ce différent du contenu gratuit en ligne?', "Le contenu gratuit te donne des tactiques sans architecture. Tu te retrouves avec de l'information déconnectée sans framework pour l'appliquer. Ce programme fournit un système structuré chaque module s'appuie sur le précédent, tout est lié, et la certification t'assure d'appliquer vraiment ce que tu apprends."],
    ["C'est quoi le Membership VIP?", "Le Membership VIP (75$/mois) est un add-on optionnel disponible exclusivement aux diplômés certifiés. Il inclut des études de cas avancées, des templates de stratégie premium, un accès coaching mensuel et du consulting prioritaire. Il n'est pas requis pour compléter le programme ou obtenir ta certification."],
  ]

  return (
    <>
      <nav>
        <a href="/fr" className="logo">GRIP</a>
        <div className="nav-r">
          <div className="lang-switch">
            <a href="/" className="lang-inactive">EN</a>
            <span className="lang-sep">|</span>
            <a href="/fr" className="lang-active">FR</a>
          </div>
          <a href="#inscription" className="btn-gold">Réserver ma place →</a>
        </div>
      </nav>

      <div className="hero">
        <p className="eyebrow fa d1" id="hero-eyebrow">Arrête de payer des agences entre 3 000 et 7 000$/mois</p>
        <h1 className="h1 fa d2" id="hero-h1">Vire ton agence.<em id="hero-em">Contrôle ton marketing.</em></h1>
        <p className="hero-sub fa d3" id="hero-sub">Grip est une formation marketing complète avec des leçons structurées, des templates prêts à utiliser, des exemples concrets et une certification officielle. Tu apprends le système. Tu l'appliques. Tu le possèdes.</p>
        <div className="hook-tabs fa d4">
          <button className="htab on" data-hook="agence">Anti-Agence</button>
          <button className="htab" data-hook="roi">Actif ROI</button>
          <button className="htab" data-hook="controle">Contrôle</button>
          <button className="htab" data-hook="debutant">Débutant</button>
        </div>
        <div className="fa d6">
          <a href="#inscription" className="btn-gold lg pulse">Réserver ma place →</a>
          <p style={{marginTop:'1rem',fontSize:'0.82rem',color:'var(--muted)'}}>Prix fondateur bloqué à <span style={{color:'var(--gold)'}}>1 000$</span> monte à 1 500$ au lancement.</p>
        </div>
      </div>

      <hr className="dv" />

      <div className="sec">
        <div className="reveal">
          <p className="slabel">Ça te parle?</p>
          <h2 className="stitle">Tu en as assez de ça.</h2>
          <p className="ssub">La plupart des propriétaires d'entreprises n'ont pas un problème de marketing. Ils ont un problème de clarté. Et c'est exactement ce que ce programme apporte.</p>
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
          <p className="slabel">Pour qui c'est</p>
          <h2 className="stitle">Fait pour les propriétaires. Pas les marketeurs.</h2>
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
          <p className="reassurance-text">Expérience en marketing requise Grip a été bâti de fond en comble pour les propriétaires d'entreprises, pas les marketeurs. Chaque concept expliqué à partir des principes de base.</p>
        </div>
      </div>

      <hr className="dv" />

      <div className="sec">
        <div className="reveal">
          <p className="slabel">La transformation</p>
          <h2 className="stitle">Avant vs. Après.</h2>
        </div>
        <div className="ba-grid reveal d2">
          <div className="bacard bef">
            <p className="balabel">Avant</p>
            <ul className="balist">
              {before.map((t, i) => <li key={i} className="baitem"><span className="bax">✕</span>{t}</li>)}
            </ul>
          </div>
          <div className="bacard aft">
            <p className="balabel">Après</p>
            <ul className="balist">
              {after.map((t, i) => <li key={i} className="baitem"><span className="bachk">✓</span>{t}</li>)}
            </ul>
          </div>
        </div>
      </div>

      <hr className="dv" />

      <div className="sec">
        <div className="reveal">
          <p className="slabel">Le programme</p>
          <h2 className="stitle">Quatre modules. Maîtrise complète.</h2>
          <p className="ssub">Un curriculum structuré, basé sur l'exécution. Pas de théorie. Pas de motivation. Un système que tu appliques immédiatement.</p>
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
          <p className="slabel">Première cohorte</p>
          <h2 className="stitle">Le prix Membre Fondateur est actif.</h2>
          <p className="ssub">Grip lance sa première cohorte. Les membres fondateurs accèdent au programme complet au prix actuel avant qu'il augmente.</p>
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
          <p className="slabel">Investissement</p>
          <h2 className="stitle">Un programme. Maîtrise complète.</h2>
        </div>
        <div className="pbox reveal d2">
          <div className="phead">
            <p className="plabel">Membre Fondateur Pré-lancement</p>
            <div className="price-row">
              <span className="pmain">1 000$</span>
              <span className="pcross">1 500$</span>
              <span className="pbadge">Prix Membre Fondateur</span>
            </div>
            <p className="pnote">Paiement unique. Accès à vie. Le prix monte à 1 500$ au lancement.</p>
          </div>
          <div className="pbody">
            <ul className="pfeats">
              {features.map((f, i) => (
                <li key={i} className="pfeat"><span className="fcheck">✓</span>{f}</li>
              ))}
            </ul>
            <div style={{textAlign:'center'}}>
              <a href="#inscription" className="btn-gold lg pulse">Réserver ma place →</a>
            </div>
          </div>
        </div>
      </div>

      <hr className="dv" />

      <div className="sec" style={{maxWidth:'720px',margin:'0 auto'}}>
        <div className="reveal">
          <p className="slabel">Questions</p>
          <h2 className="stitle">Foire aux questions</h2>
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
        <p className="slabel">La décision</p>
        <h2 className="stitle" style={{fontSize:'clamp(2rem,5vw,3.2rem)'}}>Arrête de deviner. <span className="gold">Commence à maîtriser.</span></h2>
        <p style={{color:'var(--muted)',fontSize:'1rem',maxWidth:'460px',margin:'0 auto 2rem'}}>Le système qui propulse ta croissance ne devrait pas vivre en dehors de ta compréhension. Bloque le prix fondateur. Prends le contrôle.</p>
        <a href="#inscription" className="btn-gold lg pulse">Réserver ma place →</a>
      </div>

      <hr className="dv" />

      <div className="sec" style={{maxWidth:'700px',margin:'0 auto'}} id="inscription">
        <div className="reveal" style={{textAlign:'center',marginBottom:'2.5rem'}}>
          <p className="slabel">Inscription</p>
          <h2 className="stitle">Réclame ta place de membre fondateur.</h2>
          <p style={{color:'var(--muted)',fontSize:'0.95rem'}}>Réponds à 3 questions rapides pour confirmer que Grip est le bon fit puis complète ton inscription.</p>
        </div>
        <div className="reveal d2" style={{background:'rgba(201,168,76,0.04)',border:'1px solid rgba(201,168,76,0.2)',borderRadius:'4px',padding:'2rem'}}>
          <iframe
            data-tally-src="https://tally.so/embed/ZjRv6z?hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="510"
            frameBorder="0"
            title="Grip Marketing Contact FR"
          />
        </div>
      </div>

      <footer>
        <p className="footer-brand">GRIP</p>
        <p>© 2026 Grip : Your Marketing System Tous droits réservés.</p>
      </footer>
    </>
  )
}
