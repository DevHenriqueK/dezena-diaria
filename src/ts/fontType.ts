export const fontTypes = [
    { fontTypeName: 'Sans', className: "font-['League Spartan']" },
    { fontTypeName: 'Serif', className: "font-['Arvo']" },
] as const

export type FontTypeId = typeof fontTypes[number]['fontTypeName']