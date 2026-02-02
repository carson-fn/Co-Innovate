// React
import { useState, useEffect } from 'react';

// Types
import { OnAnswerFunction, Question, StartingPoint, StartingPointKey, StartingPointsMap } from '../types';

// Data
import startingPointsImport from '../data/startingPoints.json';
import questions from '../data/questions.json';

const startingPoints = startingPointsImport as unknown as StartingPointsMap;

export function useQuestionnaire(startingPointKey: StartingPointKey | null) {

    // Store answers, current question
    const [answers, setAnswers] = useState<Record<string, any>>({});
    const [currentQuestionId, setCurrentQuestionId] = useState<string>("");
    const [isFirstQuestion, setIsFirstQuestion] = useState<Boolean>(false);
    const [isComplete, setIsComplete] = useState(false);

    // Question history for progress bar and back button
    const [questionHistory, setQuestionHistory] = useState<string[]>([]);

    // useEffect to update current question id when we get a starting point key
    useEffect(() => {
        if (!startingPointKey) { return; }
        setCurrentQuestionId(startingPoints[startingPointKey].startQuestionId);
    }, [startingPointKey]);

    
    // update isFirstQuestion
    useEffect(() => {
        if (!startingPointKey) { return; }
        if(currentQuestionId === startingPoints[startingPointKey].startQuestionId){
            setIsFirstQuestion(true)
        } else {
            setIsFirstQuestion(false)
        }
    }, [currentQuestionId])


    
    if (!startingPointKey) { startingPointKey = "portfolio" };

    // Derive current question
    const currentQuestion: Question = questions[currentQuestionId as keyof typeof questions] as Question;

    // Derive progress;
    const totalSteps = startingPoints[startingPointKey].estimatedNumberOfQuestions;
    const progress = Math.min(questionHistory.length / totalSteps, 1);

    if (!currentQuestion) {
        if (currentQuestionId) console.warn('No question found for id:', currentQuestionId);
    }

    // Handle answering the question
    const answerCurrentQuestion: OnAnswerFunction = (answer: string): void => {
        if (!currentQuestion) {
            throw new Error('No current question');
        }

        // Save answer
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [currentQuestionId]: answer,
        }));

        // Add to question history
        setQuestionHistory(prevHistory => ([...prevHistory, currentQuestionId]));

        // Get next question id
        setCurrentQuestionId((prevQuestionId: string) => {

            // Extract next field
            let next = questions[prevQuestionId as keyof typeof questions].next

            // If next is a string return it, otherwise return it keyed with the answer
            if (typeof next === 'string') {

                if (next === "end") {
                    setIsComplete(true);
                    return prevQuestionId;
                }

                return next;
            } else if (typeof next === 'object') {
                return next[answer as keyof typeof next];
            } else {
                throw new Error('Invalid next question format');
            }
        })
    }

    const backToPreviousQuestion = (): void => {
        setQuestionHistory((prevHistory) => {
            const newHistory = [...prevHistory];
            setCurrentQuestionId(newHistory.pop() ?? "");
            return newHistory;
        });
    };

    return {
        currentQuestion,
        answerCurrentQuestion,
        backToPreviousQuestion,
        answers,
        progress,
        isComplete,
        isFirstQuestion
    }
}