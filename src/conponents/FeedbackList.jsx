import React from 'react'
import Feedbackitem from './Feedbackitem'

export default function FeedbackList({ feedback, deleteFeedback }) {
    if (!feedback || feedback.length === 0) {
        return (
            <p>No Item Available</p>
        )
    }
    return (
        <div className='feedback-list'>
            {feedback.map((item) => <Feedbackitem key={item.id} item={item} deleteFeedback={deleteFeedback} />)}
        </div>
    )
}
