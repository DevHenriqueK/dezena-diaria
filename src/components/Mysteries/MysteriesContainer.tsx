import { mysteries } from "../../ts/objects/mysteries"
import { MysteriesList } from "./MysteriesList"

export const MysteriesContainer = () => {
    return (
        <ul className="text-center mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {
                mysteries.map(mystery => (
                    <li key={mystery.id}>
                        <MysteriesList mystery={mystery} />
                    </li>
                ))
            }
        </ul>
    )
}