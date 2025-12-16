import { useState, useEffect, useMemo } from 'react';
import type { Question } from './questions';
import { questions as defaultQuestions } from './questions';
import { Quiz } from './components/Quiz';
import { Menu } from './components/Menu';
import { QuizLoader } from './components/QuizLoader';
import './App.css';

function App() {
  // Use string generally for category to support custom ones
  const [selectedCategory, setSelectedCategory] = useState<string | 'all' | null>(null);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>(defaultQuestions);
  const [view, setView] = useState<'menu' | 'quiz' | 'loader'>('menu');

  // Load custom questions on mount
  useEffect(() => {
    const saved = localStorage.getItem('custom_questions');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setActiveQuestions(parsed);
        }
      } catch (e) {
        console.error("Failed to load custom questions", e);
      }
    }
  }, []);

  // Compute dynamic categories from active questions
  const categories = useMemo(() => {
    const map = new Map<string, number>();
    activeQuestions.forEach(q => {
      // Normalize category if missing or messy?
      const cat = q.category || 'כללי';
      map.set(cat, (map.get(cat) || 0) + 1);
    });

    // Convert to array for Menu
    const list = Array.from(map.entries()).map(([id, count]) => ({
      id: id,
      label: id, // For custom, label is same as ID usually. 
      // If default questions, we might want mapped labels?
      // We'll fix this in Menu mapping or here.
      // The request asked for dynamic menu based on "Topic fields".
      count: count
    }));
    return list;
  }, [activeQuestions]);

  const handleCategorySelect = (category: string | 'all') => {
    setSelectedCategory(category);
    setView('quiz');
  };

  const handleBackToMenu = () => {
    setSelectedCategory(null);
    setView('menu');
  };

  const handleOpenLoader = () => {
    setView('loader');
  };

  const handleQuestionsUpdate = (newQuestions: Question[] | null) => {
    if (newQuestions) {
      setActiveQuestions(newQuestions);
      // Automatically go to menu to see new categories
      setView('menu');
    } else {
      // Reset to default
      setActiveQuestions(defaultQuestions);
      setView('menu');
    }
  };

  // Filter questions for the quiz
  const filteredQuestions = selectedCategory === 'all' || !selectedCategory
    ? activeQuestions
    : activeQuestions.filter((q) => q.category === selectedCategory);

  return (
    <div className="app-container">
      {view === 'menu' && (
        <Menu
          categories={categories}
          onSelectCategory={handleCategorySelect}
          onOpenLoader={handleOpenLoader}
        />
      )}

      {view === 'loader' && (
        <QuizLoader
          onBack={handleBackToMenu}
          onQuestionsUpdate={handleQuestionsUpdate}
        />
      )}

      {view === 'quiz' && (
        <Quiz
          key={selectedCategory} // Force remount on category change
          questions={filteredQuestions}
          onBackToMenu={handleBackToMenu}
        />
      )}
    </div>
  );
}

export default App;
