import { AppHeader } from "../AppHeader"
import { GuideHeader } from "../GuideHeader"
import { GuideMain } from "../GuideMain"
import { GuideTitle } from "../GuideTitle"
import { ReturnToHome } from "../ReturnToHome"
import { PrayersList } from "./PrayersList"

export const Prayers = () => {
    return (
        <>
            <AppHeader />
            <GuideMain>
                <ReturnToHome path="/" />
                <GuideHeader>
                    <GuideTitle>Orações do Terço</GuideTitle>
                </GuideHeader>

                <PrayersList />
            </GuideMain>
        </>
    )
}