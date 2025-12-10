import type { ReactNode } from "react"

interface HeaderProps {
    children: ReactNode,
    className?: string,
}

export const GuideHeader = ({children, className}: HeaderProps) => {
    return(
        <header className={`text-center ${className}`}>
            {children}
        </header>
    )
}