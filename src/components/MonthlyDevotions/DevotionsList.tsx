import { monthlyDevotions } from "../../ts/objects/monthlyDevotions"
import { PrayersList } from "./PrayersList"

export const DevotionsList = () => {
    return (
        <ul className="mt-10">
            {
                monthlyDevotions.map(devotion => (
                    <li key={devotion.id}>
                        <article className="mb-6 bg-cards py-6 px-4 rounded-(--card-radius)">
                            <header className="text-center leading-4 mb-5">
                                <h3 className="text-3xl">{devotion.month}</h3>
                                <p>{devotion.devotion}</p>
                            </header>

                            <PrayersList devotion={devotion} />
                        </article>
                    </li>
                ))
            }
        </ul>
    )
}