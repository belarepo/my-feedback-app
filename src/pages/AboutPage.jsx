import { Link } from 'react-router-dom'
import Card from '../conponents/shared/Card'

export default function AboutPage() {
    return (
        <Card>
            <div className='about'>
                <h1>About This Project</h1>
                <p>This is a React app to leave feedback for a product or service</p>
                <p>Version: 1.0.0</p>

                <p>
                    <Link to={'/'}>Back To Home</Link>
                </p>
            </div>
        </Card>
    )
}
