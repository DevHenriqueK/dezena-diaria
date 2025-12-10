import type { Devotion } from "../../ts/types"
import { MonthContainer } from "./MonthContainer"
import { OfferContainer } from "./OfferContainer"
import { ThanksContainer } from "./ThanksContainer"

export const PrayersList = ({devotion}: {devotion: Devotion}) => {
    return (
        <div className="flex flex-col gap-5 items-center justify-center text-center lg:flex-row lg:items-start">
            <OfferContainer devotion={devotion} />
            <MonthContainer devotion={devotion} />
            <ThanksContainer devotion={devotion} />
        </div>
    )
}