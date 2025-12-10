import { Link } from "react-router-dom"
import type { Devotion } from "../../ts/types"

const keyWords = ['Evangelhos', 'Terços', 'Advento']

export const MonthContainer = ({devotion}: { devotion: Devotion }) => {
    return (
        <section className="lg:w-[45%]">
            <h3 className="text-[1.3rem]">Oração do Mês</h3>
            {
                devotion.monthPrayers.map(prayer => (
                    <li key={prayer.id}>
                        {
                            prayer.link &&
                                keyWords.some(word => prayer.prayer.includes(word)) ? (
                                <Link to={prayer.link} className={`inline-block hover:underline text-2xl ${prayer.prayer === 'Advento' && 'mt-4'}`}>
                                    {prayer.prayer.toLocaleUpperCase()}
                                </Link>
                            )
                                : prayer.period ? (
                                    <>
                                        <strong>{prayer.period}: </strong>
                                        {prayer.prayer}
                                    </>
                                ) : <>{prayer.prayer}</>
                        }
                    </li>
                ))
            }
        </section>
    )
}