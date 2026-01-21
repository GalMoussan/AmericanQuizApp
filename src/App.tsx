import { useState } from 'react';
import { Quiz } from './components/Quiz.tsx';
import { Menu } from './components/Menu.tsx';
import { QuizRepository } from './lib/repository/QuizRepository';
import './App.css';

function App() {
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  const selectedCourse = selectedCourseId ? QuizRepository.getCourseById(selectedCourseId) : null;
  const questionsToDisplay = selectedCourse ? selectedCourse.questions : [];

  return (
    <div className="app-container">
      {!selectedCourseId ? (
        <Menu onSelectCourse={setSelectedCourseId} />
      ) : (
        <Quiz
          key={selectedCourseId} // Force remount on course change
          questions={questionsToDisplay}
          onBackToMenu={() => setSelectedCourseId(null)}
        />
      )}
    </div>
  );
}

export default App;
