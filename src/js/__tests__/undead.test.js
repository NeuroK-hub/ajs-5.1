import Undead from '../undead';

test('создание персонажа Undead', () => {
  const undead = new Undead({ name: 'Нежить', type: 'Undead' });
  const expected = {
    name: 'Нежить',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(undead).toEqual(expected);
});
