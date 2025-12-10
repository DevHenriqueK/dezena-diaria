import { AppHeader } from "../AppHeader"
import { ReturnToHome } from "../ReturnToHome"
import { GuideMain } from "../GuideMain"
import { DickersPlanContainer } from "./DickersPlanContainer"
import { GuideHeader } from "../GuideHeader"
import { GuideDescription } from "../GuideDescription"
import { GuideTitle } from "../GuideTitle"

export const Dickers = () => {
    return (
        <>
            <AppHeader />
            <GuideMain>
                <ReturnToHome path="/" />

                <GuideHeader>
                    <GuideTitle>Conhecendo a Dezena Diária</GuideTitle>
                    <GuideDescription>A Dezena Diária é um momento do seu dia dedicado à oração de uma dezena do terço e a meditação dos seus santos mistérios.</GuideDescription>
                    <GuideDescription >Cada dezena possui suas particularidades. Entre elas, orações que são incluídas ou não. Portanto, fizemos um pré-planejamento do que deve ser rezado em cada dezena. É importante lembrar que você pode incluir novas orações e jaculatórias, se for de seu desejo.</GuideDescription>
                </GuideHeader>

                <DickersPlanContainer />
            </GuideMain>
        </>
    )
}