import { GuideDescription } from "../GuideDescription"
import { AppHeader } from "../AppHeader"
import { ReturnToHome } from "../ReturnToHome"
import { GuideTitle } from "../GuideTitle"
import { GuideMain } from "../GuideMain"
import { GuideHeader } from "../GuideHeader"

export const Advent = () => {
    return (
        <>
            <AppHeader />
            <GuideMain>
                <ReturnToHome path="/devotions" />
                <GuideHeader>
                    <GuideTitle>Advento</GuideTitle>
                    <GuideDescription>São quatro semanas de preparação para o Natal. A cada domingo, é acesa uma vela. Aqui você encontra os dias para acender cada uma.</GuideDescription>
                </GuideHeader>

                <section className="mt-10 text-center">
                    <h2 className="text-5xl">Em breve as datas serão publicadas!!!</h2>
                </section>
            </GuideMain>
        </>
    )
}