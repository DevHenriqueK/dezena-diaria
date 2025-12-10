export const themes = [
  { themeName: 'Fogo Brilhante', themeCode: 'theme-ember-glow' },
  { themeName: 'Manto de Maria', themeCode: 'theme-mary-blue' },
  { themeName: 'Tempo Comum', themeCode: 'theme-common-green' },
  { themeName: 'Advento / Quaresma', themeCode: 'theme-advent-purple' },
] as const

export type ThemeId = typeof themes[number]['themeCode'];