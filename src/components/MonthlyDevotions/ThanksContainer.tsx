import type { Devotion } from "../../ts/types"

export const ThanksContainer = ({devotion}: { devotion: Devotion }) => {
    return (
        <section className="lg:w-[20%]">
            <h3 className="text-[1.3rem]">Agradecimento</h3>
            {
                devotion.thanksPrayers.map(prayer => (
                    <li key={prayer.id}>
                        {
                            prayer.period ? (
                                <>
                                    <strong>{prayer.period}: </strong>
                                    {prayer.prayer}
                                </>
                            ) : (
                                <>{prayer.prayer}</>
                            )
                        }
                    </li>
                ))
            }
        </section>
    )
}