import { GuideDescription } from "../GuideDescription"
import { AppHeader } from "../AppHeader"
import { ReturnToHome } from "../ReturnToHome"
import { GuideMain } from "../GuideMain"
import { GuideHeader } from "../GuideHeader"
import { GuideTitle } from "../GuideTitle"
import { MysteriesContainer } from "./MysteriesContainer"



export const Mysteries = () => {
    return (
        <>
            <AppHeader />
            <GuideMain className="p-(--main-padding)">
                <ReturnToHome path="/" />
                <GuideHeader className="text-center">
                    <GuideTitle>Os Mistérios do Terço</GuideTitle>
                    <GuideDescription>Os mistérios são partes da Bíblia que meditamos na oração. Eles são separados em dias específicos, são meditados após as dezenas (em caso de 2ª, 3ª, 4ª ou 5ª) e trazem um versículo, a fim de melhorar seu entendimento. Caso seja necessário, pode-se também pesquisar a explicação.</GuideDescription>
                    <GuideDescription>Para não deixá-lo na mão, abaixo temos todos os mistérios do Santo Terço, os dias de cada grupo e o versículo de cada um.</GuideDescription>
                </GuideHeader>

                <MysteriesContainer />
            </GuideMain>
        </>
    )
}