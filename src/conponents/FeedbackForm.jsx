import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"

export default function FeedbackForm({ handleAdd }) {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState(null)

    const handleTextChange = ({ target: { value } }) => {
        if (value === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (value.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('feedback shuld be more than 10 character')
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }

        setText(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: crypto.randomUUID(),
            text,
            rating
        }
        console.log(rating)
        handleAdd(newItem)
        setText('')
        setRating(10)
        setBtnDisabled(true)
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={{ rating, setRating }} />
                <div className="input-group">
                    <input type="text" value={text} placeholder="write a review" onChange={handleTextChange} />
                    <Button type="submit" isDisable={btnDisabled}>Send</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}
