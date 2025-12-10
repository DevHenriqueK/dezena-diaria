import type { ReactNode } from "react"

interface TitleProps {
    className?: string,
    children: ReactNode,
}

export const GuideTitle = ({className, children}: TitleProps) => {
    return <h1 className={`text-[2rem] ${className}`}>{children}</h1>
}