import React from 'react';
import { render, screen } from '@testing-library/react';
import Reports from './Reports';

const reports = [
  {
    id: '014c4220-df90-4a43-b809-657941b53770',
    investmentId: 'b21cbd7d-f4ae-4ff1-b015-c76b9c264a1a',
    month: 6,
    year: 2020,
    value: 1323.460215,
  },
  {
    id: '015b3492-bcf7-4137-a151-5705e2390773',
    investmentId: 'b21cbd7d-f4ae-4ff1-b015-c76b9c264a1a',
    month: 8,
    year: 2020,
    value: 870.0773971344001,
  },
];

describe('Reports', () => {
  it('deve renderizar o componente sem erro', () => {
    const { container } = render(<Reports reports={[]} />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toBeDefined();
  });

  it('deve renderizar o primeiro item com percentual de 0%', () => {
    render(<Reports reports={reports} />);
    const element = screen.getByTestId(`report-percent-${reports[0].id}`);
    expect(element).toHaveTextContent('0%');
  });

  it('deve renderizar o valor formatado', () => {
    render(<Reports reports={reports} />);
    const element = screen.getByTestId(`report-value-${reports[0].id}`);
    expect(element).toHaveTextContent('R$ 1.323,46');
  });

  it('deve renderizar a data formatada', () => {
    render(<Reports reports={reports} />);
    const element = screen.getByTestId(`report-date-${reports[0].id}`);
    expect(element).toHaveTextContent('Jun/2020');
  });
});
