import type { Mystery } from "../../ts/types"

const weekdayString = new Date().toLocaleDateString('pt-BR', { weekday: 'long' })

export const MysteriesList = ({mystery}: {mystery: Mystery}) => {
    return (
        <div className={`${weekdayString === mystery.dates[0] || weekdayString === mystery.dates[1] ? 'mystery-box-highlighted border-ember-glow-header border-5 shadow-header shadow-[inset_0_0_15px]' : ''} bg-cards p-5 rounded-(--card-radius) w-[60%] md:w-[80%] lg:w-[90%] m-auto md:h-128`}>
            <div>
                <h3 className="text-[1.7rem]">Mistérios {mystery.category}</h3>
                <p className="text-[1.4rem]">{mystery.days}</p>
            </div>

            <ul className="mt-4">
                {
                    mystery.mysteries.map(mystery => (
                        <li key={mystery.id} className="mb-3">
                            <h4>{mystery.mystery}</h4>
                            <p>{mystery.versicle}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}