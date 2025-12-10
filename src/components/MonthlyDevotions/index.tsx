import { AppHeader } from "../AppHeader"
import { ReturnToHome } from "../ReturnToHome"
import { GuideDescription } from "../GuideDescription"
import { GuideMain } from "../GuideMain"
import { GuideHeader } from "../GuideHeader"
import { DevotionsList } from "./DevotionsList"
import { GuideTitle } from "../GuideTitle"

export const MonthlyDevotions = () => {
    return (
        <>
            <AppHeader />
            <GuideMain>
                <ReturnToHome path="/" />
                <GuideHeader>
                    <GuideTitle>Devoções Mensais</GuideTitle>
                    <GuideDescription>São santos e acontecimentos especiais de cada mês, meditados com orações próprias. Neste guia, você aprenderá todas as devoções e sugestões de orações para cada uma delas. Mais uma vez reforçamos que você pode sim adicionar novas orações em cada devoção.</GuideDescription>
                </GuideHeader>

                <DevotionsList />
            </GuideMain>
        </>
    )
}