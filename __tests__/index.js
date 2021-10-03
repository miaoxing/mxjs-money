import money from '../';

describe('money', () => {
  test('add', () => {
    expect(money('2.51').add('0.01').toString()).toBe('2.52');
  });

  test('sub', () => {
    expect(money('2.52').sub('0.01').toString()).toBe('2.51');
  });

  test('mul', () => {
    expect(money('2.52').mul('6').toString()).toBe('15.12');
  });

  test('div', () => {
    expect(money('2.52').div('3').toString()).toBe('0.84');
  });

  test('manipulate object', () => {
    expect(money('2.51').add(money('0.01')).toString()).toBe('2.52');
  });

  test('remove ending zero', () => {
    expect(money('2.51').sub(money('0.01')).toString()).toBe('2.5');
  });

  test('mutable ', () => {
    const value = money('2.51');
    value.sub('0.01');
    expect(value.toString()).toBe('2.5');
  });
});
