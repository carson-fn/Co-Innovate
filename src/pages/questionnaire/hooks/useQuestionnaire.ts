import { useState } from 'react';

import { Question, StartingPoint, StartingPointKey, StartingPointsMap } from '../types';
import startingPointsImport from '../data/startingPoints.json';
import questions from '../data/questions.json';

const startingPoints = startingPointsImport as unknown as StartingPointsMap;

export function useQuestionnaire() {

    // Store answers
    const [answers, setAnswers] = useState<Record<string, any>>({});

    // Get starting point and starting question
    const startingPointKey: StartingPointKey = "portfolio";
    const [currentQuestionId, setCurrentQuestionId] = useState<string>(startingPoints[startingPointKey].startQuestionId);
    const currentQuestion: Question = questions[currentQuestionId as keyof typeof questions] as Question;

    // Handle answering the question (passed down as a prop)
    function answerCurrentQuestion(answer: string): void {
        if (!currentQuestion) {
            throw new Error('No current question');
        }

        // Save answer
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [currentQuestionId]: answer,
        }));

        // Get next question id
        setCurrentQuestionId((prevQuestionId: string) => {

            // Extract next field
            let next = questions[prevQuestionId as keyof typeof questions].next

            // If next is a string return it, otherwise return it keyed with the answer
            if (typeof next === 'string') {
                return next;
            } else if (typeof next === 'object') {
                return next[answer as keyof typeof next];
            } else {
                throw new Error('Invalid next question format');
            }
        })
    }


    return {
        currentQuestion,
        answerCurrentQuestion,
        answers,
    }
}