import { useState } from 'react';
import Header from './conponents/Header';
import FeedbackList from './conponents/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './conponents/FeedbackStats';
import FeedbackForm from './conponents/FeedbackForm';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  function deleteFeedback(id) {
    if (window.confirm('Are you sure?')) {
      setFeedback(feedback.filter(el => el.id !== id));
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedbacks={feedback} />
        <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
