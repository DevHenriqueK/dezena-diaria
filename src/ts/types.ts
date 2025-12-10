export interface Devotion {
    offerPrayers: OfferPrayers[],
    monthPrayers: MonthPrayers[],
    thanksPrayers: ThanksPrayers[],
}

interface OfferPrayers {
    id: number,
    period?: string,
    prayer: string,
}

interface MonthPrayers {
    id: number,
    period?: string,
    link?: string,
    prayer: string,
}

interface ThanksPrayers {
    id: number,
    period?: string,
    prayer: string,
}


export interface Mystery {
    category: string,
    dates: string[],
    days: string
    mysteries: Mysteries[],
}

interface Mysteries {
    id: number,
    mystery: string,
    versicle: string,
}