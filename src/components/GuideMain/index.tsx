import type { ReactNode } from "react";

interface MainProps { 
    children: ReactNode,
    className?: string, 
}

export const GuideMain = ({ children, className }: MainProps) => {
    return (
        <main className={`p-6 ${className}`}>
            {children}
        </main>
    )
}