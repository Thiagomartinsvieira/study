test('I must know the main successes of jest', () => {
  let number = null;
  expect(number).toBeNull();
  number = 10;
  expect(number).not.toBeNull();
  expect(number).toBe(10);
  expect(number).toEqual(10);
  expect(number).toBeGreaterThan(9);
  expect(number).toBeLessThan(11);
});

test('I Most Know how to work with objects', () => {
  const obj = { name: 'Thiago', mail: 'thiago@email.com' };
  expect(obj).toHaveProperty('name');
  expect(obj).toHaveProperty('name', 'Thiago');
  expect(obj.name).toBe('Thiago');

  const obj2 = { name: 'Thiago', mail: 'thiago@email.com' };
  expect(obj).toEqual(obj2);
  expect(obj).toBe(obj );
});
