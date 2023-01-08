import { Link } from 'react-router-dom'

export default function Header() {

    return (
        <header>
            <div className='container'>
                <Link to={'/'}><h2>Feedback UI</h2></Link>


            </div>
        </header>
    )
}
