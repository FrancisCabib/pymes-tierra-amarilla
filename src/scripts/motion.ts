import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const ease = 'power3.out'

const revealAll = (): void => {
  gsap.set('[data-reveal], [data-stagger] > *, .hero-line', {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    clearProps: 'all',
  })
}

const initHero = (): void => {
  const heroLines = gsap.utils.toArray<HTMLElement>('.hero-line')
  if (!heroLines.length) return

  const tl = gsap.timeline({ defaults: { ease } })

  tl.fromTo('[data-hero-kicker]', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
    .fromTo(
      heroLines,
      { yPercent: 110, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1, stagger: 0.12 },
      '-=0.2'
    )
    .fromTo('[data-hero-copy]', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.5')
    .fromTo(
      '[data-hero-cta] > *',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
      '-=0.4'
    )
    .fromTo('[data-hero-card]', { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.9 }, '-=0.9')
    .fromTo(
      '[data-hero-stat]',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
      '-=0.5'
    )

  // Parallax background drift on scroll
  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
    const depth = Number(el.dataset.parallax) || 0.2
    gsap.to(el, {
      yPercent: depth * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: el.closest('section') ?? el,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
  })
}

const initReveals = (): void => {
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.9,
      ease,
      scrollTrigger: { trigger: el, start: 'top 86%' },
    })
  })

  gsap.utils.toArray<HTMLElement>('[data-stagger]').forEach((group) => {
    gsap.to(group.children, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease,
      stagger: 0.1,
      scrollTrigger: { trigger: group, start: 'top 84%' },
    })
  })
}

const initCounters = (): void => {
  gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count) || 0
    const suffix = el.dataset.countSuffix ?? ''
    const obj = { val: 0 }
    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = `${Math.round(obj.val)}${suffix}`
          },
        })
      },
    })
  })
}

const initMagnetic = (): void => {
  if (window.matchMedia('(hover: none)').matches) return
  gsap.utils.toArray<HTMLElement>('[data-magnetic]').forEach((el) => {
    const strength = Number(el.dataset.magnetic) || 0.4
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left - r.width / 2) * strength
      const y = (e.clientY - r.top - r.height / 2) * strength
      gsap.to(el, { x, y, duration: 0.4, ease: 'power3.out' })
    })
    el.addEventListener('pointerleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' })
    })
  })
}

const initHeader = (): void => {
  const header = document.querySelector<HTMLElement>('[data-header]')
  if (header) {
    ScrollTrigger.create({
      start: 'top -80',
      end: 99999,
      onUpdate: (self) => {
        header.classList.toggle('is-scrolled', self.scroll() > 80)
      },
    })
  }

  const bar = document.querySelector<HTMLElement>('[data-progress]')
  if (bar) {
    gsap.to(bar, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: { start: 0, end: 'max', scrub: 0.3 },
    })
  }
}

const init = (): void => {
  if (prefersReduced) {
    revealAll()
    return
  }

  gsap.registerPlugin(ScrollTrigger)

  initHero()
  initReveals()
  initCounters()
  initMagnetic()
  initHeader()

  ScrollTrigger.refresh()

  // Safety: if anything failed to reveal after load, force-show on-screen items
  window.addEventListener('load', () => ScrollTrigger.refresh())
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init)
} else {
  init()
}
