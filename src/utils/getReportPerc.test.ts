import { getReportPerc } from './getReportPerc';

describe('getReportPerc', () => {
  it('deve retornar 0 quando índice for 0', () => {
    const result = getReportPerc(0, {
      id: '014c4220-df90-4a43-b809-657941b53770',
      investmentId: 'b21cbd7d-f4ae-4ff1-b015-c76b9c264a1a',
      month: 6,
      year: 2020,
      value: 1323.460215,
    });
    expect(result).toEqual(0);
  });

  it('deve retornar o percentual', () => {
    const previousReport = {
      id: '014c4220-df90-4a43-b809-657941b53770',
      investmentId: 'b21cbd7d-f4ae-4ff1-b015-c76b9c264a1a',
      month: 1,
      year: 2020,
      value: 100,
    };
    const report = {
      id: '014c4220-df90-4a43-b809-657941b53771',
      investmentId: 'b21cbd7d-f4ae-4ff1-b015-c76b9c264a1a',
      month: 2,
      year: 2020,
      value: 110,
    };
    const result = getReportPerc(1, report, previousReport);
    expect(result).toEqual(10);
  });

  it('deve retornar o percentual negativo', () => {
    const previousReport = {
      id: '014c4220-df90-4a43-b809-657941b53770',
      investmentId: 'b21cbd7d-f4ae-4ff1-b015-c76b9c264a1a',
      month: 1,
      year: 2020,
      value: 100,
    };
    const report = {
      id: '014c4220-df90-4a43-b809-657941b53771',
      investmentId: 'b21cbd7d-f4ae-4ff1-b015-c76b9c264a1a',
      month: 2,
      year: 2020,
      value: 50,
    };
    const result = getReportPerc(1, report, previousReport);
    expect(result).toEqual(-50);
  });
});
