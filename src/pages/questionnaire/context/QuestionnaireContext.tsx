// React
import { createContext, useContext } from 'react'

// Types
import { StartingPointKey } from '../types'

// Hooks
import { useQuestionnaire } from '../hooks/useQuestionnaire';


// Questionnaire context provides access to the useQuestionnaire hook
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
