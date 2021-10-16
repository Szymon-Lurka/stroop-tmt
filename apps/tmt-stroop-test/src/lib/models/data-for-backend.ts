import { DataSet as StroopDataSet } from '../stroop/models/DataSet';

interface StroopAnswer {
  stage: number;
  data: StroopDataSet;
}

interface TmtAnswer {
  value: number;
  distance: number;
  reactionTime: number;
}

interface TmtError {
  currentValue: number;
  reactionTime: number;
}

interface WelcomeForm {
  age: number;
  education: number;
  familyAccepts: number | null;
  financialSituation: number;
  isPlayingGames: number;
  numberOfHoursPerMonth: number | null;
  numberOfHoursPerMonthInTopGame: number | null;
  residence: number;
  sex: number;
  topPopularGame: number | null;
}

export interface DataForBackend {
  additionalQuestionsForm: {
    questionOne: number;
    questionTwo: number;
    questionThree: number;
    questionFour: number;
    questionFive: number;
    questionSix: number;
    questionSeven: number;
    questionEight: number;
    questionNine: number;
    questionTen: number;
  };
  stroopTestAnswers: StroopAnswer[];
  tmtAnswers: TmtAnswer[];
  tmtErrors: TmtError[];
  tmtSecondAnswers: StroopAnswer[];
  tmtSecondErrors: TmtError[];
  welcomeForm: WelcomeForm;
}
