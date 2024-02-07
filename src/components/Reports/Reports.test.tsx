import React from 'react';
import { render, screen } from '@testing-library/react';
import Reports from './Reports';

describe('Reports', () => {
  it('deve renderizar o componente sem erro', () => {
    const { container } = render(<Reports reports={[]} />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toBeDefined();
  });
});
