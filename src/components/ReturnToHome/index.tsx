import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

export const ReturnToHome = ({path}: {path: string}) => {
    return (
        <Link to={path} className="text-2xl" title="Voltar ao menu">
            <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
    )
}