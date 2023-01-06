import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"

export default function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState(null)

    const handleTextChange = (e) => {
        if (e.target.value === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (e.target.value.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('feedback shuld be more 10 chars')
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }

        setText(e.target.value)
    }

    return (
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>
                <div className="input-group">
                    <input type="text" value={text} placeholder="write a review" onChange={handleTextChange} />
                    <Button type="submit" isDisable={btnDisabled}>Send</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}
