import type { InvestmentsReport } from '../Types';

const getReportsByInvestmentId = (
  reports: InvestmentsReport[],
  investmentId: string
): InvestmentsReport[] =>
  reports.filter(report => report.investmentId === investmentId);

export default getReportsByInvestmentId;
