import React from 'react';
import { ReportsProps } from './Reports.type';
import { getDateStringByMonthAndYear, getReportPerc } from '../../utils';

const Reports = ({ reports }: ReportsProps) => {
  const getRendimentoTotal = () => {
    if (reports.length === 0) return 0;
    return reports[reports.length - 1].value - reports[0].value;
  };

  const getRendimentoTotalPerc = () => {
    if (reports.length === 0) return 0;
    return getReportPerc(
      reports.length - 1,
      reports[reports.length - 1],
      reports[0]
    );
  };

  const rendimentoTotal = getRendimentoTotal();
  const rendimentoTotalPerc = getRendimentoTotalPerc();
  const rendimentoTotalColor = (() => {
    if (rendimentoTotalPerc === 0) return 'black';
    if (rendimentoTotalPerc > 0) return 'green';
    return 'red';
  })();

  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>
        Rendimento total:{' '}
        <span style={{ color: rendimentoTotalColor }}>
          {rendimentoTotal.toLocaleString('pt-BR', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
            style: 'currency',
            currency: 'BRL',
          })}{' '}
          {''}({rendimentoTotalPerc > 0 && '+'}
          {rendimentoTotalPerc.toFixed(2)}%)
        </span>
      </h3>
      <ul style={{ listStyle: 'none', margin: '0 auto', maxWidth: '300px' }}>
        {reports.map((report, index) => {
          const perc = getReportPerc(index, report, reports[index - 1]);
          const color = (() => {
            if (perc === 0) return 'black';
            if (perc > 0) return 'green';
            return 'red';
          })();
          return (
            <li
              key={report.id}
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <div>
                <span
                  data-testid={`report-date-${report.id}`}
                  style={{
                    display: 'inline-block',
                    width: 100,
                    textAlign: 'end',
                    marginRight: '10px',
                  }}
                >
                  {getDateStringByMonthAndYear(report.month, report.year)}
                </span>
                <span
                  data-testid={`report-value-${report.id}`}
                  style={{ color }}
                >
                  {report.value.toLocaleString('pt-BR', {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </span>
              </div>
              <div>
                <span
                  data-testid={`report-percent-${report.id}`}
                  style={{ color }}
                >
                  {perc > 0 && '+'}
                  {perc.toFixed(2)}%
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reports;
