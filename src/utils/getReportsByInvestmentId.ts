import type { InvestmentsReport } from '../Types';

export default (
  reports: InvestmentsReport[],
  investmentId: string
): InvestmentsReport[] =>
  reports.filter(report => report.investmentId === investmentId);
