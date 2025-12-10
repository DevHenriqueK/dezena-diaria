import { dickers } from "../../ts/objects/dickers"

export const DickersPlan = () => {
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                dickers.map(dicker => (
                    <li key={dicker.id}>
                        <div className="m-auto bg-cards p-5 rounded-(--card-radius) w-[50%] md:w-[80%]">
                            <h3 className="text-[1.5rem]">{dicker.title}</h3>
                            <ul className="prayer-list overflow-y-auto h-42">
                                {
                                    dicker.prayers.map(prayer => (
                                        <li key={prayer.id}>
                                            {
                                                prayer.count ? (
                                                    <p>{prayer.count}x {prayer.prayer}</p>
                                                ) : (
                                                    <p>{prayer.prayer}</p>
                                                )
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}