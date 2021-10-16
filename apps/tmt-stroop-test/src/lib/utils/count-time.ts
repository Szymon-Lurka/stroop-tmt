export function countTime(startTime: number): {timePassedFromStart: number, clickTime: number} {
  if (startTime < 0) {
    startTime = new Date().getTime();
  }
  const clickTime = new Date().getTime();
  const timePassedFromStart = (clickTime - startTime) / 1000;
  return {
    timePassedFromStart,
    clickTime
  };
}
