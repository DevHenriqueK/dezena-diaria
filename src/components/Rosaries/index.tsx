import { GuideDescription } from "../GuideDescription"
import { AppHeader } from "../AppHeader"
import { ReturnToHome } from "../ReturnToHome"
import { GuideTitle } from "../GuideTitle"
import { GuideHeader } from "../GuideHeader"
import { GuideMain } from "../GuideMain"

export const Rosaries = () => {
    return (
        <>
            <AppHeader />
            <GuideMain>
                <ReturnToHome path="/devotions" />
                <GuideHeader className="text-center">
                    <GuideTitle>Terços</GuideTitle>
                    <GuideDescription>A meditação do mês de outubro. Aqui, é rezado quatro terços distintos a cada semana e, nos últimos dias, eles se repetem. Para cada ano, nós preparamos um planejamento diferente de terços, sempre incluindo o terço mariano. Se você não souber rezar algum dos terços abaixo, clique na interrogação que se encontra ao lado. Você será levado a um site informativo.</GuideDescription>
                </GuideHeader>

                <section className="mt-10 text-center">
                    <h2 className="text-5xl">O planejamento será feito em breve!</h2>
                </section>
            </GuideMain>
        </>
    )
}  