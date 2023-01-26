import Swordsman from '../swordsman';

test('создание персонажа Swordsman', () => {
  const swordsman = new Swordsman({ name: 'Мечник', type: 'Swordsman' });
  const expected = {
    name: 'Мечник',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(swordsman).toEqual(expected);
});
