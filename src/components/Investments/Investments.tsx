import Reports from '../Reports/Reports';
import { InvestmentsProps } from './Investments.types';
import { getReportsByInvestmentId } from '../../utils';

const Investments = ({ investments, reports }: InvestmentsProps) => {
  return (
    <div>
      <h1>Meus Investimentos</h1>
      {investments.map(investment => (
        <div key={investment.id}>
          <h2>{investment.description}</h2>
          <Reports reports={getReportsByInvestmentId(reports, investment.id)} />
        </div>
      ))}
    </div>
  );
};

export default Investments;
