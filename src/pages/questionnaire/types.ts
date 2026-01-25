type QuestionBase = {
  id: string;
  text: string;
};

export type YesNoQuestion = QuestionBase & {
  type: "yes_no";
  next: {
    yes: string;
    no: string;
  };
};

export type MultipleChoiceQuestion = QuestionBase & {
  type: "multiple_choice";
  options: { value: string; label: string; hasTextInput?: boolean }[];
  next: string | Record<string, string>;
};

export type TextQuestion = QuestionBase & {
  type: "text";
  next: string;
};

export type Question =
  | YesNoQuestion
  | MultipleChoiceQuestion
  | TextQuestion;


export type StartingPoint = {
  id: StartingPointKey;
  text: string;
  startQuestionId: string;
  estimatedNumberOfQuestions: number;
};

export type StartingPointKey = "culture" | "portfolio" | "project";

export type StartingPointsMap = Record<StartingPointKey, StartingPoint>;

export type OnAnswerFunction = (answer: string) => void;
