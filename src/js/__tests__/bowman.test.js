import Bowman from '../bowman';

test('создание персонажа Bowman', () => {
  const bowman = new Bowman({ name: 'Лучник', type: 'Bowman' });
  const expected = {
    name: 'Лучник',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(bowman).toEqual(expected);
});
