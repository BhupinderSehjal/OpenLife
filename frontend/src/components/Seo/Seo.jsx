import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://www.openlife.in'

const defaultSeo = {
  title: 'OpenLife | Productivity, Time Tracking & Daily Planning',
  description:
    'OpenLife is an open-source productivity app for daily planning, time tracking, habit reflection, focus management, and workflow analysis.',
}

const routeSeo = {
  '/': defaultSeo,
  '/about': {
    title: 'About OpenLife | Open-Source Productivity App',
    description:
      'Learn how OpenLife combines time tracking, habit reflection, and workflow analysis in a beginner-friendly open-source productivity app.',
  },
  '/contribute': {
    title: 'Contribute to OpenLife | Beginner-Friendly Open Source',
    description:
      'Contribute to OpenLife, a beginner-friendly open-source productivity app, through focused improvements to code, design, and documentation.',
  },
  '/planner': {
    title: 'Daily Planner | Plan Focus Time with OpenLife',
    description:
      'Use the OpenLife daily planner to organize focus blocks, routines, breaks, and recovery time in a realistic daily workflow.',
  },
  '/insights': {
    title: 'Productivity Insights | Review Focus Trends | OpenLife',
    description:
      'Review focus time, daily balance, and productivity trends with OpenLife insights designed to make workflow reflection easier.',
  },
  '/api-lab': {
    title: 'API Lab | Explore the OpenLife Productivity API',
    description:
      'Explore documented OpenLife task and productivity API endpoints, request examples, validation rules, and predictable response formats.',
  },
  '/contributor-hub': {
    title: 'Contributor Hub | Build OpenLife with the Community',
    description:
      'Find scoped OpenLife issues, contribution guidance, and project resources for building an open-source productivity app with the community.',
  },
  '/settings': {
    title: 'Settings | Personalize Your OpenLife Workflow',
    description:
      'Personalize OpenLife planning, focus, and display defaults to create a daily productivity workflow that fits the way you work.',
  },
  '/showcase': {
    title: 'UI Showcase | Reusable OpenLife React Components',
    description:
      'Explore reusable React and Tailwind components used to build the accessible, beginner-friendly OpenLife productivity interface.',
  },
  '/daily-TimeUsageTracker': {
    title: 'Daily Time Tracker | Understand Your Day | OpenLife',
    description:
      'Track daily activities and review how your time is distributed across work, learning, health, breaks, and personal routines.',
  },
}

function updateMeta(selector, content) {
  document.querySelector(selector)?.setAttribute('content', content)
}

function updateLink(selector, href) {
  document.querySelector(selector)?.setAttribute('href', href)
}

export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const normalizedPath = pathname !== '/' ? pathname.replace(/\/$/, '') : '/'
    const seo = routeSeo[normalizedPath] ?? defaultSeo
    const canonicalUrl = normalizedPath === '/' ? `${SITE_URL}/` : `${SITE_URL}${normalizedPath}`

    document.title = seo.title
    updateMeta('meta[name="description"]', seo.description)
    updateMeta('meta[property="og:title"]', seo.title)
    updateMeta('meta[property="og:description"]', seo.description)
    updateMeta('meta[property="og:url"]', canonicalUrl)
    updateMeta('meta[name="twitter:title"]', seo.title)
    updateMeta('meta[name="twitter:description"]', seo.description)
    updateLink('link[rel="canonical"]', canonicalUrl)
    updateLink('link[rel="alternate"][hreflang="en"]', canonicalUrl)
    updateLink('link[rel="alternate"][hreflang="x-default"]', canonicalUrl)
  }, [pathname])

  return null
}
