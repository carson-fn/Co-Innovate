import { createContext, useContext } from 'react'
import { StartingPointKey } from '../types'
import { useQuestionnaire } from '../hooks/useQuestionnaire';

const QuestionnaireContext = createContext<ReturnType<typeof useQuestionnaire> | null>(null)

export function QuestionnaireProvider({ startingPointKey, children }: { startingPointKey: StartingPointKey, children: React.ReactNode }) {
    
    const questionnaire = useQuestionnaire(startingPointKey);

    return (
        <QuestionnaireContext.Provider value={questionnaire}>
            {children}
        </QuestionnaireContext.Provider>
    )
}

export function useQuestionnaireContext() {
    const context = useContext(QuestionnaireContext);
    if (!context) {
        throw new Error('useQuestionnaireContext must be used within a QuestionnaireProvider');
    }  
    return context;
}
