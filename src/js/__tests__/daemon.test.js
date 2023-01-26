import Daemon from '../daemon';

test('создание персонажа Daemon', () => {
  const daemon = new Daemon({ name: 'Демон', type: 'Daemon' });
  const expected = {
    name: 'Демон',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(daemon).toEqual(expected);
});
