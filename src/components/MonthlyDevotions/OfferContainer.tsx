import type { Devotion } from "../../ts/types"

export const OfferContainer = ({devotion}: { devotion: Devotion }) => {
    return (
        <section className="lg:w-[20%]">
            <h3 className="text-[1.3rem]">Oferecimento</h3>
            {
                devotion.offerPrayers.map(prayer => (
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