import { TmtSecondDataSet } from '../../tutorial/lib/types/TmtDataSet';

export function checkStyles(value: number | string, currentValue: number, currentLetter?: string): string {
  if (typeof value === 'number') {
    if (value <= currentValue) {
      return 'lightgray';
    } else {
      return 'black';
    }
  } else {
    // @ts-ignore
    if ((TmtSecondDataSet[value] + 1) <= TmtSecondDataSet[currentLetter]) {
      return 'lightgray';
    } else {
      return 'black';
    }
  }
}
