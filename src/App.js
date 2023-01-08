import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './conponents/Header';
import FeedbackList from './conponents/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './conponents/FeedbackStats';
import FeedbackForm from './conponents/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutLink from './conponents/AboutLink';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  function handleAddFeedback(newItem) {
    setFeedback([newItem, ...feedback]);
  }

  function deleteFeedback(id) {
    if (window.confirm('Are you sure?')) {
      setFeedback(feedback.filter(el => el.id !== id));
    }
  }

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={handleAddFeedback} />
                <FeedbackStats feedbacks={feedback} />
                <FeedbackList
                  feedback={feedback}
                  deleteFeedback={deleteFeedback}
                />
              </>
            }
          />

          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
      <Routes>
        <Route path="/" element={<AboutLink />} />
      </Routes>
    </Router>
  );
}

export default App;
