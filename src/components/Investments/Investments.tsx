import Reports from '../Reports/Reports';
import { InvestmentsProps } from './Investments.types';
import { getReportsByInvestmentId } from '../../utils';

const Investments = ({ investments, reports }: InvestmentsProps) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Meus Investimentos</h1>
      {investments.map(investment => (
        <section key={investment.id}>
          <h2 style={{ textAlign: 'center' }}>{investment.description}</h2>
          <Reports reports={getReportsByInvestmentId(reports, investment.id)} />
        </section>
      ))}
    </div>
  );
};

export default Investments;
