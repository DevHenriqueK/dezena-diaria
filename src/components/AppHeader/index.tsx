import appLogo from '/public/images/logo-sans.png'
import type { ReactNode } from "react"

export const AppHeader = ({ children }: { children?: ReactNode }) => {

    return (
        <header className={`flex justify-between items-center bg-header px-5 h-[20vh] text-black transition-all duration-200`}>
            <div className="w-[35%] sm:w-[25%] md:w-[20%] lg:w-[12%]">
                <img src={appLogo} alt="App logo" />
            </div>

            {children}
        </header>
    )
}