import { useEffect, useState } from "react";
import { fontTypes, type FontTypeId } from "../ts/fontType";

export function useFont() {
    const [fontType, setFontType] = useState<FontTypeId>(() => {
        const saved = localStorage.getItem('fontType')
        return (saved as FontTypeId) || 'sans'
    })

    useEffect(() => {
        fontTypes.map(font => document.documentElement.classList.remove(font.fontTypeName.toLowerCase()))
        document.documentElement.classList.add(fontType)
        localStorage.setItem('fontType', fontType)
    }, [fontType])

    return { fontType, setFontType, fontTypes }
}