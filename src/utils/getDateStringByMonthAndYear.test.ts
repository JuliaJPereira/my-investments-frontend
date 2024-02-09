import getDateStringByMonthAndYear from './getDateStringByMonthAndYear';
describe('getDateStringByMonthAndYear', () => {
  it('deve retornar janeiro de 2010', () => {
    expect(getDateStringByMonthAndYear(1, 2010)).toBe('Jan/2010');
  });

  it('deve retornar dezembro de 2010', () => {
    expect(getDateStringByMonthAndYear(12, 2010)).toBe('Dez/2010');
  });
});
