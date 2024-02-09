import { InvestmentsReport } from '../Types';

export const getReportPerc = (
  index: number,
  report: InvestmentsReport,
  previousReport?: InvestmentsReport
): number => {
  if (index === 0) return 0;

  const previousValue = previousReport?.value || 0;
  const perc = ((report.value - previousValue) / previousValue) * 100;
  return perc;
};
