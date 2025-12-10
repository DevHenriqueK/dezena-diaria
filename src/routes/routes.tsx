import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AppHome } from "../components/AppHome"
import { Dickers } from "../components/Dickers"
import { Mysteries } from "../components/Mysteries"
import { Prayers } from "../components/Prayers"
import { Gospels } from "../components/Gospels"
import { Rosaries } from "../components/Rosaries"
import { Advent } from "../components/Advent"
import { MonthlyDevotions } from "../components/MonthlyDevotions"

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <AppHome /> } />
                <Route path="/dickers" element={ <Dickers /> } />
                <Route path="/devotions" element={ <MonthlyDevotions /> } />
                <Route path="/mysteries" element={ <Mysteries /> } />
                <Route path="/prayers" element={ <Prayers /> } />
                <Route path="/devotions/gospels" element={ <Gospels /> } />
                <Route path="/devotions/rosaries" element={ <Rosaries /> } />
                <Route path="/devotions/advent" element={ <Advent /> } />
            </Routes>
        </BrowserRouter>
    )
}