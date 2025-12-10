import { GuideDescription } from "../GuideDescription"
import { AppHeader } from "../AppHeader"
import { ReturnToHome } from "../ReturnToHome"
import { GuideTitle } from "../GuideTitle"
import { GuideHeader } from "../GuideHeader"
import { GuideMain } from "../GuideMain"

export const Gospels = () => {
    return (
        <>
            <AppHeader />
            <GuideMain>
                <ReturnToHome path='/devotions' />
                <GuideHeader>
                    <GuideTitle>Evangelhos</GuideTitle>
                    <GuideDescription>É a nossa meditação do mês de setembro. A cada dia, pegue sua Bíblia e reze um evangelho, de acordo com a data presente na tabela abaixo.</GuideDescription>
                    <GuideDescription>Obs.: todos os dados de evangelhos diários foram trazidos do site <a className="underline" href="https://www.vaticannews.va/pt/palavra-do-dia.html" target="_blank">Vatican News</a>.</GuideDescription>
                </GuideHeader>

                <section className="mt-10 text-center">
                    <h2 className="text-5xl">Os evangelhos serão inseridos em breve!</h2>
                </section>
            </GuideMain>
        </>
    )
}