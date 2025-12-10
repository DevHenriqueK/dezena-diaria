import type { ReactNode } from "react"

interface DescriptionProps {
    children: ReactNode,
    className?: string
}

export const GuideDescription = ({children, className}: DescriptionProps) => {
    return(
        <p className={`md:w-[70%] m-auto ${className}`}>{children}</p>
    )
}