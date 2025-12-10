import type { Dispatch, SetStateAction } from "react"

interface ContainerProps {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
}

export const TopContainer = ({ isOpen, setIsOpen }: ContainerProps) => {
    return (
        <>
            {
                isOpen && (
                    <div
                        className="fixed inset-0 bg-black/60 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                )}
        </>
    )
}