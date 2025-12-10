import { useEffect, useState } from 'react'
import { themes, type ThemeId } from '../ts/themes'

export function useTheme() {
  const [theme, setTheme] = useState<ThemeId>(() => {
    const saved = localStorage.getItem('theme')
    return (saved as ThemeId) || themes[0].themeCode
  })

  useEffect(() => {
    themes.map(theme => document.documentElement.classList.remove(theme.themeCode))
    document.documentElement.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return { theme, setTheme, themes }
}