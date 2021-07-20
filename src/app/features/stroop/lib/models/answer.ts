export interface Answer {
  stage: number;
  data: {
    questionText: string;
    questionColor: string;
    answer: string;
    reactionTime: number;
  }
}
