import React, { useState } from 'react';

import { QUIZ_QUESTIONS } from '../data/quizQuestions';
import type { QuizQuestion } from '../data/quizQuestions';

import { QuizActiveScreen } from './QuizActiveScreen';
import { QuizIntroScreen } from './QuizIntroScreen';

import { QuizResultScreen } from './QuizResultScreen';

const QUESTIONS_PER_ROUND = 20;

function pickRoundQuestions(): QuizQuestion[] {
  const shuffled = [...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, QUESTIONS_PER_ROUND);
}

type QuizPhase = 'intro' | 'active' | 'result';

export function QuizFlow() {
  const [phase, setPhase] = useState<QuizPhase>('intro');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const startRound = () => {
    setQuestions(pickRoundQuestions());
    setQuestionIndex(0);
    setScore(0);
    setPhase('active');
  };

  const handleAnswer = (isCorrect: boolean) => {
    const nextScore = isCorrect ? score + 1 : score;
    setScore(nextScore);

    if (questionIndex + 1 < questions.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setPhase('result');
    }
  };

  if (phase === 'active' && questions[questionIndex]) {
    return (
      <QuizActiveScreen
        question={questions[questionIndex]}
        onAnswer={handleAnswer}
      />
    );
  }

  if (phase === 'result') {
    return (
      <QuizResultScreen
        score={score}
        total={questions.length}
        onPlayAgain={startRound}
        onBackHome={() => setPhase('intro')}
      />
    );
  }

  return <QuizIntroScreen onStart={startRound} />;
}
