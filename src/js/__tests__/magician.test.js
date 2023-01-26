import Magician from '../magician';

test('создание персонажа Magician', () => {
  const magician = new Magician({ name: 'Маг', type: 'Magician' });
  const expected = {
    name: 'Маг',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(magician).toEqual(expected);
});
