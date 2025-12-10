import { faGear } from '@fortawesome/free-solid-svg-icons'
import { GuidesSection } from './GuidesSection'
import { useState } from 'react'
import { Configurations } from './Configurations'
import { AppHeader } from '../AppHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TopContainer } from './TopContainer'
import { GuideMain } from '../GuideMain'
import { GuideHeader } from '../GuideHeader'
import { GuideDescription } from '../GuideDescription'
import { GuideTitle } from '../GuideTitle'

export const AppHome = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <AppHeader>
                <button className='text-3xl transition-transform active:scale-95 duration-75 cursor-pointer'
                    onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
                </button>
            </AppHeader>

            <TopContainer isOpen={isOpen} setIsOpen={setIsOpen} />

            <Configurations isOpen={isOpen} />

            <GuideMain className='text-center'>
                <GuideHeader>
                    <GuideTitle>Seja bem vindo à Dezena Diária!</GuideTitle>

                    <GuideDescription> Neste site, você aprenderá sobre a oração da Dezena Diária! </GuideDescription>

                    <GuideDescription> Por isso, preparamos alguns guias para que você saia daqui rezando e ensinando outras pessoas! </GuideDescription>

                    <GuideDescription> Esperamos que goste e boa oração! </GuideDescription>
                </GuideHeader>

                <GuidesSection />
            </GuideMain>
        </>
    )
}