import { InvestmentsReport } from '../Types';
import getReportByInvestmentId from './getReportsByInvestmentId';
describe('getReportsByInvestmentId', () => {
  it('deve filtrar os relatórios pelo id do investimento', () => {
    const reports: InvestmentsReport[] = [
      {
        id: '014c4220-df90-4a43-b809-657941b53770',
        investmentId: 'b21cbd7d-f4ae-4ff1-b015-c76b9c264a1a',
        month: 6,
        year: 2020,
        value: 1323.460215,
      },
      {
        id: '015b3492-bcf7-4137-a151-5705e2390773',
        investmentId: 'b23360da-51a2-4943-a99e-8f75e77fd815',
        month: 8,
        year: 2020,
        value: 870.0773971344001,
      },
      {
        id: '01c1ac82-1e1d-422a-8a9d-13d31e5c619d',
        investmentId: '9ba5ccdb-7f4c-4920-ac8a-19fb66eb816c',
        month: 4,
        year: 2020,
        value: 897.078,
      },
    ];
    const investmentId = 'b23360da-51a2-4943-a99e-8f75e77fd815';
    const result = getReportByInvestmentId(reports, investmentId);
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual(reports[1]);
  });

  it('deve filtrar os relatórios pelo id do investimento 2', () => {
    const reports: InvestmentsReport[] = [
      {
        id: '014c4220-df90-4a43-b809-657941b53770',
        investmentId: 'b23360da-51a2-4943-a99e-8f75e77fd815',
        month: 6,
        year: 2020,
        value: 1323.460215,
      },
      {
        id: '015b3492-bcf7-4137-a151-5705e2390773',
        investmentId: 'b23360da-51a2-4943-a99e-8f75e77fd815',
        month: 8,
        year: 2020,
        value: 870.0773971344001,
      },
      {
        id: '01c1ac82-1e1d-422a-8a9d-13d31e5c619d',
        investmentId: '9ba5ccdb-7f4c-4920-ac8a-19fb66eb816c',
        month: 4,
        year: 2020,
        value: 897.078,
      },
    ];
    const investmentId = 'b23360da-51a2-4943-a99e-8f75e77fd815';
    const result = getReportByInvestmentId(reports, investmentId);
    expect(result).toHaveLength(2);
    expect(result[1]).toEqual(reports[1]);
  });

  it('deve retornar um array vazio quando o id do investimento não for encontrado', () => {
    const reports: InvestmentsReport[] = [
      {
        id: '014c4220-df90-4a43-b809-657941b53770',
        investmentId: 'b23360da-51a2-4943-a99e-8f75e77fd815',
        month: 6,
        year: 2020,
        value: 1323.460215,
      },
      {
        id: '015b3492-bcf7-4137-a151-5705e2390773',
        investmentId: 'b23360da-51a2-4943-a99e-8f75e77fd815',
        month: 8,
        year: 2020,
        value: 870.0773971344001,
      },
      {
        id: '01c1ac82-1e1d-422a-8a9d-13d31e5c619d',
        investmentId: '9ba5ccdb-7f4c-4920-ac8a-19fb66eb816c',
        month: 4,
        year: 2020,
        value: 897.078,
      },
    ];
    const investmentId = 'nãotemid';
    const result = getReportByInvestmentId(reports, investmentId);
    expect(result).toHaveLength(0);
  });
});
