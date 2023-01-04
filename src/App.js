import { useState } from 'react';
import Header from './conponents/Header';
import FeedbackList from './conponents/FeedbackList';
import FeedbackData from './data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
