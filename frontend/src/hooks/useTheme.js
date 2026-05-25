import { useEffect, useState } from 'react'

const THEME_STORAGE_KEY = 'openlife.theme'
const themeOptions = ['system', 'light', 'dark']

function getSystemTheme() {
  if (typeof window === 'undefined') return 'dark'
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function normalizeTheme(value) {
  return themeOptions.includes(value) ? value : 'system'
}

function resolveTheme(preference) {
  return preference === 'system' ? getSystemTheme() : preference
}

function applyTheme(preference) {
  const normalized = normalizeTheme(preference)
  const resolved = resolveTheme(normalized)

  document.documentElement.dataset.theme = resolved
  document.documentElement.dataset.themePreference = normalized
  document.documentElement.style.colorScheme = resolved
}

export function initializeTheme() {
  const storedTheme = normalizeTheme(localStorage.getItem(THEME_STORAGE_KEY))
  applyTheme(storedTheme)
}

export function useTheme() {
  const [preference, setPreference] = useState(() => normalizeTheme(localStorage.getItem(THEME_STORAGE_KEY)))
  const [systemTheme, setSystemTheme] = useState(() => getSystemTheme())
  const resolvedTheme = preference === 'system' ? systemTheme : preference

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, preference)
    applyTheme(preference)
  }, [preference])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
    const handleChange = () => {
      setSystemTheme(getSystemTheme())

      if (document.documentElement.dataset.themePreference === 'system') {
        applyTheme('system')
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return {
    preference,
    resolvedTheme,
    setPreference,
  }
}
