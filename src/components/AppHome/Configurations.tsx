import type { ReactNode } from 'react'
import { useTheme } from '../../hooks/useTheme'
import type { ThemeId } from '../../ts/themes'
import { useFont } from '../../hooks/useFont'
import type { FontTypeId } from '../../ts/fontType'

export const FormSection = ({ children }: { children: ReactNode }) => {
    return (
        <section className='bg-cards mt-4 w-[50%] m-auto p-2 pb-1 rounded-(--card-radius)'>
            {children}
        </section>
    )
}

export const Configurations = ({ isOpen }: { isOpen: boolean }) => {

    const { theme, setTheme, themes } = useTheme()
    const { fontType, setFontType, fontTypes } = useFont()

    return (
        <div className={`bg-body text-center py-8 w-[80%] md:w-[50%] lg:w-[30%] m-auto h-[80vh] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-(--card-radius) transition-all duration-300 overflow-y-auto z-50 ${!isOpen && 'opacity-0 scale-90 pointer-events-none'}`}>
            <h2 className='text-3xl'>Configurações</h2>

            <form>
                <FormSection>
                    <label htmlFor='font-selector' className='text-xl'>Tipo da fonte</label>
                    <select id='font-selector' value={fontType.toLowerCase()} onChange={event => setFontType(event.target.value as FontTypeId)}
                        className='w-full text-center appearance-none bg-cards'>
                        {
                            fontTypes.map(font => (
                                <option value={font.fontTypeName.toLowerCase()} key={font.fontTypeName.toLowerCase()} className={`${font.className}`}>
                                    {font.fontTypeName}
                                </option>
                            ))
                        }
                    </select>
                </FormSection>

                <FormSection>
                    <label htmlFor='theme-selector' className='text-xl'>Tema do site</label>
                    <select id='theme-selector' value={theme} onChange={event => setTheme(event.target.value as ThemeId)}
                        className='appearance-none w-full text-center bg-cards'>
                        {
                            themes.map(theme => (
                                <option key={theme.themeCode} value={theme.themeCode}>
                                    {theme.themeName}
                                </option>
                            ))
                        }
                    </select>
                </FormSection>
            </form>

            <div className='mt-8'>
                <h3 className='text-xl'>Visualização do tema</h3>
                <section className='bg-cards w-[65%] m-auto p-3 rounded-(--card-radius)'>
                    <header className={`h-10 leading-10 selection:bg-transparent bg-header text-black`} >
                        Este é o cabeçalho
                    </header>
                    <div className={`bg-body h-20 flex flex-col justify-center items-center selection:bg-transparent`}>
                        <p>Este é o corpo</p>
                        <span className={`bg-selection`}>Este é um conteúdo selecionado</span>
                    </div>
                </section>
            </div>
        </div>
    )
}