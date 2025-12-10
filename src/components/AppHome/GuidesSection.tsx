import { Link } from "react-router-dom"
import { guides } from "../../ts/objects/guides"

export const GuidesSection = () => {
    return (
        <section className='mt-8'>
            <h3 className='text-3xl text-center'>Nossos guias</h3>
            <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-1'>
                {
                    guides.map(guide => (
                        <li key={guide.id}>
                            <div className='sm:flex flex-col items-center justify-center bg-cards-black px-3 py-5 text-center rounded-(--card-radius) h-30 sm:h-45 lg:h-78 m-auto bg-cards'>
                                <h4 className='text-[1.5rem] leading-tight'>{guide.title}</h4>
                                <p className='mb-1.5'>{guide.description}</p>
                                <Link to={guide.url} className='border px-3 py-1.5 rounded-full'>Ver guia</Link>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}