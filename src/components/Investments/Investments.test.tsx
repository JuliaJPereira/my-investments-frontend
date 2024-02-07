import React from 'react';
import { render, screen } from '@testing-library/react';
import Investments from './Investments';
import { InvestmentsProps } from './Investments.types';

describe('Investments', () => {
  it('deve renderizar o componente sem erro', () => {
    const { container } = render(<Investments investments={[]} reports={[]} />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toBeDefined();
  });

  it('deve renderizar um título escrito meus investimentos quando houver apenas um', () => {
    render(<Investments investments={[]} reports={[]} />);
    const element = screen.getByText('Meus Investimentos');
    expect(element).toBeInTheDocument();
  });

  it('deve renderizar um cabeçalho de investimento', () => {
    const props: InvestmentsProps = {
      investments: [
        {
          id: '1',
          description: 'Tesouro Direto',
        },
      ],
      reports: [],
    };
    render(<Investments {...props} />);
    const element = screen.getByText('Tesouro Direto');
    expect(element).toBeInTheDocument();
  });

  it('deve renderizar todos os cabeçalhos de investimento', () => {
    const props: InvestmentsProps = {
      investments: [
        {
          id: '1',
          description: 'Tesouro Direto',
        },
        {
          id: '2',
          description: 'Selic',
        },
        {
          id: '3',
          description: 'Jogo do Bicho',
        },
      ],
      reports: [],
    };
    render(<Investments {...props} />);
    props.investments.forEach(investment => {
      const element = screen.getByText(investment.description);
      expect(element).toBeInTheDocument();
    });
  });
});
