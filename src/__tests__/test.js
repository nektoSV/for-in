import sortData from '../index';

test.each([
  [ 
    "мечник",
    ["name", "level"],
    {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40},
    [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 }
    ]
  ],
  [ 
    "лучник",
    ["name", "health"],
    {name: 'лучник', health: 100, level: 15, attack: 180, defence: 40},
    [
      { key: 'name', value: 'лучник' },
      { key: 'health', value: 100 },
      { key: 'attack', value: 180 },
      { key: 'defence', value: 40 },
      { key: 'level', value: 15 }
    ]
  ],
  [ 
    "маг",
    ["name", "attack"],
    {name: 'маг', health: 100, level: 1, attack: 20, defence: 0},
    [
      { key: 'name', value: 'маг' },
      { key: 'attack', value: 20 },
      { key: 'defence', value: 0 },
      { key: 'health', value: 100 },
      { key: 'level', value: 1 }
    ]
  ]
])// eslint-disable-next-line
('testing sortData function with %s name', (_, data, obj, expected) => {
  const result = sortData(obj, data);
  expect(result).toEqual(expected);
});