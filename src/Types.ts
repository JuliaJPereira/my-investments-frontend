export interface Investment {
  id: string;
  description: string;
}

export interface InvestmentsReport {
  id: string;
  investmentId: string;
  month: number;
  year: number;
  value: number;
}
