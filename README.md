# Study Buddy

> The AI-Powered Gamified Learning Platform.

**Status:** 🚀 MVP Complete!

## About the Project

Study Buddy is a modern quiz application designed to make studying addictive. This app transforms traditional learning by integrating gamification elements such as XP scoring, daily streaks, and dynamic progress bars to keep you motivated.

## Key Features

### 🧠 Specialized Tracks
Access distinct learning modules tailored to your needs:
- **Learning Psychology**: A comprehensive module featuring 50+ questions.
- **Core Studies**: Covers essential subjects including Biology, History, and React.

### ✨ AI Creator Mode
Powered by **Google Gemini**. Simply paste your raw study notes, and the AI will instantly generate a playable quiz for you.

### 🎮 Gamified Interface
Enjoy a dynamic learning experience with:
- Instant feedback on answers.
- Streak tracking to build consistent habits.
- A dynamic HUD (Heads-Up Display) to monitor your progress.

### 📱 Responsive Design
Fully optimized for both Desktop and Mobile devices, ensuring a seamless experience anywhere.

## User Guide

### Step 1: The Dashboard
Your journey begins on the Dashboard, divided into two main sections:
- **Psychology**: Dedicated to the Learning Psychology track.
- **Core Studies**: A collection of other available subjects.

### Step 2: Taking a Quiz
Select any module to start:
- **Gameplay**: Choose the correct answer from the options provided.
- **Rewards**: Earn XP for every correct answer and build your streak to unlock achievements.

### Step 3: Creating Content
Create custom quizzes with the AI Creator Mode:
1. Click the **"Create New"** button.
2. Paste your raw text notes into the input area.
3. Click generate, and the AI will create a new quiz for you instantly.

## Technical Quick Start

To get the project up and running locally:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up Environment Variables**:
   Create a `.env.local` file in the root directory and add your Gemini API key:
   ```bash
   GEMINI_API_KEY=your_key_here
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
