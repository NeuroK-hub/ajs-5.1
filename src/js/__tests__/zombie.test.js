import Zombie from '../zombie';

test('создание персонажа Zombie', () => {
  const zombie = new Zombie({ name: 'Зомби', type: 'Zombie' });
  const expected = {
    name: 'Зомби',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(zombie).toEqual(expected);
});
