import React from 'react'

export default function FeedbackStats({ feedbacks }) {
    const sum = feedbacks.reduce((acc, cur) => acc + cur.rating, 0)
    let avg = (sum / feedbacks.length) || 0
    avg = avg.toFixed(1).replace(/\.0/, '')
    return (
        <div className="feedback-stats">
            <h4>{feedbacks.length} Reviews</h4>
            <h4>Average Rating: {avg}</h4>
        </div>
    )
}
