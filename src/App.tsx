import { useState, useEffect } from 'react';
import type { Question, Category } from './questions';
import { questions as defaultQuestions } from './questions';
import { Quiz } from './components/Quiz';
import { Menu } from './components/Menu';
import { QuizLoader } from './components/QuizLoader';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all' | null>(null);
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

  const handleCategorySelect = (category: Category | 'all') => {
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
    } else {
      // Reset to default
      setActiveQuestions(defaultQuestions);
    }
  };

  // Filter questions for the quiz
  const filteredQuestions = selectedCategory === 'all' || !selectedCategory
    ? activeQuestions
    : activeQuestions.filter((q) => q.category === selectedCategory);

  // Note: If using custom questions, they might all be 'general' or 'custom'. 
  // If the user selects a specific category like 'female' but custom questions are 'general', 
  // the quiz will be empty. 
  // We should probably show ALL custom questions if custom questions are active, 
  // OR rely on the user to label them (which our parser defaults to 'general').
  // For simplicity, if custom questions are loaded, we might just treat 'all' as valid? 
  // Or just let filtering work (so "general" matches generic custom ones). 
  // The layout has "general" category.

  return (
    <div className="app-container">
      {view === 'menu' && (
        <Menu
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
