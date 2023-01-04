
import { FaTimes } from 'react-icons/fa'
import Card from "./shared/Card"

export default function Feedbackitem({ item }) {

    return (
        <Card reverse={false}>
            <div className="num-display">{item.rating}</div>
            <button className='close'><FaTimes color='purple' /></button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}
