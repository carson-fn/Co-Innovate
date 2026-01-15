type QuestionBase = {
  id: string;
  text: string;
};

type YesNoQuestion = QuestionBase & {
  type: "yes_no";
  next: {
    yes: string;
    no: string;
  };
};

type MultipleChoiceQuestion = QuestionBase & {
  type: "multiple_choice";
  options: { value: string; label: string }[];
  next: string | Record<string, string>;
};

type TextQuestion = QuestionBase & {
  type: "text";
  next: string;
};

export type Question =
  | YesNoQuestion
  | MultipleChoiceQuestion
  | TextQuestion;
