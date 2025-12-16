import { useState } from 'react';
import { Quiz } from './components/Quiz.tsx';
import { Menu } from './components/Menu.tsx';
import { questions, type Category } from './questions.ts';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all' | null>(null);

  const filteredQuestions = selectedCategory
    ? questions.filter((q) => selectedCategory === 'all' || q.category === selectedCategory)
    : [];

  return (
    <div className="app-container">
      {!selectedCategory ? (
        <Menu onSelectCategory={setSelectedCategory} />
      ) : (
        <Quiz
          key={selectedCategory} // Force remount on category change
          questions={filteredQuestions}
          onBackToMenu={() => setSelectedCategory(null)}
        />
      )}
    </div>
  );
}

export default App;
