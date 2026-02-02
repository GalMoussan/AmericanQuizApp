import { questions as ALL_QUESTIONS, type Question } from '../../questions';

export interface Course {
	id: string;
	title: string;
	topic: string;
	description: string;
	color: string; // CSS class for color
	questionCount: string; // e.g. "Questions 1-12" or "50 Questions"
	questions: Question[];
}

export const DEFAULT_COURSES: Course[] = [
	{
		id: 'psy-101',
		title: 'מבוא לפסיכולוגיה',
		topic: 'Psychology Practice',
		description: 'שאלות יסוד בפסיכולוגיה, מדעי המוח ושיטות מחקר',
		color: 'bg-blue-100',
		questionCount: 'שאלות בסיסיות',
		questions: ALL_QUESTIONS.filter(q => q.category === 'psychology')
	},
	{
		id: 'psy-hard',
		title: 'שאלות מתקדמות',
		topic: 'Psychology Practice',
		description: 'שאלות חשיבה, יישום ואינטגרציה',
		color: 'bg-red-100',
		questionCount: 'אתגר מתקדם',
		questions: ALL_QUESTIONS.filter(q => q.category === 'hard')
	}
];

export const QuizRepository = {
	getAllCourses: () => DEFAULT_COURSES,
	getCourseById: (id: string) => DEFAULT_COURSES.find(c => c.id === id)
};
