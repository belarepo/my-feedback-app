import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function AboutLink() {
    return (
        <Link to={'/about'}>
            <div className='about-link'>
                <FaQuestion size={30} />
            </div>
        </Link>

    )
}
