import { prayers } from "../../ts/objects/prayers"

export const PrayersList = () => {
    return (
        <ul>
            {
                prayers.map(prayer => (
                    <li key={prayer.id}>
                        <p className="mb-4 text-justify">
                            <strong>{prayer.title}: </strong>
                            {prayer.prayer}
                        </p>
                    </li>
                ))
            }
        </ul>
    )
}