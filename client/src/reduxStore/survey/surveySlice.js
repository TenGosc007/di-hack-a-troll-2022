import { createSlice } from '@reduxjs/toolkit';

const answer = [
  { id: 1, content: 'tak', checked: false, point: 1 },
  { id: 2, content: 'nie', checked: false, point: -1 },
  { id: 3, content: 'nie wiem', checked: false, point: 0 },
];

export const surveySlice = createSlice({
  name: 'survey',
  initialState: {
    activeQuestion: 0,
    questions: [
      {
        content: 'Czy artykuł ma krzykliwy tytuł i bulwersujący lead, obiecujący sensację, której nie ma?',
        answers: answer,
      },
      {
        content:
          'Czy celem artykułu jest przyciągnięcie kliknięć przekładających się na przychody z reklam strony, na której są publikowane?',
        answers: answer,
      },
      {
        content: 'Czy artykuł ma emocjonalny język lub zdjęcia, wzbudzające negatywne emocje?',
        answers: answer,
      },
      {
        content: 'Czy autor artykułu powołuje się na źródła podawanych informacji? ',
        answers: answer,
      },
    ],
  },
  reducers: {
    next: (state) => {
      state.activeQuestion += 1;
    },
    toggle: (state, action) => {
      const question = state.questions[state.activeQuestion];
      question.answers[action.payload].checked = !question.answers[action.payload].checked;
    },
  },
});

export const selectQuestions = (state) => state.survey.questions;

export const selectActiveQuestion = (state) => state.survey.activeQuestion;

export const { next, toggle } = surveySlice.actions;

export const selectMaxPoints = (state) => {
  let maxPoints = 0;
  state.survey.questions.forEach((question) => {
    maxPoints += question.answers.filter((answer) => answer.point > 0).length;
  });
  return maxPoints;
};

export const selectPoints = (state) => {
  let points = 0;
  state.survey.questions.forEach((question) => {
    points += question.answers.filter((answer) => answer.point > 0 && answer.checked).length;
  });
  return points;
};

export default surveySlice.reducer;
