function nbMonths(
  startPriceOld,
  startPriceNew,
  savingperMonth,
  percentLossByMonth
) {
  let month = 0;
  let totalSavings = 0;

  while (startPriceNew - startPriceOld > totalSavings) {
    totalSavings += savingperMonth;
    month++;

    startPriceNew *= 1 - percentLossByMonth * 0.01;
    startPriceOld *= 1 - percentLossByMonth * 0.01;

    if (month % 2) {
      percentLossByMonth += 0.5;
    }
  }
  return [month, Math.round(startPriceOld + totalSavings - startPriceNew)];
}
